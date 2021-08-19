import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../Header";
import { myTheme } from "./../../styles/myTheme";

import "./App.css";

const Wrapper = styled.div`
  padding: 1.5rem;
  background: ${(props) => props.theme.gradients.background};
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
