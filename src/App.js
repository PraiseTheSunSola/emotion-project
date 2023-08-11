import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react"; // ThemeContext 관련 추가
import { Emotion } from "./Project/Emotion";
import { lightTheme, darkTheme, GlobalStyle } from "./Project/Themes";
import ToggleButton from "./Project/ToggleButton";
import { useEffect } from "react";

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
  background-color: gray;
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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkTheme(savedTheme === "darkTheme");
    console.log(localStorage);
  }, []); // 최초 한번만 불리도록 빈 배열로 설정

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "lightTheme" : "darkTheme";
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("theme", newTheme); // 로컬 스토리지에 테마 설정 저장
    console.log(newTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ isDarkTheme }}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyle />
          <div>
            <ToggleButton toggleTheme={toggleTheme}>테마 변경</ToggleButton>
          </div>
          <Emotion />
          <Body />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
