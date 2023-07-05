import styled from "styled-components";
import Regulation1 from "../img/Regulation1.jpg";
import Regulation2 from "../img/Regulation2.png";
import Regulation3 from "../img/Regulation3.jpg";
import Regulation4 from "../img/Regulation4.jpg";
import Regulation5 from "../img/Regulation5.jpg";
import Regulation6 from "../img/Regulation6.png";
import Regulation7 from "../img/Regulation7.png";
import { motion, useScroll, useTransform } from "framer-motion";
const Page = styled.div`
  width: 100vw;
  background-color: black;
  overflow: hidden;
  overflow-x: hidden;
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

const EndImg = styled.img`
  display: inline-block;
  width: 600px;
  margin-top: 500px;
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
  width: 100px;
  height: 200px;
  position: fixed;
  top: 200px;
  right: 300px;
  color: white;
`;

const H3 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 100px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
  color: white;
`;

const H4 = styled(motion.h1)`
  // 오른쪽
  display: inline-block;
  width: 100px;
  height: 200px;
  position: fixed;
  top: 200px;
  right: 300px;
  color: white;
`;

const H5 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 100px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
  color: white;
`;

const H6 = styled(motion.h1)`
  // 오른쪽
  display: inline-block;
  width: 100px;
  height: 200px;
  position: fixed;
  top: 200px;
  right: 300px;
  color: white;
`;

const H7 = styled(motion.h1)`
  //왼쪽
  display: inline-block;
  width: 100px;
  height: 200px;
  position: fixed;
  top: 270px;
  left: 200px;
  color: white;
`;

export function Regulation() {
  const { scrollYProgress } = useScroll();
  // 이미지 투명도
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
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
    [0.89, 0.9, 0.98, 1.5],
    [0, 0.5, 1, 0]
  );

  // 텍스트 길이
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 0.3]);
  const color1 = useTransform(
    scrollYProgress,
    [0, 0.02, 0.09],
    ["white", "white", "green"]
  );
  // const height2 = useTransform(scrollYProgress, [0.15, 0.29], [0, 280]);
  // const height3 = useTransform(scrollYProgress, [0.31, 0.45], [0, 280]);
  // const height4 = useTransform(scrollYProgress, [0.31, 0.45], [0, 280]);
  return (
    <>
      <Page>
        <ImageBox>
          <Img
            src={Regulation3}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <H1 style={{ color: color1, opacity: scrollOpacity1 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H1>

          <Img
            src={Regulation1}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <H2 style={{ opacity: scrollOpacity2 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H2>

          <Img
            src={Regulation2}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <H3 style={{ opacity: scrollOpacity3 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H3>

          <Img
            src={Regulation4}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <H4 style={{ opacity: scrollOpacity4 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H4>

          <Img
            src={Regulation5}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <H5 style={{ opacity: scrollOpacity5 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H5>

          <Img
            src={Regulation6}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <H6 style={{ opacity: scrollOpacity6 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H6>

          <EndImg
            src={Regulation7}
            alt="Emotion Regulation Image"
            style={{
              scale: 1,
            }}
          />
          <H7 style={{ opacity: scrollOpacity7, marginBottom: 0 }}>
            아침과 함께 우리의 감정도 눈을 뜬다.
          </H7>
        </ImageBox>
      </Page>
    </>
  );
}
