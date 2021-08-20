import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Game from "../Game";
import Header from "../Header";
import Rules from "../Rules";
import { myTheme } from "./../../styles/myTheme";

import "./App.css";

const Wrapper = styled.div`
  padding: 1.5rem;
  background: ${(props) => props.theme.gradients.bodyBackground};
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <Header />
        <Game />
        <Rules />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
