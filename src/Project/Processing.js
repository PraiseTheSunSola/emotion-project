import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;
//--------------------------------Menu1
const Menu1 = styled(motion.nav)`
  display: inline-block;
`;

const MenuButton1 = styled(motion.button)`
  width: 200px;
  background-color: bisque;
`;

const MenuBox1 = styled(motion.nav)``;

const MenuUl1 = styled(motion.ul)`
  width: 160px;
  height: 300px;
  background-color: wheat;
`;
const MenuList1 = styled(motion.li)``;

//--------------------------------Menu1

//--------------------------------Menu2

const Menu2 = styled(motion.nav)`
  display: inline-block;
`;

const MenuButton2 = styled(motion.button)`
  width: 200px;
  background-color: bisque;
`;

const MenuBox2 = styled(motion.nav)``;

const MenuUl2 = styled(motion.ul)`
  width: 160px;
  height: 300px;
  background-color: wheat;
`;
const MenuList2 = styled(motion.li)``;

//--------------------------------Menu2

const Input1 = styled.input`
  width: 200px;
  height: 33px;
  border: 2px solid black;
  display: inline-block;
`;
const Input2 = styled.input`
  width: 200px;
  height: 33px;
  border: 2px solid black;
  display: inline-block;
`;

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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function Processing() {
  const [show, setShow] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");

  const Input1Change = (event) => {
    setInput1Value(event.target.value);
  };
  const Input2Change = (event) => {
    setInput2Value(event.target.value);
  };

  function clickButton() {
    setShow((appear) => !appear);
  }
  return (
    <>
      <Page>
        <Menu1
          initial={false}
          animate={isOpen1 ? "open" : "closed"}
          className="menu"
        >
          <MenuButton1
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen1(!isOpen1)}
          >
            Menu
            <MenuBox1
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </MenuBox1>
          </MenuButton1>

          <MenuUl1
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen1 ? "auto" : "none" }}
          >
            <MenuList1 variants={itemVariants}>Item 1 </MenuList1>
            <MenuList1 variants={itemVariants}>Item 2 </MenuList1>
            <MenuList1 variants={itemVariants}>Item 3 </MenuList1>
            <MenuList1 variants={itemVariants}>Item 4 </MenuList1>
            <MenuList1 variants={itemVariants}>Item 5 </MenuList1>
          </MenuUl1>
        </Menu1>

        <Menu2
          initial={false}
          animate={isOpen2 ? "open" : "closed"}
          className="menu"
        >
          <MenuButton2
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen2(!isOpen2)}
          >
            Menu
            <MenuBox2
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </MenuBox2>
          </MenuButton2>

          <MenuUl2
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen2 ? "auto" : "none" }}
          >
            <MenuList2 variants={itemVariants}>Item 1 </MenuList2>
            <MenuList2 variants={itemVariants}>Item 2 </MenuList2>
            <MenuList2 variants={itemVariants}>Item 3 </MenuList2>
            <MenuList2 variants={itemVariants}>Item 4 </MenuList2>
            <MenuList2 variants={itemVariants}>Item 5 </MenuList2>
          </MenuUl2>
        </Menu2>

        <Input1 type="text" value={input1Value} onChange={Input1Change} />
        <Input2 type="text" value={input2Value} onChange={Input2Change} />
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
