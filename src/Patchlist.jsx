import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "./App";
import { SHAPES } from "./shapeInventory";

export default function PatchList() {
  const patches = SHAPES.slice();

  return (
    <>
      <h1>Patchlist</h1>
      <div className="patchlist-wrapper">
        {patches.sort((patch1, patch2) => {
          return patch1.cost >= patch2.cost;
        }).map((patch, index) => {
          return <Patch key={index} patch={patch} index={index} />;
        })}
      </div>
    </>
  );
}

export function PatchPicker() {
  const { availablePatches, selectPatch } = useContext(GameContext);

  return (
    <div>
      <h1>Available patches</h1>
      <div className="flex flex-row">
        {availablePatches.getNextShapes().map((patch, index) => {
          return <Patch key={index} onClick={selectPatch(index)} patch={patch} index={index} />;
        })}
      </div>
      <h1>Next patches (can't touch them)</h1>
      <div className="flex flex-row" style={{ "flex-flow": "row wrap" }}>
        {availablePatches.getRemainingShapes().map((patch, index) => {
          return <Patch key={index} patch={patch} index={index} />;
        })}
      </div>
    </div>
  );
}


function Patch({ patch, index, onClick }) {
  const patchRef = useRef(null);
  useEffect(drawPatch, [patchRef, patch]);
  function drawPatch() {
    const canvas = patchRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    patch.points.forEach((point, index) => {
      ctx.fillStyle = 'red';
      const pixel_width = canvas.width / 5;
      const pixel_heigth = canvas.height / 5;
      ctx.fillRect(point[0] * pixel_width, point[1] * pixel_heigth, pixel_width, pixel_heigth);


      // Draw lines
      ctx.fillStyle = '#000';
      ctx.strokeStyle = '#000';

      // draw line horizontal
      ctx.beginPath();
      ctx.moveTo(point[0] * pixel_width, point[1] * pixel_heigth);
      ctx.lineTo(point[0] * pixel_width + pixel_width, point[1] * pixel_heigth);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(point[0] * pixel_width, point[1] * pixel_heigth);
      ctx.lineTo(point[0] * pixel_width, point[1] * pixel_heigth + pixel_heigth);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();

      // Draw buttons
      if (index >= patch.income) return;
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(point[0] * pixel_width + (pixel_width / 2), point[1] * pixel_heigth + (pixel_heigth / 2), 15, 0, 2 * Math.PI);
      ctx.fill();

    });
  }

  return (
    <div className="basis-1/3" onClick={onClick}>
      <div>Patch {index}</div>
      <canvas ref={patchRef} width={200} height={200} />
      {/* <div>Cout: {patch.cost}</div> */}
      {/* <div>Temps: {patch.time}</div> */}
      {/* <div>Boutons: {patch.income}</div> */}
      {/* <div>Points: {patch.points}</div> */}
      {/* <div>Width: {patch.width}</div> */}
      {/* <div>Height: {patch.height}</div> */}
    </div>
  );

}
