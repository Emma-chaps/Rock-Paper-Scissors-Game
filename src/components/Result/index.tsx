import React from "react";
import styled from "styled-components";

const StyledResultWrapper = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ChoicerWrapper = styled.div`
  text-align: center;
  padding: 0 0 3rem 0;
`;

const ChoicerTitle = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 0.8em;
  padding: 1rem 0 0 0;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const ResultTitle = styled.p`
  padding: 0 0 1rem 0;
  color: white;
  font-size: 3.5em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
`;

const Button = styled.button`
  background-color: white;
  padding: 0.9rem 3rem 0.8rem 3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.darkText};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 2px;
`;

type AppProps = {
  userSelection: string;
  iaSelection: string;
  isUserWinning: boolean;
  replay: () => void;
};

const Result = ({
  userSelection,
  iaSelection,
  isUserWinning,
  replay,
}: AppProps) => {
  return (
    <StyledResultWrapper>
      <OptionsWrapper>
        <ChoicerWrapper>
          {userSelection}
          <img src={`/images/icon-${userSelection}.svg`} alt={userSelection} />
          <ChoicerTitle>You picked</ChoicerTitle>
        </ChoicerWrapper>
        <ChoicerWrapper>
          <img src={`/images/icon-${iaSelection}.svg`} alt={iaSelection} />
          {iaSelection}
          <ChoicerTitle>The house Picked</ChoicerTitle>
        </ChoicerWrapper>
      </OptionsWrapper>
      {isUserWinning ? (
        <ResultTitle>You Win</ResultTitle>
      ) : (
        <ResultTitle>You lose</ResultTitle>
      )}
      <Button onClick={replay}>Play again</Button>
    </StyledResultWrapper>
  );
};

export default Result;
