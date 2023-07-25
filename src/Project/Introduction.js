import styled from "styled-components";
import { EmotionKind } from "./EmotionKind";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = styled.title`
  display: block;
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-bottom: 50px;
`;

const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  border-top: 2px solid black;
`;

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
  right: -90%;
  display: flex;
  width: 800px;
  padding: 0;
`;

const Item = styled(motion.button)`
  /* 항목 스타일 및 애니메이션을 여기에 추가하세요 */
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
`;

const itemVariants: Variants = {
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
grid-template-columns: repeat(5,1fr);
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 이미지 클릭
  const [selectedButton, setSelectedButton] = useState(null);
  const [listButton, setListButton] = useState("");

  const ListClick = (i) => {
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setListButton(null);
  };

  const ItemClick = (i) => {
    setListButton(i);
  };

  const ImageClick = (i) => {
    setSelectedImage(i);
  };

  return (
    <>
      <Title>TYPES</Title>
      <Page>
        <Nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="menu"
        >
          <Button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
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
                onClick={() => ListClick(i)}
              >
                {emotionArray[0].name}
              </Item>
            ))}
          </Ul>
        </Nav>
    
              <BigBox >
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
          )};
          </BigBox>
        
      </Page>
      ;
    </>
  );
}
