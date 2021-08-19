import React from "react";
import styled from "styled-components";
import Header from "../Header";
import "./App.css";

const Wrapper = styled.div`
  padding: 1.5rem;
  background: radial-gradient(hsl(214, 47%, 23%) hsl(237, 49%, 15%));
`;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
