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

const DbBox = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.h3`
  font-size: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
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
  /* top: 30%;
  left: 40%; */
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
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    controls.start({ x: "100%" }); // 초기 위치 설정
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
          <motion.div
            style={{ width: "100%", height: "80%" }}
            key={Emotion.id}
            initial={{ x: i % 2 === 0 ? "100%" : "-100%" }}
            animate={
              hoveredIndex === i
                ? { x: 0 }
                : { x: i % 2 === 0 ? "-100%" : "100%" }
            }
            transition={{ duration: 10, repeat: Infinity }} // 애니메이션의 지속 시간
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <DbBox>
              <motion.img
                src={Emotion.image}
                alt={Emotion.description}
                style={{ width: "100%", height: "80%" }}
              />
              <Name>{Emotion.title}</Name>
            </DbBox>
          </motion.div>
        ))}
      </Page>

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
