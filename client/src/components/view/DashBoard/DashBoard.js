import React from "react";
import styled from "styled-components";
import DashBoardInfo from "./Section/DashBoardInfo";
import LogBoard from "./Section/LogBoard";

const Container = styled.div`
  padding: 80px;
  background-color: #fcfcfc;
`;

function DashBoard() {
  return (
    <>
      <Container>
        <DashBoardInfo />
        <LogBoard />
      </Container>
    </>
  );
}

export default DashBoard;
