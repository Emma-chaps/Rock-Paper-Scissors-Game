import React, { MouseEvent } from "react";
import styled from "styled-components";
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
  margin: 4rem auto;
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
          optionName={option.name}
          color={option.color}
        >
          <InternalCircle id={option.name}>
            <Img
              src={`/images/icon-${option.name}.svg`}
              alt={`${option.name}`}
              id={option.name}
            />
          </InternalCircle>
        </ExternalCircle>
      ))}

      <Triangle src={triangle} alt='triangle' />
    </StyledGameWrapper>
  );
};

export default ChooseOptions;
