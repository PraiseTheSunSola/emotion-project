import { createGlobalStyle } from "styled-components";
import { Emotion } from "./Project/Emotion";

const Body = createGlobalStyle`
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
body {  
  overflow-x: hidden;
  
* {
  font-family: "NEXON Lv1 Gothic OTF";
}
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
