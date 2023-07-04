import styled from "styled-components";
import Regulation1 from "../img/Regulation1.jpg";
import Regulation2 from "../img/Regulation2.png";
import Regulation3 from "../img/Regulation3.jpg";
import Regulation4 from "../img/Regulation4.jpg";
import Regulation5 from "../img/Regulation5.jpg";
import Regulation6 from "../img/Regulation6.png";
import Regulation7 from "../img/Regulation7.png";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
const Page = styled.div`
  width: 100vw;
  background-color: black;
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

const ScrollBar1 = styled(motion.div)`
  width: 100px;
  height: 200px;
  background-color: white;
  position: fixed;
  top: 270px;
  left: 200px;
`;

const ScrollBar2 = styled(motion.div)`
  width: 100px;
  height: 200px;
  background-color: white;
  position: fixed;
  top: 200px;
  right: 300px;
`;

const H1 = styled.h1`
  display: inline-block;
  color: white;
`;

export function Regulation() {
  // 뷰포트 스크롤 위치를 추적하는 훅
  const { scrollYProgress } = useScroll();
  // 스크롤 위치에 따라 이미지의 투명도를 조정하는 애니메이션 값 생성
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  // 스크롤 위치에 따라 이미지의 크기를 조정하는 애니메이션 값 생성
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 0.3]);
  const textColor = useTransform(scrollYProgress, [0, 1], ["white", "red"]);
  const height = useTransform(scrollYProgress, [0, 0.09], [0, 280]);
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
          <ScrollBar1 style={{ height: height, opacity: textOpacity1 }}>
            <H1>아침과 함께 우리의 감정도 눈을 뜬다.</H1>
          </ScrollBar1>

          <Img
            src={Regulation1}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <ScrollBar2>
            <H1>아침과 함께 우리의 감정도 눈을 뜬다.</H1>
          </ScrollBar2>

          <Img
            src={Regulation2}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />

          <Img
            src={Regulation4}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />
          <Img
            src={Regulation5}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />
          <Img
            src={Regulation6}
            alt="Emotion Regulation Image"
            style={{
              opacity: imageOpacity,
              scale: imageScale,
            }}
          />
          <Img
            src={Regulation7}
            alt="Emotion Regulation Image"
            style={{
              scale: 2,
            }}
          />
        </ImageBox>
      </Page>
    </>
  );
}
