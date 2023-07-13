import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const EmotionBox = styled(motion.div)`
  display: block;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const Box = styled(motion.div)`
  &:hover {
    z-index: 2;
  }
`;

const Anger = styled(Box)`
  transform-origin: left;
  background-color: aliceblue;
`;

const Sadness = styled(Box)`
  transform-origin: ${(props) =>
    props.hovered ? "right" : props.defaultOrigin};
  background-color: antiquewhite;
`;

const Anxiety = styled(Box)`
  transform-origin: right;
  background-color: aqua;
`;

const Hurt = styled(Box)`
  transform-origin: top;
  background-color: aquamarine;
`;

const Shame = styled(Box)`
  transform-origin: bottom;
  background-color: azure;
`;

const Happiness = styled(Box)`
  transform-origin: right;
  background-color: beige;
`;

const Love = styled(Box)`
  transform-origin: left;
  background-color: bisque;
`;

const Wish = styled(Box)`
  transform-origin: right;
  background-color: blueviolet;
`;

const BoxAxisXHover = {
  start: {
    scaleX: 1.5,

    transition: { duration: 1, type: "tween" },
  },
};

const BoxAxisYHover = {
  start: {
    scaleY: 0,
    transition: { duration: 2, type: "tween" },
  },

  end: {
    scaleY: 1,
    transition: { duration: 2, type: "tween" },
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

export function Processing() {
  const [show, setShow] = useState(false);
  const [hoveredSadness, setHoveredSadness] = useState(false);
  const [showAnxiety, setShowAnxiety] = useState(false);

  function clickButton() {
    setShow((appear) => !appear);
  }

  return (
    <>
      <Page>
        <EmotionBox>
          <Anger
            variants={BoxAxisXHover}
            whileHover="start"
            onMouseEnter={() => {
              setHoveredSadness(false);
              setShowAnxiety(false);
            }}
          />

          <Sadness
            variants={BoxAxisXHover}
            whileHover="start"
            onMouseEnter={() => setHoveredSadness(!showAnxiety)}
            onMouseLeave={() => setHoveredSadness(false)}
            hovered={hoveredSadness}
            defaultOrigin={showAnxiety ? "left" : "right"}
          />

          <Anxiety
            variants={BoxAxisXHover}
            whileHover="start"
            onMouseEnter={() => {
              setHoveredSadness(false);
              setShowAnxiety(true);
            }}
          />

          <Hurt
            variants={BoxAxisYHover}
            whileHover="start"
            initial="start"
            animate="end"
          />

          <Shame
            variants={BoxAxisYHover}
            whileHover="start"
            initial="start"
            animate="end"
          />

          <Happiness variants={BoxAxisXHover} whileHover="start" />

          <Love variants={BoxAxisXHover} whileHover="start" />

          <Wish variants={BoxAxisXHover} whileHover="start" />
        </EmotionBox>
      </Page>
      {/* ---------------------------------------------------------------------------- */}
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
                <StyledLink to="/Introduction">이전</StyledLink>
              </BackButton>

              <MainButton
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/">메인</StyledLink>
              </MainButton>

              <NextButton
                variants={inout}
                initial="start"
                animate="end"
                exit="exit"
              >
                <StyledLink to="/Warehouse">다음</StyledLink>
              </NextButton>
            </Buttons>
          ) : null}
        </AnimatePresence>
      </NavButtonCircle>
    </>
  );
}
