import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Test1 from "../Emotions/10Fury.jpg";
import Test2 from "../Emotions/11Grudge.jpg";
import Test3 from "../Emotions/12sad.jpg";
import Test4 from "../Emotions/1Anger.png";
import Test5 from "../Emotions/2Disillusionment.jpg";
import Test6 from "../Emotions/3frustrating.jpg";
import Test7 from "../Emotions/4tantrum.jpg";
import Test8 from "../Emotions/5Pigritia.jpg";
const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const EmotionBox = styled(motion.div)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  z-index: 3;
`;

const Box = styled(motion.div)`
  border: 1px solid white;
  &:hover {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 18%;
  }
  // 실체가 없어도 기능적인 부분만 상속하려면 가능함.
`;

const Anger = styled(Box)`
  transform-origin: top;

  &:hover {
    background-image: url(${Test1});
  }
`;

const Sadness = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test2});
  }
`;

const Anxiety = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test3});
  }
`;

const Hurt = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test4});
  }
`;

const Shame = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test5});
  }
`;

const Happiness = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test6});
  }
`;

const Love = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test7});
  }
`;

const Wish = styled(Box)`
  transform-origin: top;
  &:hover {
    background-image: url(${Test8});
  }
`;

const Img = styled.img``;

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

const TextBox = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 25%;
  transform: translate(50%, 50%);
  z-index: 1;
`;

const Text = styled(motion.textarea)`
  width: 500px;
  height: 500px;
  background-color: white;
  border: 5px solid green;
  outline: outset green;
`;

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
          >
            <Img />
          </Anger>

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

        <TextBox>
          <Text />
        </TextBox>
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
