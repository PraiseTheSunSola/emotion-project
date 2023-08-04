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
  position: absolute;
  left: 35%;
  display: inline-block;
  font-size: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
  z-index: 1;
  &:hover {
    color: red;
    text-shadow: 6px 5px gray;
  }
`;

const Page = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 200vh;
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

const MovePageTop = styled(motion.button)`
  position: fixed;
  bottom: 5%;
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
  top: 10%;
  left: 10%;
  display: flex;
  width: 80%;
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

const BigBox = styled(motion.div)`
  position: absolute;
  top: 15%;
  left: 11.5%;
  display: grid;
  grid-template-columns: repeat(3, 580px);
  width: 100%;
  height: 300px;
  /* background-color: red; */
`;

const EmotionBox = styled(motion.div)`
  width: 350px;
  height: 300px;
  margin-bottom: 40px;
  text-align: center;
  &:hover {
    cursor: zoom-in;
    transform: scale(1.1);
    box-shadow: 5px 5px 10px 5px;
  }
`;

const BoxMotion = {
  start: {
    y: window.innerWidth,
    opacity: 0,
    transition: { duration: 1, type: "tween" },
  },

  end: {
    y: 1,
    opacity: 1,
    transition: { duration: 1, type: "tween" },
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
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  word-break: keep-all;
`;

const ModalOnOff = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.3); */
`;

const Text = styled(motion.p)`
  font-size: 14px;
  color: grey;
  padding: 0px 30px 0px 30px;
  text-align: center;
  word-break: keep-all;
`;

const Modal = styled(motion.div)`
  position: fixed;
  width: 500px;
  height: 700px;
  top: 55%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  Img {
    width: 100%;
    height: 80%;
  }

  h3 {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
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
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // 이미지 클릭
  const [emotionDB, setEmotionDB] = useState(EmotionKind);
  const [active, setActive] = useState(false);
  const [key, setKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ClickMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ClickMoveBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  const ItemClick = (i) => {
    if (i === selectedButton) {
      return;
    }
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setActive(true);
    increaseKey();
  };

  function increaseKey() {
    setKey((prev) => prev + 1);
  }

  const ImageClick = (i) => {
    setSelectedImage(i);
    setIsModalOpen(true);
    console.log(EmotionKind[selectedButton][i]);
  };

  // function DeleteBtnClick(id) {
  //   const updatedDB = emotionDB.filter((emotion) => emotion.id !== id);
  //   console.log(updatedDB);
  //   setEmotionDB(updatedDB);
  //   setSelectedImage(null); // 선택 상태 초기화
  // }

  return (
    <>
      <Body />
      <Title variants={PageMotion} initial="start" animate="end">
        T Y P E S
      </Title>
      <Page variants={PageMotion} initial="start" animate="end">
        <Ul variants={itemVariants} initial="start" animate="end">
          {EmotionKind.map((emotionArray, i) => (
            <Item
              key={i}
              onClick={() => ItemClick(i)}
              className={active && i === selectedButton ? "active" : ""}
            >
              {emotionArray[0].name}
            </Item>
          ))}
        </Ul>

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
          </BigBox>
        </AnimatePresence>
      </Page>
      {selectedImage !== null &&
        selectedButton !== null &&
        isModalOpen && ( // 선택된 이미지가 있는 경우에만 모달창 표시
          <ModalOnOff onClick={() => CloseModal()}>
            <Modal>
              <Img
                src={EmotionKind[selectedButton][selectedImage].image}
                alt={EmotionKind[selectedButton][selectedImage].description}
              />
              <Name>{EmotionKind[selectedButton][selectedImage].title}</Name>
              <Text>{EmotionKind[selectedButton][selectedImage].text}</Text>
            </Modal>
          </ModalOnOff>
        )}
      ;
      <MovePageTop
        variants={MoveTop}
        initial="start"
        animate="end"
        exit="exit"
        onClick={() => ClickMoveTop()}
      >
        ▲
      </MovePageTop>
    </>
  );
}
