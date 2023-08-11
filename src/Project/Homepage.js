import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import LifeQuotes from "./LifeQuotes";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { lightTheme, darkTheme } from "./Themes";

const Page = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Quotes = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 25%;
  display: inline-block;
`;

const QuotesText = styled(motion.div)`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
  word-break: keep-all;
`;

const QuotesAnimation = {
  start: { opacity: 0, transition: { duration: 2, delay: 2, type: "tween" } },
  end: { opacity: 1, transition: { duration: 2, delay: 2, type: "tween" } },
};

const SvgBox = styled(motion.svg)`
  display: inline-block;
  width: 800px;
  height: 700px;
  stroke: ${(props) => props.theme.textColor};
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: rgba(255, 205, 25, 0);

  &:hover {
    cursor: pointer;
  }
`;

const E = styled(motion.path)`
  &:hover {
    stroke: ${(props) => props.theme.hoverColor};
  }
`;

const M = styled(motion.path)`
  &:hover {
    stroke: ${(props) => props.theme.hoverColor};
  }
`;

const O = styled(motion.path)`
  stroke: ${(props) => props.theme.activeColor};
`;

const T = styled(motion.path)`
  &:hover {
    stroke: ${(props) => props.theme.hoverColor};
  }
`;

const I = styled(motion.path)`
  &:hover {
    stroke: ${(props) => props.theme.hoverColor};
  }
`;

const N = styled(motion.path)`
  &:hover {
    stroke: ${(props) => props.theme.hoverColor};
  }
`;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

// ------------------------------------------- 버튼
const NavButton = styled(motion.div)`
  display: inline-block;
  position: relative;
  /* background-color: red; */
`;

const Buttons = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  font-size: 45px;
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  border: 2px solid ${(props) => props.theme.textColor};
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    box-shadow: 5px 5px black;
  }
`;

const inout = {
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1, rotateZ: 0, transition: { type: "spring" } },
  exit: { opacity: 0, scale: 0, rotateZ: 0 },
};

// ------------------------------------------- 버튼

export const PageMotionFunc = (theme) => {
  return {
    start: {
      border: `500px solid ${theme.textColor}`,
      transition: { duration: 1.5, type: "tween" },
    },
    end: {
      border: `0px solid ${theme.textColor}`,
      transition: { duration: 1.5, type: "tween" },
    },
  };
};

export function Homepage() {
  const [show, setShow] = useState(false);
  const [randomQuote, setRandomQuote] = useState(null);
  const { isDarkTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(darkTheme);
  // variant 객체를 컴포넌트 밖에 선언하고 컴포넌트에서 객체변수를 파라미터로 전달하는 방법
  const PageMotion = PageMotionFunc(theme);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * LifeQuotes.length);
    setRandomQuote(LifeQuotes[randomIndex]);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [isDarkTheme]);

  function clickButton() {
    setShow((appear) => !appear);
  }

  // variant 객체를 컴포넌트 안에서 선언하는 방법
  // const PageMotion = {
  //   start: {
  //     border: `500px solid ${theme.textColor}`,
  //     transition: { duration: 1.5, type: "tween" },
  //   },
  //   end: {
  //     border: `0px solid ${theme.textColor}`,
  //     transition: { duration: 1.5, type: "tween" },
  //   },
  // };

  return (
    <>
      <Page variants={PageMotion} initial="start" animate="end">
        <Quotes variants={QuotesAnimation} initial="start" animate="end">
          {randomQuote ? (
            <QuotesText>{randomQuote.text}</QuotesText>
          ) : (
            <div>No quote selected</div>
          )}
        </Quotes>

        <NavButton>
          <SvgBox
            onClick={clickButton}
            viewBox="-50 50 800 600"
            initial="hidden"
            animate="visible"
          >
            {/* E */}
            <E
              d="M 50 100 V 400 H 180 V 350 H 100 V 250 H 160 V 200 H 100 V 100 H 180"
              variants={draw}
              custom={1}
            />

            {/* M */}
            <M
              d="M 250 100 V 400 H 340 V 200 H 440 V 400 H 530 V 100"
              variants={draw}
              custom={1.5}
            />

            {/* O */}
            <O
              d="M 570 250 A 70 70 0 1 1 570.1 250"
              variants={draw}
              custom={2}
            />

            {/* T */}
            <T
              d="M 60 500 H 140 V 450 H 100 V 100 H 80 V 450 H 40 V 500"
              variants={draw}
              custom={2.5}
            />

            {/* I */}
            <I
              d="M 230 500 H 310 V 450 H 270 V 100 H 250 V 450 H 210 V 500"
              variants={draw}
              custom={3}
            />

            {/* N */}
            <N
              d="M 370 100 V 400 H 460 V 200 L 560 400 H 650 V 100"
              variants={draw}
              custom={3.5}
            />
          </SvgBox>
          <AnimatePresence>
            {show ? (
              <Buttons
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Regulation">INTRO</StyledLink>

                <StyledLink to="/Introduction">TYPES</StyledLink>

                <StyledLink to="/Control">CONTROL</StyledLink>
              </Buttons>
            ) : null}
          </AnimatePresence>
        </NavButton>
      </Page>
    </>
  );
}
