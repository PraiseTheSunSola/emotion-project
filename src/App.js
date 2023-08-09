import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { createContext, useContext } from "react"; // ThemeContext 관련 추가
import { Emotion } from "./Project/Emotion";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyle } from "./Project/Themes";
import ToggleButton from "./Project/ToggleButton";

export const ThemeContext = createContext();

const Body = createGlobalStyle`
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

::-webkit-scrollbar {
  opacity: 0;
  /* color: red; */
     /* 스크롤바의 너비 */
     /* 스크롤바 배경색 */
     

  };

::-webkit-scrollbar-thumb {
  background-color: red;
  /* opacity: 0; */
 
     /* 스크롤바 썸네일 색상 */
     
  };

::-webkit-scrollbar-thumb:hover { 
  
    /* 스크롤바 썸네일의 hover 색상 */
    
  };

body {  
  overflow-x: hidden;
  
* {
  font-family: "NEXON Lv1 Gothic OTF";
  box-sizing: border-box;
}
}
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log(isDarkMode);
  };

  return (
    <>
      <ThemeContext.Provider value={isDarkMode ? darkTheme : lightTheme}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <div>
            <ToggleButton onClick={toggleTheme}>테마 변경</ToggleButton>
          </div>
          <Emotion />
        </ThemeProvider>

        <Body />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
