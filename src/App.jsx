import React from "react";
import "./App.css";
import UsersLoader from "./components/UsersLoader";
// import Note from "./components/Note";
import { COLORS, FLEX } from "./constants";

import FlexContainer from "./components/FlexContainer";

function App() {
  
  return (
    <>
      <FlexContainer
        title="Levels"
        flexDir={FLEX.LEVELS}
        justCont={FLEX.JUSTIFY_LEVELS}
        alItems={FLEX.ALIGN_LEVELS}
      >
        <ul>
          <li>A1 Elementary</li>
          <li>A2 Pre-intermediate</li>
          <li>B1 Intermediate</li>
          <li>B1 Upper-intermediate</li>
          <li>B2 Pre-advanced</li>
        </ul>
      </FlexContainer>
      <FlexContainer
        title="Info"
        flexDir={FLEX.INFO}
        justCont={FLEX.JUSTIFY_INFO}
        alItems={FLEX.ALIGN_INFO}
      >
        <ul>
          <li>AAbout us</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Cookie Declaration</li>
        </ul>
      </FlexContainer>

    </>
  );
}

export default App;
