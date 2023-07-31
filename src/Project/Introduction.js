import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { EmotionKind } from "./EmotionKind";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

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
  display: block;
  display: flex;
  justify-content: center;
  font-size: 100px;

  margin-top: 50px;
  margin-bottom: 50px;
  &:hover {
    color: red;
    text-shadow: 6px 5px gray;
  }
`;

const Page = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  border-top: 2px solid black;
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

// ---------------------------------------------------- 메뉴 리스트
const Nav = styled(motion.nav)`
  /* 네비게이션 스타일을 여기에 추가하세요 */
  position: absolute;
  top: 30px;
  left: 40%;
  width: 300px;
`;

const Button = styled(motion.button)`
  /* 버튼 스타일 및 애니메이션을 여기에 추가하세요 */
  width: 100%;
  padding: 10px;
  font-size: 30px;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
  box-shadow: 5px 5px;
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
  right: -110%;
  display: flex;
  width: 1000px;
  padding: 0;
`;

const Item = styled(motion.button)`
  /* 항목 스타일 및 애니메이션을 여기에 추가하세요 */
  width: 100%;
  font-size: 20px;
  margin-left: 30px;
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

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

// ---------------------------------------------------- 메뉴 리스트

const BigBox = styled(motion.div)`
  position: absolute;
  top: 20%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 300px;
`;

const EmotionBox = styled(motion.div)`
  width: 310px;
  height: 300px;
  margin-bottom: 20px;
  text-align: center;

  &:hover {
    cursor: zoom-in;
    width: 315px;
    border: 5px solid red;
  }
`;

const BoxMotion = {
  start: {
    y: window.innerWidth,
    opacity: 0,
    transition: { duration: 2, type: "spring" },
  },

  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, type: "spring" },
  },

  exit: {
    y: window.innerWidth,
    opacity: 0,
    transition: { duration: 1, type: "tween" },
  },
};

const Img = styled(motion.img)`
  width: 100%;
  height: 80%;
`;

const Name = styled(motion.h3)`
  font-size: 20px;
`;

const Text = styled(motion.h3)`
  font-size: 20px;
`;

const Modal = styled(motion.div)`
  position: fixed;
  width: 500px;
  height: 700px;
  top: 40%;
  left: 50%;
  background-color: white;
  border: 5px solid black;
  transform: translate(-50%, -50%);
  Img {
    width: 100%;
    height: 80%;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 102%;
  right: -1%;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export function Introduction() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // 이미지 클릭
  const [emotionDB, setEmotionDB] = useState(EmotionKind);
  const [active, setActive] = useState(false);
  const [key, setKey] = useState(0);

  const ItemClick = (i) => {
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setActive(true);
    increaseKey();
  };

  function increaseKey() {
    setKey((prev) => prev + 1);
  }

  const ImageClick = (i) => {
    setSelectedImage(i);
    console.log(EmotionKind[selectedButton][i]);
  };

  function DeleteBtnClick(id) {
    const updatedDB = emotionDB.filter((emotion) => emotion.id !== id);
    console.log(updatedDB);
    setEmotionDB(updatedDB);
    setSelectedImage(null); // 선택 상태 초기화
  }

  return (
    <>
      <Body />
      <Title variants={PageMotion} initial="start" animate="end">
        T Y P E S
      </Title>
      <Page variants={PageMotion} initial="start" animate="end">
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
            감정종류
            <IconContainer
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
            </IconContainer>
          </Button>
          <Ul
            variants={{
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
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {EmotionKind.map((emotionArray, i) => (
              <Item
                variants={itemVariants}
                key={i}
                onClick={() => ItemClick(i)}
                className={active && i === selectedButton ? "active" : ""}
              >
                {emotionArray[0].name}
              </Item>
            ))}
          </Ul>
        </Nav>
        <AnimatePresence>
          <BigBox
            variants={BoxMotion}
            initial="start"
            animate="end"
            exit="exit"
            key={key}
          >
            {selectedButton !== null &&
              // console.log(EmotionKind[selectedButton])
              EmotionKind[selectedButton].map((emotionArray, i) =>
                i > 0 ? (
                  <EmotionBox key={i} onClick={() => ImageClick(i)}>
                    <Img
                      src={EmotionKind[selectedButton][i].image}
                      alt={EmotionKind[selectedButton][i].description}
                    />
                    <Name>{EmotionKind[selectedButton][i].title}</Name>
                  </EmotionBox>
                ) : null
              )}
            ;
          </BigBox>
        </AnimatePresence>
      </Page>
      {selectedImage !== null &&
        selectedButton !== null && ( // 선택된 이미지가 있는 경우에만 모달창 표시
          <Modal>
            <Img
              src={EmotionKind[selectedButton][selectedImage].image}
              alt={EmotionKind[selectedButton][selectedImage].description}
            />
            <Name>{EmotionKind[selectedButton][selectedImage].title}</Name>
            <Text>{EmotionKind[selectedButton][selectedImage].text}</Text>
            <DeleteBtn
              onClick={() =>
                DeleteBtnClick(EmotionKind[selectedButton][selectedImage].id)
              }
            >
              뒤로
            </DeleteBtn>
          </Modal>
        )}
      ;
    </>
  );
}
