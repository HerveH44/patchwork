import { createContext, useState } from "react";
import { ShapeInventory } from "./shapeInventory";
import Canvas from "./board";
import { PatchPicker } from "./Patchlist";

export const GameContext = createContext(null);

function App() {
  const gameContext = useGameContext();
  return (
    <GameContext.Provider value={gameContext}>
      <div className="App">
        <Canvas width="500" height="500" />
        <PatchPicker />
      </div>
    </GameContext.Provider>
  );
}

function useGameContext() {
  const [availablePatches, setAvailablePatches] = useState(new ShapeInventory());
  const [selectedPatch, setSelectedPatch] = useState(null);
  const [pickedPatches, setPickedPatches] = useState([]);

  function selectPatch(index) {
    return () => {
      setSelectedPatch(availablePatches.selectShape(index));
    }
  }

  function validatePatch() {
    setPickedPatches(pickedPatches.concat(selectedPatch));
    availablePatches.pickShape(selectedPatch.index)
    setSelectedPatch(null);
  }

  function reset() {
    setAvailablePatches(new ShapeInventory());
    setSelectedPatch(null);
    setPickedPatches([]);
  }

  return {
    availablePatches,
    setAvailablePatches,
    selectedPatch,
    setSelectedPatch, // TODO: remove from public access 
    selectPatch,
    validatePatch,
    pickedPatches,
    reset,
  };

}

export default App;
