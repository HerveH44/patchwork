import { render } from "@testing-library/react";
import React, { useRef, useEffect } from "react";

const Canvas = props => {

  const canvasRef = useRef(null);

  const objet = {
    color: 'blue',
    points: [
      [0, 0]
    ]
  };

  function drawPixel(color, x, y) {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = color

    const pixel_width = props.width / 9;
    const pixel_height = props.height / 9;
    context.fillRect(x * pixel_width, y * pixel_height, pixel_width, pixel_height);

  }

  function drawShape(shape) {
    const { points, color } = shape;

    for (const point of points) {
      drawPixel(color, point[0], point[1])
    }
  }

  useEffect(() => {
    console.log("effect!!")
    renderBackground();
    drawShape(objet);
  }, [props, objet, drawShape]);

  function renderBackground() {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = '#b6b61c'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }

  function focusBoard() {
    canvasRef.current.focus();
  }

  function onKeyDown(e) {
    switch (e.key) {
      case 'ArrowLeft': {
        objet.points = objet.points.map(point => [point[0] - 1, point[1]]);
        renderBackground();
        drawShape(objet);
        break;
      }
      case 'ArrowRight': {
        objet.points = objet.points.map(point => [point[0] + 1, point[1]]);
        renderBackground();
        drawShape(objet);
        break;
      }
      case 'ArrowUp': {
        objet.points = objet.points.map(point => [point[0], point[1] - 1]);
        renderBackground();
        drawShape(objet);
        break;
      }
      case 'ArrowDown': {
        objet.points = objet.points.map(point => [point[0], point[1] + 1]);
        renderBackground();
        drawShape(objet);
        break;
      }

      default: break;
    }
  }

  useEffect(focusBoard, []);
  return <canvas tabIndex={0} ref={canvasRef} {...props} onKeyDown={onKeyDown} />
};

export default Canvas;
