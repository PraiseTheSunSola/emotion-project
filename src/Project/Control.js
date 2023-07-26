import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { EmotionControl } from "./EmotionControlDB";
import { useEffect } from "react";
const Page = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const Title = styled.title`
  display: inline-block;

  font-size: 100px;
  margin-bottom: 30px;
  z-index: 2;
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
  left: 1%;
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

// ---------------------------------------------------- 모달 내부

const Modal = styled(motion.div)`
  position: absolute;
  width: 81%;
  height: 100%;
  top: 53%;
  left: 58%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ButtonBox = styled(motion.div)`
  display: inline-block;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const List = styled.button`
  display: inline-block;
`;

const BoxMotion = {
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

export function Control() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [listButton, setListButton] = useState(null);

  const ItemClick = (i) => {
    setSelectedButton(i); // 선택한 버튼 인덱스를 설정
    setListButton(0);
  };

  const ListClick = (i) => {
    setListButton(i);
  };

  const DeleteBtnClick = () => {
    setSelectedButton(null); // 선택한 버튼 상태를 초기화하여 모달을 닫음
  };

  // useEffect(() => {
  //   if (selectedButton != null && listButton != null) {
  //     console.log("hgdgh");
  //     console.log(EmotionControl[selectedButton].list[listButton].image);
  //   }
  // }, [selectedButton, listButton]);

  return (
    <>
      <Title>C O N T R O L</Title>
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
                key={B.i}
                onClick={() => ItemClick(i)}
              >
                {B.title}
              </Item>
            ))}
          </Ul>

          {selectedButton !== null && (
            <div>
              {EmotionControl[selectedButton].list.map((C, i) => (
                <ButtonBox key={C.id}>
                  <List onClick={() => ListClick(i)}>{C.title}</List>
                </ButtonBox>
              ))}
            </div>
          )}
        </Nav>
        {listButton !== null &&
          selectedButton !== null &&
          EmotionControl[selectedButton] !== null && (
            <Modal>
              <Img
                src={EmotionControl[selectedButton].list[listButton].image}
                alt={
                  EmotionControl[selectedButton].list[listButton].description
                }
              />
              <P>{EmotionControl[selectedButton].list[listButton].text}</P>
            </Modal>
          )}
      </Page>
    </>
  );
}
