import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  
`;

const SvgBox = styled(motion.svg)`
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* border-radius: 30px; */
  background: #222222;
  stroke: whitesmoke;
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: rgba(255, 205, 25, 0);
  
`;

const Gieok = styled(motion.path)``;

const Jieut1 = styled(motion.path)``;

const Jieut2 = styled(motion.path)``;

const Rieul = styled(motion.path)``;

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

// -------------------------------------------위 아래 연출
const EmotionBox = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
const Box1 = styled(motion.div)`
  background-color: white;
  z-index: 2;
`;

const TopBox = styled(Box1)`
  transform-origin: top;
  /* background-color: white; */
`;

const BottomBox = styled(Box1)`
  transform-origin: bottom;
  /* background-color: black; */
`;

const BoxAxisY = {
  start1: {
    opacity: 0,
    scaleY: 1,
   
  },

  end1: {
    opacity: 1,
    scaleY: 0,
    transition: { duration: 3, type: "tween" },
  },
};
// -------------------------------------------위 아래 연출

// -------------------------------------------좌 우 연출

const Box2 = styled(motion.div)`
  /* background-color: black; */
  z-index: 2;
`;

const LeftBox = styled(Box2)`

  transform-origin: top;
  background-color: aquamarine;
`;

const RightBox = styled(Box2)`

  transform-origin: bottom;
  background-color: azure;
`;

const BoxAxisX = {
  start2: {
    opacity: 1,
    scaleY: 0,
   
  },

  end2: {
    opacity: 0,
    scaleY: 1,
    transition: { duration: 3, type: "tween" },
  },
};
// -------------------------------------------좌 우 연출

// ------------------------------------------- 버튼
const NavButtonCircle = styled(motion.div)`
  position: relative;
  position: fixed;
  top: 50%;
  right: 10px;
  width: 50px;
  height: 250px;
  z-index: 3;
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

const MoveRegulation = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const MoveIntroduction = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const MoveProcessing = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const MoveWarehouse = styled(motion.button)`
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
        <EmotionBox>
          <TopBox variants={BoxAxisY} initial="start1" animate="end1" />
          <BottomBox variants={BoxAxisY} initial="start1" animate="end1" />
          <TopBox variants={BoxAxisY} initial="start1" animate="end1" />
          <BottomBox variants={BoxAxisY} initial="start1" animate="end1" />
          <TopBox variants={BoxAxisY} initial="start1" animate="end1" />
          <BottomBox variants={BoxAxisY} initial="start1" animate="end1" />
          <TopBox variants={BoxAxisY} initial="start1" animate="end1" />
          <BottomBox variants={BoxAxisY} initial="start1" animate="end1" />
{/*       
          <LeftBox variants={BoxAxisX} initial="start2" animate="end2" />
          <RightBox variants={BoxAxisX} initial="start2" animate="end2" />
          <LeftBox variants={BoxAxisX} initial="start2" animate="end2" />
          <RightBox variants={BoxAxisX} initial="start2" animate="end2" />
          <LeftBox variants={BoxAxisX} initial="start2" animate="end2" />
          <RightBox variants={BoxAxisX} initial="start2" animate="end2" />
          <LeftBox variants={BoxAxisX} initial="start2" animate="end2" />
          <RightBox variants={BoxAxisX} initial="start2" animate="end2" /> */}
        
        </EmotionBox>

     

        <SvgBox viewBox="-10 -20 900 500" initial="hidden" animate="visible">
          <Gieok d="M 10 100 H150 V350" variants={draw} custom={2} />

          <Jieut1 d="M 200 100 H 350  L 240 350" variants={draw} custom={2.5} />
          <Jieut1 d="M 310 200, 380 350 " variants={draw} custom={3} />

          <Jieut2 d="M 450 100, H 600  L 450 350" variants={draw} custom={3.5} />
          <Jieut2 d="M 540 200, 590 350 " variants={draw} custom={4} />

          <Rieul d="M 700 100, 850 100" variants={draw} custom={4.5} />
          <Rieul d="M 850 100, L 850 200" variants={draw} custom={5} />
          <Rieul
            d="M 850 200, H 700, V 350, H 850"
            variants={draw}
            custom={6}
          />
        </SvgBox>
      </Page>
      <NavButtonCircle>
        <NavButton onClick={clickButton}>클릭</NavButton>
        <AnimatePresence>
          {show ? (
            <Buttons>
              <MoveRegulation
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Regulation">감정 정리</StyledLink>
              </MoveRegulation>

              <MoveIntroduction
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Introduction">감정 종류</StyledLink>
              </MoveIntroduction>

              <MoveProcessing
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Processing">정리 하기</StyledLink>
              </MoveProcessing>

              <MoveWarehouse
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Warehouse">감정 창고</StyledLink>
              </MoveWarehouse>
            </Buttons>
          ) : null}
        </AnimatePresence>
      </NavButtonCircle>
    </>
  );
}
