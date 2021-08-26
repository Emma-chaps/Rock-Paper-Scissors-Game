import React, { MouseEvent } from "react";
import styled from "styled-components";

import paper from "./../../images/icon-paper.svg";
import rock from "./../../images/icon-rock.svg";
import scissors from "./../../images/icon-scissors.svg";
import triangle from "./../../images/bg-triangle.svg";

const StyledGameWrapper = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: 110px 110px 110px;
  grid-template-rows: 110px 70px 110px;
  justify-content: center;
  margin: 4rem auto;
`;

const ExternalCircle = styled.div`
  height: 110px;
  width: 110x;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: inset -2px -10px 2px 2px rgb(0 0 0 / 25%);
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

const PaperExternalCircle = styled(ExternalCircle)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background: ${(props) => props.theme.gradients.paperGradient};
`;

const ScissorsExternalCircle = styled(ExternalCircle)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background: ${(props) => props.theme.gradients.scissorsGradient};
`;

const RockExternalCircle = styled(ExternalCircle)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  background: ${(props) => props.theme.gradients.rockGradient};
`;

const Triangle = styled.img`
  z-index: -1;
  padding-top: 3rem;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
`;

type AppProps = {
  startGame: (event: MouseEvent) => void;
};

const ChooseOptions = ({ startGame }: AppProps) => {
  return (
    <StyledGameWrapper>
      <PaperExternalCircle onClick={startGame} id='paper'>
        <InternalCircle id='paper'>
          <Img src='./../../images/icon-paper.svg' alt='paper' id='paper' />
        </InternalCircle>
      </PaperExternalCircle>
      <RockExternalCircle onClick={startGame} id='rock'>
        <InternalCircle id='rock'>
          <Img src={rock} alt='rock' id='rock' />
        </InternalCircle>
      </RockExternalCircle>
      <ScissorsExternalCircle onClick={startGame} id='scissors'>
        <InternalCircle id='scissors'>
          <Img src={scissors} alt='scissors' id='scissors' />
        </InternalCircle>
      </ScissorsExternalCircle>
      <Triangle src={triangle} alt='triangle' />
    </StyledGameWrapper>
  );
};

export default ChooseOptions;
