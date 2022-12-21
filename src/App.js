import React from'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber } from './actions/index'

function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>Redux Count App</h2>
       <div className="quantity">
        <button onClick={() => dispatch(decNumber())}><span>-</span></button>
        <h3>{myState}</h3>
        <button onClick={() => dispatch(incNumber())}><span>+</span></button>
       </div>
    </div>
  );
}

export default App;
