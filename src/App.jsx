import React from "react";
import "./App.css";
import FlexContainer from "./components/FlexContainer";

// const List = ({title, children}) => {
//   return (
//     <article>
//       <h3 title={title}>list {title}</h3>
//       <ul>{children}</ul>
//     </article>
//   );
// };

function App() {
  return (
    <>
      <FlexContainer title="Levels">
        <ul>
          <li>A1 Elementary</li>
          <li>A2 Pre-intermediate</li>
          <li>B1 Intermediate</li>
          <li>B1 Upper-intermediate</li>
          <li>B2 Pre-advanced</li>
        </ul>
      </FlexContainer>
      <FlexContainer title="Info">
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
