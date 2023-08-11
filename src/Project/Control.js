import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EmotionControl } from "./EmotionControlDB";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { lightTheme, darkTheme } from "./Themes";

const Body = createGlobalStyle`

::-webkit-scrollbar {
  display: none;
    /* opacity: 0; */
    /* color: red; */
    /* 스크롤바의 너비 */
    /* 스크롤바 배경색 */
  }
  * {
    scrollbar-width: none;
  }

`;

const Title = styled(motion.title)`
  display: inline-block;
  font-size: 100px;
  margin-top: 55px;
  margin-left: 80px;
  margin-bottom: 30px;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
    text-shadow: 6px 5px gray;
  }
`;

const MovePageTop = styled(motion.button)`
  position: fixed;
  bottom: 10%;
  left: 95%;
  width: 50px;
  height: 50px;
  font-size: 40px;
  border: 0px;
  background-color: white;
  color: black;
  opacity: 1;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    color: gray;
  }
`;

const MovePageBottom = styled(motion.button)`
  position: fixed;
  bottom: 5%;
  left: 95%;
  width: 50px;
  height: 50px;
  font-size: 40px;
  border: 0px;
  background-color: white;
  color: black;

  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const MoveTop = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { type: "spring", delay: 2 },
  },
};

const MoveBottom = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { type: "spring", delay: 2 },
  },
};

// ---------------------------------------------------- 메뉴 리스트

const Ul = styled(motion.ul)`
  /* 목록 스타일 및 애니메이션을 여기에 추가하세요 */
  position: relative;
  top: -150px;
  left: 50%;
  display: flex;
  width: 750px;
  padding: 0;
`;

const Item = styled(motion.button)`
  /* 항목 스타일 및 애니메이션을 여기에 추가하세요 */
  width: 100%;
  font-size: 20px;
  word-break: keep-all;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.textColor};
  padding: 10px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
  }

  &.active {
    color: ${(props) => props.theme.activeColor};
    box-shadow: none;
    border: 5px inset ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const ItemList = styled(motion.div)`
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  width: 810px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ButtonBox = styled(motion.div)`
  width: 100%;
  display: inline-block;
  margin-left: 10px;
`;

const ListButton = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 5px 5px gray;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverColor};
  }
  &.active {
    color: ${(props) => props.theme.activeColor};
    background-color: ${(props) => props.theme.backgroundColor};
    border: 5px inset ${(props) => props.theme.textColor};
    box-shadow: none;
  }
`;

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const UlMotion = {
  start: {
    opacity: 0,
    y: -200,
    transition: { type: "spring", duration: 1.5, delay: 1.8 },
  },
  end: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.5, delay: 1.8 },
  },
};

const ItemListMotion = {
  start: {
    opacity: 0,
    y: -200,
    transition: { type: "spring", duration: 1.5, delay: 1.8 },
  },
  end: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.5, delay: 1.8 },
  },
};

// ---------------------------------------------------- 메뉴 리스트

const Page = styled(motion.section)`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageMotionFunc = (theme) => {
  return {
    start: {
      border: `500px solid ${theme.textColor}`,
      transition: { duration: 1.5, type: "tween" },
    },
    end: {
      border: `0px solid ${theme.textColor}`,
      transition: { duration: 1.5, type: "tween" },
    },
  };
};
// ---------------------------------------------------- 모달 내부

const Modal = styled(motion.div)`
  position: absolute;
  top: -10px;
  display: grid;
  grid-template-columns: repeat(2, 600px);
  width: 1200px;
  height: 608px;
  border: 4px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.ModalbackgroundColor};
  overflow: hidden;
`;

const Img = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  /* transform: translate(100%, 0%); */
  display: inline-block;
  font-size: 25px;
  color: gray;
  word-break: keep-all;
  padding: 140px;
`;

const BoxMotion = {
  start: {
    x: -window.innerWidth,
    opacity: 0,
    transition: { duration: 1.5, type: "spring" },
  },

  end: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, type: "spring" },
  },

  exit: {
    x: -window.innerWidth,
    opacity: 0,
    transition: { duration: 1, type: "tween" },
  },
};

// ---------------------------------------------------- 모달 내부

const DeleteBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 1%;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export function Control() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [listButton, setListButton] = useState(null);
  const [key, setKey] = useState(0);
  const [active, setActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState(darkTheme);
  const PageMotion = PageMotionFunc(theme);

  useEffect(() => {
    if (isDarkTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [isDarkTheme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   console.log(active);
  // }, [selectedButton]);

  const ItemClick = (i) => {
    if (i === selectedButton) {
      return;
    }
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setListButton(0);
    setActive(true);
  };

  const ListClick = (i) => {
    // 이미 선택된 ListButton을 눌렀을 때, 아무 작업도 하지 않음
    if (isAnimating) {
      return;
    }
    if (i === listButton) {
      return;
    }
    console.log(isAnimating);
    setIsAnimating(true);
    setActive(true);
    setListButton(i);
    increaseKey();
  };

  const DeleteBtnClick = () => {
    setSelectedButton(null); // 선택한 버튼 상태를 초기화하여 모달을 닫음
  };

  function increaseKey() {
    setKey((prev) => prev + 1);
  }

  return (
    <>
      <Body />

      <Title variants={PageMotion} initial="start" animate="end">
        C O N T R O L
      </Title>

      <Ul variants={UlMotion} initial="start" animate="end">
        {EmotionControl.map((B, i) => (
          <Item
            key={B.id}
            onClick={() => ItemClick(i)}
            className={active && i === selectedButton ? "active" : ""}
          >
            {B.title}
          </Item>
        ))}

        {selectedButton !== null && (
          <ItemList>
            {EmotionControl[selectedButton].list.map((C, i) => (
              <ButtonBox key={C.id}>
                <ListButton
                  onClick={() => ListClick(i)}
                  className={active && i === listButton ? "active" : ""}
                >
                  {C.title}
                </ListButton>
              </ButtonBox>
            ))}
          </ItemList>
        )}
      </Ul>

      <Page variants={PageMotion} initial="start" animate="end">
        <AnimatePresence>
          {listButton !== null &&
            selectedButton !== null &&
            EmotionControl[selectedButton] !== null && (
              <Modal
                variants={BoxMotion}
                initial="start"
                animate="end"
                exit="exit"
                key={key}
                onAnimationComplete={(type) => {
                  if (type === "end") {
                    console.log("end complete");
                    setIsAnimating(false);
                  }
                }} // 애니메이션 완료 시 클릭 가능
              >
                <Img
                  src={EmotionControl[selectedButton].list[listButton].image}
                  alt={
                    EmotionControl[selectedButton].list[listButton].description
                  }
                />

                <P>{EmotionControl[selectedButton].list[listButton].text}</P>
              </Modal>
            )}
        </AnimatePresence>
      </Page>
    </>
  );
}
