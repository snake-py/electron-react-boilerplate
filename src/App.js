import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/counter';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
