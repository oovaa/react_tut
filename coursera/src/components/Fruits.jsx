import React, { useContext } from "react";
import { FruitContext } from '../Context/FruitContext'

function Fruits() {
    const { fruits } = useContext(FruitContext)

    return (
        <div>
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;