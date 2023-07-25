import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SvgBox = styled(motion.svg)`
  width: 800px;
  height: 700px;
  /* border: 5px solid black; */
  stroke: black;
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: rgba(255, 205, 25, 0);
`;

const E = styled(motion.path)``;
const M = styled(motion.path)``;
const O = styled(motion.path)`
  stroke: red;
`;
const T = styled(motion.path)``;
const I = styled(motion.path)``;
const N = styled(motion.path)``;

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
const NavButtonCircle = styled(motion.div)`
  position: relative;
  position: fixed;
  z-index: 3;
  top: 50%;
  right: 10px;
  width: 50px;
  height: 250px;
`;
const NavButton = styled(motion.button)`
  position: absolute;
  width: 50px;
  height: 50px;
  transform-origin: center center;

  &:hover {
    cursor: pointer;
  }
`;

const Buttons = styled(motion.div)`
  position: absolute;
  top: 30%;
`;

const BackButton = styled(motion.button)`
  width: 50px;
  height: 50px;
`;

const MainButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NextButton = styled(motion.button)`
  width: 50px;
  height: 50px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const inout = {
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1, rotateZ: 0, transition: { type: "spring" } },
  exit: { opacity: 0, scale: 0, rotateZ: 0 },
};

// ------------------------------------------- 버튼

export function Homepage() {
  const [show, setShow] = useState(false);
  function clickButton() {
    setShow((appear) => !appear);
  }

  return (
    <>
      <Page>
        <SvgBox viewBox="-50 50 800 600" initial="hidden" animate="visible">
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
          <O d="M 570 250 A 70 70 0 1 1 570.1 250" variants={draw} custom={2} />

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
      </Page>
      <NavButtonCircle>
        <NavButton onClick={clickButton}>클릭</NavButton>
        <AnimatePresence>
          {show ? (
            <Buttons>
              <BackButton
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Regulation">Intro</StyledLink>
              </BackButton>

              <MainButton
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Introduction">Types</StyledLink>
              </MainButton>

              <NextButton
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Control">Control</StyledLink>
              </NextButton>
            </Buttons>
          ) : null}
        </AnimatePresence>
      </NavButtonCircle>
    </>
  );
}
