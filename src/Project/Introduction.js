import styled from "styled-components";
import EmotionDB from "./EmotionDB";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

// ------------------------------------------- 버튼

const NavButtonCircle = styled(motion.div)`
  position: relative;
  position: fixed;
  top: 50px;
  right: 100px;
  width: 250px;
  height: 200px;
  /* background-color: red; */
`;

const NavButton = styled(motion.button)`
  position: absolute;
  width: 50px;
  height: 50px;
  transform-origin: center center;
  top: 30%;
  left: 40%;
`;

const Buttons = styled(motion.div)`
  position: absolute;
  top: 60%;
  left: 16%;
`;

const BackButton = styled(motion.button)`
  width: 50px;
  height: 50px;
`;

const MainButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
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

const Page = styled.div`
  width: 1000px;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
`;

const DbBox = styled.div`
  text-align: center;
  width: 300px;
  margin-bottom: 20px;
  border: 5px solid #00ff00;
  color: violet;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100px;
`;

export function Introduction() {
  const [show, setShow] = useState(false);
  function clickButton() {
    setShow((appear) => !appear);
  }
  // const navigate = useNavigate();
  return (
    <>
      <Page>
        {EmotionDB.map((Emotion, i) => (
          <DbBox key={Emotion.id}>
            <Img src={Emotion.image} alt={Emotion.description} />
            <h3>이름: {Emotion.title}</h3>
          </DbBox>
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
                <StyledLink to="/Homepage">메인</StyledLink>
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
