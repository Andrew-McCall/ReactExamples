import {useReducer, useContext} from "react";
import App from "../../App";

const initialState = 0;

function reducer(state, action) {
    console.log(state)
    console.log(action)
  switch (action) {
    case 'increment':
      return state+=1;
    case 'decrement':
      return state-=1;
    default:
      throw new Error();
  }
}

function clicker() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(App);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('increment')}>+</button>

      <p>{value}</p>
    </>
  );
}

export default clicker;