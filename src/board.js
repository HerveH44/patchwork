import React, { useRef, useEffect, useContext } from "react";
import { GameContext } from "./App";

const Canvas = props => {
  const canvasRef = useRef(null);
  const { drawCanvas, onKeyDown, resetBoard } = useBoard();
  useEffect(focusBoard, []);
  useEffect(draw, [drawCanvas]);

  function focusBoard() {
    canvasRef.current.focus();
  }

  function draw() {
    drawCanvas(canvasRef.current);
    focusBoard();
  }

  return (
    <div>
      <canvas tabIndex={0} ref={canvasRef} {...props} onKeyDown={onKeyDown} />
      <button onClick={() => {
        resetBoard();
        focusBoard();

      }}>RESET</button>
    </div>
  );
};

function useBoard() {
  const { setSelectedPatch, validatePatch, selectedPatch, pickedPatches, reset: resetBoard } = useContext(GameContext);

  function renderBackground(canvas) {
    const context = canvas.getContext('2d');
    context.fillStyle = '#b6b61c';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    pickedPatches.forEach(piece => {
      drawShape(canvas, {
        ...piece,
      })
    });
  }

  function drawPixel(canvas, color, x, y) {
    const context = canvas.getContext('2d');
    const pixel_width = canvas.width / 9;
    const pixel_height = canvas.height / 9;

    context.fillStyle = color;
    context.fillRect(x * pixel_width, y * pixel_height, pixel_width, pixel_height);

  }

  function drawShape(canvas, shape) {
    if (!shape) return;
    const { points, color, position: { x, y } } = shape;

    for (const point of points) {
      drawPixel(canvas, color, point[0] + x, point[1] + y)
    }
  }

  function validPosition({ position: { x, y }, points }) {
    return !points.some(point => {
      if (point[0] + x > 8) return true; // can't move too far right
      if (point[0] + x < 0) return true; // can't move too far left
      if (point[1] + y > 8) return true; // can't move too far down
      if (point[1] + y < 0) return true; // can't move too far up
      return false;
    });
  }

  function movePosition(x = 0, y = 0) {
    const newObjet = {
      ...selectedPatch,
      position: {
        x: x + selectedPatch.position.x,
        y: y + selectedPatch.position.y
      }
    };
    if (!validPosition(newObjet)) { return; }
    setSelectedPatch(newObjet);
  }

  function rotateObjet() {
    const { width, height, points } = selectedPatch;

    const tX = Math.floor(width / 2);
    const tY = Math.floor(height / 2);
    const newPoints = points.map(([x, y]) => {
      const x0 = x - tX;
      const y0 = y - tY;

      let xPrime = - y0;
      let yPrime = x0;

      xPrime += tX;
      yPrime += tY;

      return [xPrime, yPrime];
    })

    const newObjet = {
      ...selectedPatch,
      points: newPoints
    }

    if (!validPosition(newObjet)) { return; }
    setSelectedPatch(newObjet);
  }


  function onKeyDown(e) {
    if (selectedPatch == null) return;
    switch (e.key) {
      case 'ArrowLeft': {
        movePosition(-1)
        break;
      }
      case 'ArrowRight': {
        movePosition(+1);
        break;
      }
      case 'ArrowUp': {
        movePosition(0, -1);
        break;
      }
      case 'ArrowDown': {
        movePosition(0, +1);
        break;
      }
      case 'r': {
        rotateObjet();
        break;
      }
      case 'f': {
        const newPoints = selectedPatch.points.map(point => [-point[0], point[1]]);
        const newObjet = { ...selectedPatch, points: newPoints };
        if (validPosition(newObjet)) {
          setSelectedPatch(newObjet);
        }
        break;
      }
      case 'Enter': {
        const { points, position: { x, y } } = selectedPatch;

        function isColliding(point) {
          return pickedPatches.some(piece => piece.points.some(p => {
            const isSameX = (p[0] + piece.position.x) === (point[0] + x);
            const isSameY = ((p[1] + piece.position.y) === (point[1] + y));
            return isSameX && isSameY;
          }));
        }

        if (points.some(isColliding)) return;

        validatePatch();
        break;
      }
      default:
        console.log(e.key);
    }
    e.preventDefault();
  }


  function drawCanvas(canvas) {
    if (!canvas) return;
    renderBackground(canvas);
    drawShape(canvas, selectedPatch);
  }

  return {
    onKeyDown,
    drawCanvas,
    resetBoard,
  }
}

export default Canvas;
