import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleButtonStyled = styled(motion.button)`
  position: fixed;
  top: 10%;
  left: 94%;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 8px 16px;
  border: 2px solid ${(props) => props.theme.textColor};
  z-index: 2;
  cursor: pointer;
  &:hover {
    border-style: dashed;
  }
`;

const ToggleButtonAnimation = {
  start: { opacity: 0, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: { type: "spring", delay: 1.5 },
  },
};

function ToggleButton({ toggleTheme, children }) {
  return (
    <ToggleButtonStyled
      variants={ToggleButtonAnimation}
      initial="start"
      animate="end"
      onClick={toggleTheme}
    >
      {children}
    </ToggleButtonStyled>
  );
}

export default ToggleButton;
