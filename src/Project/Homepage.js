import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  function clickButton() {
    setShow((appear) => !appear);
  }
  return (
    <>
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

      <h1>현재 메인 홈페이지는 공사중입니다.</h1>
    </>
  );
}
