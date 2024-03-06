import React, { useRef, useEffect, useState } from "react";

const Canvas = props => {
  const canvasRef = useRef(null);
  const { drawCanvas, onKeyDown } = useBoard();
  useEffect(focusBoard, []);

  function focusBoard() {
    canvasRef.current.focus();
  }

  drawCanvas(canvasRef.current);
  return <canvas tabIndex={0} ref={canvasRef} {...props} onKeyDown={onKeyDown} />
};

function useBoard() {
  const [objet, setObjet] = useState(
    {
      color: 'blue',
      points: [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 1]
      ]
    });

  function renderBackground(context) {
    context.fillStyle = '#b6b61c'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }

  function drawPixel(canvas, color, x, y) {
    const context = canvas.getContext('2d');
    const pixel_width = canvas.width / 9;
    const pixel_height = canvas.height / 9;

    context.fillStyle = color;
    context.fillRect(x * pixel_width, y * pixel_height, pixel_width, pixel_height);

  }

  function drawShape(canvas, shape) {
    const { points, color } = shape;

    for (const point of points) {
      drawPixel(canvas, color, point[0], point[1])
    }
  }


  function onKeyDown(e) {
    switch (e.key) {
      case 'ArrowLeft': {
        const newObjet = {
          ...objet,
          points: objet.points.map(point => [point[0] - 1, point[1]])
        };
        setObjet(newObjet);
        break;
      }
      case 'ArrowRight': {
        const newObjet = {
          ...objet,
          points: objet.points.map(point => [point[0] + 1, point[1]])
        };
        setObjet(newObjet);
        break;
      }
      case 'ArrowUp': {
        const newObjet = {
          ...objet,
          points: objet.points.map(point => [point[0], point[1] - 1])
        };
        setObjet(newObjet);
        break;
      }
      case 'ArrowDown': {
        const newObjet = {
          ...objet,
          points: objet.points.map(point => [point[0], point[1] + 1])
        };
        setObjet(newObjet);
        break;
      }

      default: break;
    }
    e.preventDefault();
  }


  function drawCanvas(canvas) {
    if (!canvas) return;
    renderBackground(canvas.getContext('2d'));
    drawShape(canvas, objet);
  }

  return {
    onKeyDown,
    drawCanvas,
  }
}

export default Canvas;
