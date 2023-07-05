import { createGlobalStyle } from "styled-components";
import { Emotion } from "./Project/Emotion";

const Body = createGlobalStyle`
body {
  overflow-x: hidden;
}
`;

function App() {
  return (
    <>
      <Body />
      <Emotion />
    </>
  );
}

export default App;
