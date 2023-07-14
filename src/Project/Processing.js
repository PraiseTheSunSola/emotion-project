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
  // 실체가 없어도 기능적인 부분만 상속하려면 가능함.

  &:hover {
    z-index: 2;
  }
`;

const Anger = styled(Box)`
  transform-origin: top;
  background-color: aliceblue;
`;

const Sadness = styled(Box)`
  transform-origin: top;
  background-color: antiquewhite;
`;

const Anxiety = styled(Box)`
  transform-origin: top;
  background-color: aqua;
`;

const Hurt = styled(Box)`
  transform-origin: top;
  background-color: aquamarine;
`;

const Shame = styled(Box)`
  transform-origin: top;
  background-color: azure;
`;

const Happiness = styled(Box)`
  transform-origin: top;
  background-color: beige;
`;

const Love = styled(Box)`
  transform-origin: top;
  background-color: bisque;
`;

const Wish = styled(Box)`
  transform-origin: top;
  background-color: blueviolet;
`;

const BoxHover = {
  start: {
    scaleY: 1,
    transition: { duration: 2, type: "tween" },
  },

  end: {
    scaleY: 0.1,
    transition: { duration: 2, type: "tween" },
  },

  hover: {
    scaleY: 1,
    transition: { duration: 1, type: "tween" },
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

  function clickButton() {
    setShow((appear) => !appear);
  }

  return (
    <>
      <Page>
        <EmotionBox>
          <Anger
            variants={BoxHover}
            whileHover="hover"
            initial="start"
            animate="end"
          />

          <Sadness
            variants={BoxHover}
            whileHover="hover"
            initial="start"
            animate="end"
          />

          <Anxiety
            variants={BoxHover}
            whileHover="hover"
            initial="start"
            animate="end"
          />

          <Hurt
            variants={BoxHover}
            initial="start"
            animate="end"
            whileHover="hover"
          />

          <Shame
            variants={BoxHover}
            initial="start"
            animate="end"
            whileHover="hover"
          />

          <Happiness
            variants={BoxHover}
            initial="start"
            animate="end"
            whileHover="hover"
          />

          <Love
            variants={BoxHover}
            initial="start"
            animate="end"
            whileHover="hover"
          />

          <Wish
            variants={BoxHover}
            initial="start"
            animate="end"
            whileHover="hover"
          />
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
