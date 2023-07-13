import styled from "styled-components";
import Regulation1 from "../img/Regulation1.jpg";
import Regulation2 from "../img/Regulation2.png";
import Regulation3 from "../img/Regulation3.jpg";
import Regulation4 from "../img/Regulation4.jpg";
import Regulation5 from "../img/Regulation5.jpg";
import Regulation6 from "../img/Regulation6.png";
import Regulation7 from "../img/Regulation7.png";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  width: 100vw;
  overflow: hidden;
`;
const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled(motion.img)`
  display: inline-block;
  width: 600px;
  margin-top: 500px;
  margin-bottom: 500px;
`;

const EndImg = styled(motion.img)`
  display: inline-block;
  width: 600px;
  margin-top: 500px;
  margin-bottom: 50px;
`;
const H1 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 100px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
`;

const H2 = styled(motion.h1)`
  // 오른쪽
  display: inline-block;
  width: 310px;
  height: 200px;
  position: fixed;
  top: 200px;
  right: 300px;
  color: white;
`;

const H3 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 300px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
  color: white;
`;

const H4 = styled(motion.h1)`
  // 오른쪽
  display: inline-block;
  width: 50px;
  height: 200px;
  position: fixed;
  top: 200px;
  right: 300px;
  color: white;
`;

const H5 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 50px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
  color: white;
`;

const H6 = styled(motion.h1)`
  // 오른쪽
  display: inline-block;
  width: 150px;
  height: 200px;
  position: fixed;
  top: 200px;
  right: 300px;
  color: white;
`;

const H7 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 280px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
  color: white;
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

export function Regulation() {
  const [show, setShow] = useState(false);
  function clickButton() {
    setShow((appear) => !appear);
  }

  // const navigate = useNavigate();

  const { scrollYProgress } = useScroll();

  //  텍스트  투명도
  const scrollOpacity1 = useTransform(scrollYProgress, [0, 0.09], [1, 0]);
  const scrollOpacity2 = useTransform(
    scrollYProgress,
    [0.15, 0.16, 0.2, 0.29],
    [0, 0.5, 1, 0]
  );

  const scrollOpacity3 = useTransform(
    scrollYProgress,
    [0.29, 0.3, 0.38, 0.45],
    [0, 0.5, 1, 0]
  );
  const scrollOpacity4 = useTransform(
    scrollYProgress,
    [0.45, 0.46, 0.52, 0.6],
    [0, 0.5, 1, 0]
  );

  const scrollOpacity5 = useTransform(
    scrollYProgress,
    [0.6, 0.61, 0.69, 0.75],
    [0, 0.5, 1, 0]
  );

  const scrollOpacity6 = useTransform(
    scrollYProgress,
    [0.75, 0.76, 0.84, 0.89],
    [0, 0.5, 1, 0]
  );

  const scrollOpacity7 = useTransform(
    scrollYProgress,
    [0.93, 0.95, 0.98, 1.5],
    [0, 0.5, 1, 0]
  );

  // 텍스트 색상
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.02, 0.09],
    ["black", "black", "black"]
  );
  const color2 = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.29],
    ["black", "black", "black"]
  );
  const color3 = useTransform(
    scrollYProgress,
    [0.29, 0.31, 0.33, 0.38, 0.45],
    ["black", "black", "black", "black", "black"]
  );
  const color4 = useTransform(
    scrollYProgress,
    [0.45, 0.46, 0.52, 0.6],
    ["black", "black", "black", "black"]
  );

  const color5 = useTransform(
    scrollYProgress,
    [0.6, 0.61, 0.63, 0.69, 0.75],
    ["black", "black", "black", "black", "black"]
  );

  const color6 = useTransform(
    scrollYProgress,
    [0.75, 0.76, 0.84, 0.89],
    ["black", "black", "black", "black"]
  );

  const color7 = useTransform(
    scrollYProgress,
    [0.89, 0.9, 0.98, 1.5],
    ["black", "black", "black", "black"]
  );

  return (
    <>
      <Page>
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
                  <StyledLink to="/Introduction">다음</StyledLink>
                </NextButton>
              </Buttons>
            ) : null}
          </AnimatePresence>
        </NavButtonCircle>
        <ImageBox>
          <Img
            src={Regulation3}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity1,
              // scale: imageScale,
            }}
          />

          <H1 style={{ color: color1, opacity: scrollOpacity1 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H1>

          <Img
            src={Regulation1}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity2,
              // scale: imageScale,
            }}
          />

          <H2 style={{ color: color2, opacity: scrollOpacity2 }}>
            새어 나오지 않게 잘 숨기려 하지만
          </H2>

          <Img
            src={Regulation2}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity3,
              // scale: imageScale,
            }}
          />

          <H3 style={{ color: color3, opacity: scrollOpacity3 }}>
            이따금 통제할 수 없는 재해처럼 우리를 덧씌우려 한다.
          </H3>

          <Img
            src={Regulation4}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity4,
              // scale: imageScale,
            }}
          />

          <H4 style={{ color: color4, opacity: scrollOpacity4 }}>
            선명한 부정은
          </H4>

          <Img
            src={Regulation5}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity5,
              // scale: imageScale,
            }}
          />

          <H5 style={{ color: color5, opacity: scrollOpacity5 }}>
            발버둥치는 아기와 같으니,
          </H5>

          <Img
            src={Regulation6}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity6,
              // scale: imageScale,
            }}
          />

          <H6 style={{ color: color6, opacity: scrollOpacity6 }}>
            기록하고 정리하며 알아가자!
          </H6>

          <EndImg
            src={Regulation7}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity7,
            }}
          />
          <H7 style={{ color: color7, opacity: scrollOpacity7 }}>
            아침과 함께 감정만 피어난 내가 될 수 있으니.
          </H7>
        </ImageBox>
      </Page>
    </>
  );
}
