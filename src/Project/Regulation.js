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

const Title = styled(motion.title)`
  display: inline-block;
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

const ScrollBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 1903;
  height: 10px;
  transform-origin: left;
`;

const ProgressBar = styled(ScrollBar)`
  background-color: #ff0055;
`;

const Page = styled(motion.div)`
  width: 100vw;
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

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled(motion.img)`
  display: inline-block;
  width: 600px;
  margin-top: 300px;
  margin-bottom: 500px;
`;

const EndImg = styled(motion.img)`
  display: inline-block;
  width: 600px;
  margin-top: 500px;
  margin-bottom: 50px;
`;

const H = styled(motion.h1)`
  display: inline-block;
  position: fixed;
`;

const H1 = styled(H)`
  //왼쪽
  top: 270px;
  left: 200px;
`;

const H2 = styled(H)`
  // 오른쪽

  width: 310px;
  height: 200px;
  top: 200px;
  right: 300px;
  color: white;
`;

const H3 = styled(H)`
  //왼쪽

  width: 300px;
  height: 200px;
  top: 270px;
  left: 200px;
  color: white;
`;

const H4 = styled(H)`
  // 오른쪽

  width: 250px;
  height: 200px;
  top: 200px;
  right: 300px;
  color: white;
`;

const H5 = styled(H)`
  //왼쪽

  /* width: 300px; */
  /* height: 200px; */
  top: 270px;
  left: 200px;
  color: white;
`;

const H6 = styled(H)`
  // 오른쪽

  width: 200px;
  height: 200px;
  top: 200px;
  right: 300px;
  color: white;
`;

const H7 = styled(H)`
  //왼쪽
  width: 280px;
  height: 200px;
  top: 270px;
  left: 200px;
  color: white;
`;

// ------------------------------------------- 버튼

const MoveTopBottomButtonBox = styled(motion.div)`
  position: relative;
  position: fixed;
  top: 50%;
  right: 10px;
  width: 50px;
  height: 250px;
  /* background-color: red; */
`;

const MoveTopBottomButton = styled(motion.button)`
  position: absolute;
  width: 50px;
  height: 50px;
  transform-origin: center center;
  border: 1px solid black;
  background-color: white;
`;

const Buttons = styled(motion.div)`
  position: absolute;
  top: 30%;
`;

const MovePageTop = styled(motion.button)`
  width: 50px;
  height: 50px;
`;

const MovePageBottom = styled(motion.button)`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MoveTop = {
  start: { opacity: 0, scale: 0 },
  end: { opacity: 1, scale: 1, rotateZ: 0, transition: { type: "spring" } },
  exit: { opacity: 0, scale: 0, rotateZ: 0 },
};

const MoveBottom = {
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

  const ClickMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ClickMoveBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

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

  const scrollX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Title variants={PageMotion} initial="start" animate="end">
        I N T R O
      </Title>
      <Page variants={PageMotion} initial="start" animate="end">
        <ProgressBar style={{ scaleX: scrollX }} />
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
            수많은 감정들은 <br />
            우리와 함께합니다.
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
            남에게 들키지 않기 위해 항상 노력하죠.
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
            그래도 감정의 소용돌이에 휘말리는건 어쩔수 없습니다.
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
            억지로 지우려고 해도 쉽게 사라지지 않고,
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
            휘몰아치는 파도와 같이 <br />
            몰아치는 녀석을
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
            받아들이고 <br />
            관리하여 <br />
            <br />내 것으로 <br />
            만들어야 합니다.
          </H6>

          <EndImg
            src={Regulation7}
            alt="Emotion Regulation Image"
            style={{
              opacity: scrollOpacity7,
            }}
          />
          <H7 style={{ color: color7, opacity: scrollOpacity7 }}>
            그렇지 않으면 <br />
            감정에 지배된 <br />
            동물이 될 테니까요.
          </H7>
        </ImageBox>
      </Page>

      <MoveTopBottomButtonBox
        variants={PageMotion}
        initial="start"
        animate="end"
      >
        <MoveTopBottomButton onClick={clickButton}>클릭</MoveTopBottomButton>
        <AnimatePresence>
          {show ? (
            <Buttons>
              <MovePageTop
                variants={MoveTop}
                initial="start"
                animate="end"
                exit="exit"
                onClick={() => ClickMoveTop()}
              >
                맨 위
              </MovePageTop>

              <MovePageBottom
                variants={MoveBottom}
                initial="start"
                animate="end"
                exit="exit"
                onClick={() => ClickMoveBottom()}
              >
                맨 아래
              </MovePageBottom>
            </Buttons>
          ) : null}
        </AnimatePresence>
      </MoveTopBottomButtonBox>
    </>
  );
}
