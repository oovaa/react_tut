import React from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import { FruitContext } from "./Context/FruitContext";

// Create the context *outside* the component

function App() {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
    { fruitName: 'haha', id: 4 },
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <FruitContext.Provider value={{ fruits }}> {/* Correct usage */}
        <Fruits />
        <FruitsCounter />
      </FruitContext.Provider> {/* Correct closing tag */}
    </div>
  );
}

export default App;