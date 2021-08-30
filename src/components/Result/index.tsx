import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ExternalCircle,
  InternalCircle,
  Img,
} from "./../../styles/styledComponents";
import { findSelectionData } from "./../../hooks/utils";
import data from "./../../data";

const StyledResultWrapper = styled.div`
  text-align: center;
  margin: 2.6rem auto;
  min-height: 303px;
  @media (min-width: 700px) {
    min-height: 350px;
    margin: 3.5rem auto 2.5rem;
  }
`;

const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px 110px;
  column-gap: 90px;
  justify-content: center;
  @media (min-width: 700px) {
    grid-template-columns: 130px 130px;
  }
`;

const ChoicerWrapper = styled.div`
  // text-align: center;
  padding: 0 0 2rem 0;
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
  const [loading, setLoading] = useState(false);
  const userData = findSelectionData(data, userSelection);
  const iaData = findSelectionData(data, iaSelection);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

  return (
    <StyledResultWrapper>
      <OptionsWrapper>
        <ChoicerWrapper>
          <ExternalCircle selectedOption={userData}>
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
          <ExternalCircle selectedOption={iaData} rotate='yes'>
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
      {loading && (
        <>
          {isUserWinning ? (
            <ResultTitle>You Win</ResultTitle>
          ) : (
            <ResultTitle>You lose</ResultTitle>
          )}

          <Button onClick={replay}>Play again</Button>
        </>
      )}
    </StyledResultWrapper>
  );
};

export default Result;
