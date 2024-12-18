import React, { useReducer } from 'react'
import './App.css';
import DigitbButton from './DigitbButton'
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OP: "choose-op",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        cur: `${state.cur || ""}${payload.digit}`
      }

    default:
      break;
  }

}

function App() {

  const [{ cur, prev, op }, dispatch] = useReducer(reducer, {})

  return (
    <div className='calculator-gird'>
      <div className='output'>
        <div className='prev-operand'>{prev} {op}</div>
        <div className='cur-operand'>{cur} </div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <DigitbButton digit="÷" dispatch={dispatch} />
      <DigitbButton digit="1" dispatch={dispatch} />
      <DigitbButton digit="2" dispatch={dispatch} />
      <DigitbButton digit="3" dispatch={dispatch} />
      <DigitbButton digit="*" dispatch={dispatch} />
      <DigitbButton digit="4" dispatch={dispatch} />
      <DigitbButton digit="5" dispatch={dispatch} />
      <DigitbButton digit="6" dispatch={dispatch} />
      <DigitbButton digit="+" dispatch={dispatch} />
      <DigitbButton digit="7" dispatch={dispatch} />
      <DigitbButton digit="8" dispatch={dispatch} />
      <DigitbButton digit="9" dispatch={dispatch} />
      <DigitbButton digit="-" dispatch={dispatch} />
      <DigitbButton digit="." dispatch={dispatch} />
      <DigitbButton digit="0" dispatch={dispatch} />
      <button className='span-two'>=</button>
    </div>
  )
}

export default App