import React, { useState, useReducer, useEffect } from 'react';

import { Container, Text } from './styles';

// function counter(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { counter: state.counter + 1 };
//     case 'decrement':
//       return { counter: state.counter !== 0 ? state.counter - 1 : 0 };
//     default:
//       return state;
//   }
// }

function Hooks() {
  const [data, setData] = useState([]);
  // const [state, dispatch] = useReducer(counter, { counter: 0 });
  // const [counter, setCounter] = useState(0);

  useEffect(async () => {
    const resp = await fetch('https://api.github.com/users/adrianomota/repos');
    const result = await resp.json();

    setData(result);
  }, []);
  // useEffect(() => {
  //   document.title = counter;
  // }, [counter]);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // function decrement() {
  //   return counter === 0 ? 0 : setCounter(counter - 1);
  // }

  // function increment() {
  //   dispatch({ type: 'increment' });
  // }

  // function decrement() {
  //   dispatch({ type: 'decrement' });
  // }

  return (
    <Container>
      <Text>Usando Hooks</Text>

      {data.map(repo => (
        <ul>
          <li key={repo.id}>{repo.name}</li>
        </ul>
      ))}
      {/* <h1>
        Contador:
        {counter}
      </h1>

      {/* <h1>
        Contador:
        {state.counter}
      </h1> */}
      {/* <button type="button" onClick={increment}>
        Aumentar +
      </button> */}

      {/* <button type="button" onClick={decrement}>
        Dimunuir -
      </button> */}
    </Container>
  );
}

export default Hooks;

// useEffect: (1 parametro): componentDidMount, componentDidUpdate
// useEffect: (2 parametro): componentDidMount, componentDidUpdate (comparacao)
// useEffect: (1 parametro, retorn funcao): componentDidWillUnmount -- executado quando o componente é destruido
// useEffect: (2 parametros, array vazio): componentDidMount
