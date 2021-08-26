import React from "react";
import styled from "styled-components";
import { findSelectionData } from "./../../hooks/utils";
import data from "./../../data";

const StyledResultWrapper = styled.div`
  text-align: center;
  margin: 3rem auto;
`;

const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px 110px;
  column-gap: 90px;
  justify-content: center;
`;

const ChoicerWrapper = styled.div`
  // text-align: center;
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

type ContainerType = {
  optionName: string;
  color: string;
};

const ExternalCircle = styled.div<ContainerType>`
  height: 110px;
  width: 110x;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: inset -2px -10px 2px 2px rgb(0 0 0 / 25%);
  grid-area: ${(props: ContainerType) => props.optionName};
  background: ${(props: ContainerType) => props.color};
`;

const InternalCircle = styled.div`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 50%;
  margin: auto;
  vertical-align: middle;
  box-shadow: inset 0 5px 2px 2px rgb(0 0 0 / 25%);
`;

const Img = styled.img`
  height: 2.7rem;
  padding-top: 1.3rem;
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
  const userData = findSelectionData(data, userSelection);
  const iaData = findSelectionData(data, iaSelection);

  return (
    <StyledResultWrapper>
      <OptionsWrapper>
        <ChoicerWrapper>
          <ExternalCircle optionName={userData.name} color={userData?.color}>
            <InternalCircle>
              <Img
                src={`/images/icon-${userData?.name}.svg`}
                alt={`${userData?.name}`}
              />
            </InternalCircle>
          </ExternalCircle>
          <ChoicerTitle>You picked</ChoicerTitle>
        </ChoicerWrapper>
        <ChoicerWrapper>
          <ExternalCircle optionName={iaData?.name} color={iaData?.color}>
            <InternalCircle>
              <Img
                src={`/images/icon-${iaData?.name}.svg`}
                alt={`${iaData?.name}`}
              />
            </InternalCircle>
          </ExternalCircle>
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
