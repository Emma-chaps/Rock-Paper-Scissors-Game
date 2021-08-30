import React, { MouseEvent } from "react";
import styled from "styled-components";
import {
  ExternalCircle,
  InternalCircle,
  Img,
} from "./../../styles/styledComponents";
import data from "./../../data";
import triangle from "./../../images/bg-triangle.svg";

const StyledGameWrapper = styled.main`
  position: relative;
  display: grid;
  grid-template-columns: 110px 110px 110px;
  grid-template-rows: 110px 70px 110px;
  grid-template-areas:
    "paper . scissors"
    ". . ."
    ". rock .";
  justify-content: center;
  margin: 3rem auto;
  @media (min-width: 700px) AND (min-height: 700px) {
    grid-template-columns: 130px 130px 130px;
    grid-template-rows: 130px 90px 130px;
  }
`;

const Triangle = styled.img`
  z-index: -1;
  padding-top: 3rem;
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  grid-column: 1 / 4;
  grid-row: 1 / 4;
`;

type AppProps = {
  startGame: (event: MouseEvent) => void;
};

const ChooseOptions = ({ startGame }: AppProps) => {
  return (
    <StyledGameWrapper>
      {data.map((option) => (
        <ExternalCircle
          onClick={startGame}
          id={option.name}
          selectedOption={option}
          key={option.name}
          cursor='yes'
        >
          <InternalCircle id={option.name} cursor='yes'>
            <Img
              src={`/images/icon-${option.name}.svg`}
              alt={`${option.name}`}
              id={option.name}
              cursor='yes'
            />
          </InternalCircle>
        </ExternalCircle>
      ))}

      <Triangle src={triangle} alt='triangle' />
    </StyledGameWrapper>
  );
};

export default ChooseOptions;
