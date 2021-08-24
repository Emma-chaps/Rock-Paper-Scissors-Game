import React, { useEffect, useState, MouseEvent } from "react";
import styled, { ThemeProvider } from "styled-components";
import Game from "../Game";
import Header from "../Header";
import Rules from "../Rules";
import { IARandomChoice } from "./../../hooks/utils";
import { myTheme } from "./../../styles/myTheme";

import "./App.css";

const Wrapper = styled.div`
  padding: 1.5rem;
  background: ${(props) => props.theme.gradients.bodyBackground};
`;

const data = ["paper", "rock", "scissors"];

function App() {
  const [userSelection, setUserSelection] = useState<string | null>(null);
  const [iaSelection, setIaSelection] = useState<string | null>(null);
  useEffect(() => {
    console.log(userSelection);
    if (userSelection !== null) {
      setIaSelection(IARandomChoice(data, userSelection));
    }
  }, [userSelection]);

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <Header />
        <Game
          startGame={(event: MouseEvent) => {
            const target = event.currentTarget as HTMLDivElement;
            if (target !== null) {
              setUserSelection(target.id);
            }
          }}
        />
        <Rules />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
