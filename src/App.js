import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/';

function App() {
  // useEffect(async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await res.json();

  //   console.log(data);

  //   data.map((d) => console.log(d.id, d.title));
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/11')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json.title))

  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });

  // }, []);

  //

  useEffect(() => {
    new Promise((res, rej) => {
      fetch('https://jsonplaceholder.typicode.com/todos/11')
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((error) => rej(error));
    });
  }, []);

  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
