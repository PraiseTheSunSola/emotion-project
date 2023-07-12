import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Testbutton = styled(motion.button)`
  width: 700px;
  height: 300px;
  border: 5px solid red;
  background-color: gray;
`;

const fadeInAnimation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// ------------------------------------------- 버튼
const NavButtonCircle = styled(motion.div)`
  position: relative;
  position: fixed;
  top: 50%;
  right: 10px;
  width: 50px;
  height: 250px;
  /* background-color: red; */
`;

const NavButton = styled(motion.button)`
  position: absolute;
  width: 50px;
  height: 50px;
  transform-origin: center center;
`;

const Buttons = styled(motion.div)`
  position: absolute;
  top: 30%;
`;

const MoveRegulation = styled(motion.button)`
  width: 50px;
  height: 50px;
`;

const MoveIntroduction = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-top: 10px;
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
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  function clickButton() {
    setShow((appear) => !appear);
  }
  return (
    <>
      <Page>
        <Testbutton
          initial="visible"
          animate={isAnimated ? "hidden" : "visible"}
          variants={fadeInAnimation}
          transition={{ duration: 1 }}
          onClick={handleClick}
        >
          <h1>
            현재 메인 홈페이지는 공사중이므로 양해바랍니다.
            <br />
            <br />
            (클릭시 사라집니다.)
          </h1>
        </Testbutton>
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
