import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Anger, Sadness, apprehension, Hurt, shame } from "./MenuListDB";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MenuAndInput = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
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
const MenuList1 = styled(motion.li)`
  :hover {
    cursor: pointer;
  }
`;

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

//--------------------------------Input

const TitleInputBox = styled.div`
  height: 371px;
`;
const TitleInput = styled.input`
  width: 200px;
  height: 33px;
  border: 2px solid black;
  display: inline-block;
`;

const EnterManuallyInputBox = styled.div`
  height: 371px;
`;
const EnterManuallyInput = styled.input`
  width: 200px;
  height: 33px;
  border: 2px solid black;
  display: inline-block;
`;

const MainContentInputBox = styled.div`
  height: 0%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MainContentInput = styled.textarea`
  width: 800px;
  height: 500px;
  border: 2px solid black;
  display: inline-block;
`;

//--------------------------------Input

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
  const [enterManuallyInputValue, setEnterManuallyInputValue] = useState("");
  const [titleinputValue, setTitleInputValue] = useState("");
  const [mainContentInputValue, setMainContentInputValue] = useState("");
  const [firstList, setFirstList] = useState(0);
  const [selectedMenu1Text, setSelectedMenu1Text] = useState("");
  const [selectedMenu2Text, setSelectedMenu2Text] = useState("");

  const EnterManuallyInputChange = (event) => {
    setEnterManuallyInputValue(event.target.value);
  };
  const TitleInputChange = (event) => {
    setTitleInputValue(event.target.value);
  };
  const MainContentInputChange = (event) => {
    setMainContentInputValue(event.target.value);
  };

  function clickButton() {
    setShow((appear) => !appear);
  }

  const TwoDimensionalArray = {
    분노: Anger,
    슬픔: Sadness,
    불안: apprehension,
    아픔: Hurt,
    창피: shame,
  };

  function MenuListClick(menu) {
    setFirstList(menu);
    setSelectedMenu1Text(menu);
  }

  return (
    <>
      <Page>
        <MenuAndInput>
          <Menu1
            initial={false}
            animate={isOpen1 ? "open" : "closed"}
            className="menu"
          >
            <MenuButton1
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen1(!isOpen1)}
            >
              {selectedMenu1Text || "Menu"}
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
              <MenuList1
                variants={itemVariants}
                onClick={() => MenuListClick("분노")}
              >
                {" "}
                분노{" "}
              </MenuList1>
              <MenuList1
                variants={itemVariants}
                onClick={() => MenuListClick("슬픔")}
              >
                {" "}
                슬픔{" "}
              </MenuList1>
              <MenuList1
                variants={itemVariants}
                onClick={() => MenuListClick("불안")}
              >
                {" "}
                불안{" "}
              </MenuList1>
              <MenuList1
                variants={itemVariants}
                onClick={() => MenuListClick("아픔")}
              >
                {" "}
                아픔{" "}
              </MenuList1>
              <MenuList1
                variants={itemVariants}
                onClick={() => MenuListClick("창피")}
              >
                {" "}
                창피{" "}
              </MenuList1>
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
              {selectedMenu2Text || "Menu"}
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
              {firstList &&
                TwoDimensionalArray[firstList].map((menu) => (
                  <MenuList2 key={menu.id} variants={itemVariants}>
                    {menu.title}
                  </MenuList2>
                ))}
            </MenuUl2>
          </Menu2>

          <EnterManuallyInputBox>
            <EnterManuallyInput
              type="text"
              placeholder="직접입력"
              value={enterManuallyInputValue}
              onChange={EnterManuallyInputChange}
            />
          </EnterManuallyInputBox>

          <TitleInputBox>
            <TitleInput
              type="text"
              placeholder="제목 입력"
              value={titleinputValue}
              onChange={TitleInputChange}
            />
          </TitleInputBox>
        </MenuAndInput>

        <MainContentInputBox>
          <MainContentInput
            type="text"
            placeholder="당신의 감정을 차근 차근 정리해보세요."
            value={mainContentInputValue}
            onChange={MainContentInputChange}
          />
        </MainContentInputBox>
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
