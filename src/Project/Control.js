import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EmotionControl } from "./EmotionControlDB";
import { useEffect } from "react";

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

  margin-top: 50px;
  margin-bottom: 30px;
  &:hover {
    color: red;
    text-shadow: 6px 5px gray;
  }
`;

// ---------------------------------------------------- 메뉴 리스트
const Nav = styled(motion.nav)`
  /* 네비게이션 스타일을 여기에 추가하세요 */
  position: absolute;
  top: 70px;
  left: 40%;
  width: 300px;
`;

const Button = styled(motion.button)`
  /* 버튼 스타일 및 애니메이션을 여기에 추가하세요 */
  width: 100%;
  padding: 10px;
  font-size: 30px;
  background-color: white;
  box-shadow: 5px 5px;

  &:hover {
    cursor: pointer;
    background-color: red;
  }
  &.active {
    color: white;
    background-color: black;
  }
`;

const IconContainer = styled(motion.div)`
  /* 아이콘 컨테이너 스타일 및 애니메이션을 여기에 추가하세요 */
  display: inline-block;
  margin-left: 100px;
  scale: 1.5;
`;

const Ul = styled(motion.ul)`
  /* 목록 스타일 및 애니메이션을 여기에 추가하세요 */
  position: absolute;
  top: -25%;
  left: 110%;
  display: flex;
  width: 800px;
  height: 100%;
  padding: 0;
`;

const Item = styled(motion.button)`
  /* 항목 스타일 및 애니메이션을 여기에 추가하세요 */
  width: 100%;
  font-size: 20px;
  word-break: keep-all;
  background-color: white;
  margin-left: 10px;
  box-shadow: 5px 5px;

  &:hover {
    cursor: pointer;
    background-color: red;
  }

  &.active {
    color: white;
    background-color: black;
  }
`;

const ItemList = styled(motion.div)`
  position: absolute;
  left: 110%;
  display: flex;
  margin-top: 10px;
  width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ButtonBox = styled(motion.div)`
  display: inline-block;
  margin-left: 10px;
  box-shadow: 5px 5px;
`;

const ListButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 20px;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: red;
  }
  &.active {
    color: white;
    background-color: black;
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
  open: {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
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
};

const ItemListMotion = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    transition: {
      type: "spring",
      bounce: 0,
      delay: 1,
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
};

// ---------------------------------------------------- 메뉴 리스트

const Page = styled(motion.section)`
  position: relative;
  width: 100vw;
  height: 100vh;
  border-top: 2px solid black;
  overflow: hidden;
`;

const PageMotion = {
  start: {
    // "background-color": "black",
    // clipPath:   "circle(0%)",
    border: "500px solid black",
    transition: { duration: 1.5, type: "tween" },
  },
  end: {
    // "background-color": "black",
    // clipPath: "circle(100%)",
    border: "0px solid black",

    transition: { duration: 1.5, type: "tween" },
  },
};

// ---------------------------------------------------- 모달 내부

const Modal = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  font-size: 50px;
  word-break: keep-all;
`;

const BoxMotion = {
  start: {
    y: -window.innerWidth,
    opacity: 0,
    transition: { duration: 2, type: "spring" },
  },

  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, type: "spring" },
  },

  exit: {
    y: -window.innerWidth,
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
  // const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    console.log(active);
  }, [selectedButton]);

  const ItemClick = (i) => {
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setListButton(0);
    setActive(true);
  };

  const ListClick = (i) => {
    // 이미 선택된 ListButton을 눌렀을 때, 아무 작업도 하지 않음
    if (i === listButton) {
      return;
    }
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

      <Nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <Button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}

          // className={active && isOpen ? "active" : ""}
        >
          감정관리
          <IconContainer
            variants={{
              open: { rotate: -90 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </IconContainer>
        </Button>
        <Ul
          variants={UlMotion}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {EmotionControl.map((B, i) => (
            <Item
              key={B.id}
              variants={itemVariants}
              onClick={() => ItemClick(i)}
              className={active && i === selectedButton ? "active" : ""}
            >
              {B.title}
            </Item>
          ))}
        </Ul>

        {selectedButton !== null && (
          <ItemList variants={ItemListMotion}>
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
      </Nav>

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
