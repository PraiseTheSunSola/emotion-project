import styled from "styled-components";
import EmotionDB from "./EmotionDB";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const BigBox = styled(motion.div)`
  width: 100%;
  height: 80%;
`;

const DbBox = styled(motion.div)`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  text-align: center;

  &:hover {
    cursor: zoom-in;
    border: 5px solid red;
  }
`;
const Name = styled(motion.h3)`
  font-size: 20px;
`;

const Text = styled(motion.h3)`
  font-size: 20px;
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 80%;
`;

const Modal = styled(motion.div)`
  position: fixed;
  width: 500px;
  height: 600px;
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

export function Introduction() {
  const [selectedImage, setSelectedImage] = useState(null); // 이미지 클릭
  const [emotionDB, setEmotionDB] = useState(EmotionDB);
  const controls = useAnimation();

  function DeleteBtnClick(id) {
    const updatedDB = emotionDB.filter((emotion) => emotion.id !== id);
    setEmotionDB(updatedDB);
    setSelectedImage(null); // 선택 상태 초기화
  }

  const ImageClick = (i) => {
    setSelectedImage(i);
  };

  useEffect(() => {
    controls.start();
  }, [controls]);

  const [show, setShow] = useState(false);
  function clickButton() {
    setShow((appear) => !appear);
  }
  // const navigate = useNavigate();
  return (
    <>
      <Page>
        {EmotionDB.map((Emotion, i) => (
          <BigBox
            key={Emotion.id}
            initial={{ x: i < 5 ? "-100%" : "100%" }}
            animate={{
              x: i < 5 ? ["-100%", "100%", "-100%"] : ["100%", "-100%", "100%"],
              transition: { duration: 50, repeat: Infinity },
            }}
          >
            <DbBox onClick={() => ImageClick(i)}>
              <Img src={Emotion.image} alt={Emotion.description} />
              <Name>{Emotion.title}</Name>
            </DbBox>
          </BigBox>
        ))}
      </Page>

      {selectedImage !== null && ( // 선택된 이미지가 있는 경우에만 모달창 표시
        <Modal>
          <Img
            src={EmotionDB[selectedImage].image}
            alt={EmotionDB[selectedImage].description}
          />
          <Name>{EmotionDB[selectedImage].title}</Name>
          <Text>{EmotionDB[selectedImage].text}</Text>
          <DeleteBtn
            onClick={() => DeleteBtnClick(EmotionDB[selectedImage].id)}
          >
            뒤로
          </DeleteBtn>
        </Modal>
      )}

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
                // onClick={() => navigate(-1)}
              >
                <StyledLink to="/Regulation">이전</StyledLink>
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
                <StyledLink to="/Processing">다음</StyledLink>
              </NextButton>
            </Buttons>
          ) : null}
        </AnimatePresence>
      </NavButtonCircle>
    </>
  );
}
