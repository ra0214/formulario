import React from 'react';
import HomePage from './pages/HomePage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
