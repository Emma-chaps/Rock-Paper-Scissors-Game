import React, { useState, MouseEvent } from "react";
import styled, { ThemeProvider } from "styled-components";
import ChooseOptions from "../ChooseOptions";
import Header from "../Header";
import Result from "../Result";
import Rules from "../Rules";
import { IARandomChoice, theWinnerIs } from "./../../hooks/utils";
import { myTheme } from "./../../styles/myTheme";

const Wrapper = styled.div`
  padding: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  background: ${(props) => props.theme.gradients.bodyBackground};
`;

const data = ["paper", "rock", "scissors"];

function App() {
  const [userSelection, setUserSelection] = useState("");
  const [iaSelection, setIaSelection] = useState("");
  const [hasGameStarted, sethasGameStarted] = useState(false);
  const [isUserWinning, setIsUserWinning] = useState(false);
  const [counter, setCounter] = useState(0);

  const startGame = (userChoice: string) => {
    setUserSelection(userChoice);
    const iaChoice = IARandomChoice(data, userChoice);
    const userWin = theWinnerIs(userChoice, iaChoice);
    setIaSelection(iaChoice);
    setIsUserWinning(userWin);
    sethasGameStarted(true);
    if (userWin) {
      setTimeout(() => setCounter(counter + 1), 1000);
    } else {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 1000);
      }
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <Header counter={counter} />
        {hasGameStarted ? (
          <Result
            userSelection={userSelection}
            iaSelection={iaSelection}
            isUserWinning={isUserWinning}
            replay={() => sethasGameStarted(false)}
          />
        ) : (
          <ChooseOptions
            startGame={(event: MouseEvent) => {
              const target = event.currentTarget as HTMLDivElement;
              if (target !== null) {
                startGame(target.id);
              }
            }}
          />
        )}
        <Rules />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
