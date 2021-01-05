import React from "react";
import Offers from "./components/Offers";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(118deg, rgba(223,223,223,1) 0%, rgba(234,234,234,1) 100%);  
    }
`;

const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Centered>
        <Offers />
      </Centered>
    </>
  );
};

export default App;
