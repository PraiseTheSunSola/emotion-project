import { createGlobalStyle } from "styled-components";
import { Emotion } from "./Project/Emotion";

const Body = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
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
