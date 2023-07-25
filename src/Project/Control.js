import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { EmotionControl } from "./EmotionControlDB";
const Page = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const Title = styled.title`
  display: flex;
  justify-content: center;
  font-size: 100px;
  margin-bottom: 30px;
`;

const H2 = styled.h2`
  display: block;
  font-size: 50px;
`;

const H3 = styled.h3`
  display: block;
  font-size: 30px;
`;

const P = styled.p`
  display: inline-block;
  font-size: 20px;
`;
// ---------------------------------------------------- 메뉴 리스트
const Nav = styled(motion.nav)`
  /* 네비게이션 스타일을 여기에 추가하세요 */
  position: absolute;
  top: 30px;
  left: 200px;
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
  width: 100%;
  height: 100%;
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

const Modal = styled(motion.div)`
  position: absolute;
  width: 1000px;
  height: 700px;
  top: 40%;
  left: 60%;
  background-color: white;
  border: 5px solid black;
  transform: translate(-50%, -50%);
  Img {
    width: 100%;
    height: 80%;
  }
`;
// ---------------------------------------------------- 모달 내부
const EmotionBox = styled(motion.div)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  display: grid;
  z-index: 1;
  grid-template-columns: repeat(8, 1fr);
`;

const Box = styled(motion.div)`
  border: 1px solid white;
  &:hover {
  }
  // 실체가 없어도 기능적인 부분만 상속하려면 가능함.
`;

const Anger = styled(Box)`
  background-color: red;
  transform-origin: top;
  &:hover {
  }
`;

const Sadness = styled(Box)`
  transform-origin: top;
  &:hover {
  }
`;

const Anxiety = styled(Box)`
  transform-origin: top;
  &:hover {
  }
`;

const BoxHover = {
  start: {
    scaleY: 0,
    transition: { duration: 2, type: "tween" },
  },

  end: {
    scaleY: 1,
    transition: { duration: 3, type: "tween" },
  },

  hover: {
    scaleX: 1.5,
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

const ButtonBox = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const List = styled.button``;

export function Control() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [listButton, setListButton] = useState("");

  const ItemClick = (i) => {
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setListButton(null);
  };

  const ListClick = (i) => {
    console.log(EmotionControl[selectedButton].list[i]);
    setListButton(i);
  };

  const DeleteBtnClick = () => {
    setSelectedButton(null); // 선택한 버튼 상태를 초기화하여 모달을 닫음
  };

  return (
    <>
      <Title>CONTROL</Title>
      <Page>
        <Nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="menu"
        >
          <Button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
            감정관리
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
            {EmotionControl.map((B, i) => (
              <Item
                variants={itemVariants}
                key={i}
                onClick={() => ItemClick(i)}
              >
                {B.title}
              </Item>
            ))}
          </Ul>
        </Nav>
        {selectedButton !== null && (
          <Modal>
            <ButtonBox>
              {EmotionControl[selectedButton].list.map((C, i) => (
                <List key={i} onClick={() => ListClick(i)}>
                  {C.title}
                </List>
              ))}
            </ButtonBox>

            {listButton !== null && (
              <P>{EmotionControl[selectedButton].list[listButton].text}</P>
            )}
          </Modal>
        )}
      </Page>
    </>
  );
}
