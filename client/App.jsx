
import React, {useState} from 'react';
import logo from '../src/logo.svg';
import '../src/App.css';
import { css } from '@emotion/react'
import styled from '@emotion/styled'

//스타일
const color = 'white'
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

function App() {
    const [count, setCount] = useState(0);

  return (
      <div className="App">
        <header className="App-header">
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          Count: {count}
        <Button onClick={() => setCount((count) => count + 1)}>Click Me!</Button>
      </div>
  );
}

export default App;
