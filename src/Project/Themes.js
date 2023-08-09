import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
  activeColor: "red",
  hoverColor: "red",
};

export const darkTheme = {
  backgroundColor: "black",
  textColor: "white",
  activeColor: "blue",
  hoverColor: "blue",
};

// 이 아래에 적지 프롭스로 코딩하지 않아도
// color: ${(props) => props.theme.hoverColor}; 이런식으로 적용이 된다.

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
  &.active {
    color: ${(props) => props.theme.activeColor};
  }
  
`;
