import { useContext } from "react";
import { FruitContext } from "../Context/FruitContext";
function FruitsCounter() {
  const { fruits } = useContext(FruitContext);
  return <h2>Total fruits: {fruits.length}</h2>;
}

export default FruitsCounter;
