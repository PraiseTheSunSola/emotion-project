import styled from "styled-components";
import { motion } from "framer-motion";
// import { useState } from "react";
// import { Link } from "react-router-dom";

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  /* background-color: rgba(0, 0, 128, 0.1); */
`;

const SvgBox = styled(motion.svg)`
  width: 50%;
  height: 50%;
  border-radius: 30px;
  background: #222222;
  stroke: white;
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: rgba(255, 205, 25, 0);
`;

const Gieok = styled(motion.path)``;

const Jieut1 = styled(motion.path)``;

const Jieut2 = styled(motion.path)``;

const Rieul = styled(motion.path)``;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export function Homepage() {
  return (
    <>
      <Page>
        <SvgBox viewBox="-10 -20 900 500" initial="hidden" animate="visible">
          <Gieok d="M 10 100 H150 V350" variants={draw} custom={1} />

          <Jieut1 d="M 200 100 H 350  L 240 350" variants={draw} custom={2} />
          <Jieut1 d="M 310 200, 380 350 " variants={draw} custom={2.5} />

          <Jieut2 d="M 450 100, H 600  L 450 350" variants={draw} custom={3} />
          <Jieut2 d="M 540 200, 590 350 " variants={draw} custom={3.5} />

          <Rieul d="M 700 100, 850 100" variants={draw} custom={4} />
          <Rieul d="M 850 100, L 850 200" variants={draw} custom={4.5} />
          <Rieul
            d="M 850 200, H 700, V 350, H 850"
            variants={draw}
            custom={5}
          />
        </SvgBox>
      </Page>
    </>
  );
}
