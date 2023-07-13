import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background: #8e9eab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #eef2f3, #8e9eab);
`;

const EmotionBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;
const Anger = styled(motion.div)`
  background-color: aliceblue;
`;

const Sadness = styled(motion.div)`
  background-color: antiquewhite;
`;

const Anxiety = styled(motion.div)`
  background-color: aqua;
`;

const Hurt = styled(motion.div)`
  background-color: aquamarine;
`;

const Shame = styled(motion.div)`
  background-color: azure;
`;

const Happiness = styled(motion.div)`
  background-color: beige;
`;

const Love = styled(motion.div)`
  background-color: bisque;
`;

const Wish = styled(motion.div)`
  background-color: black;
`;

// ------------------------------------------- 버튼
const NavButtonCircle = styled(motion.div)`
  position: relative;
  position: fixed;
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
          <Anger />

          <Sadness />

          <Anxiety />

          <Hurt />

          <Shame />

          <Happiness />

          <Love />

          <Wish />
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
