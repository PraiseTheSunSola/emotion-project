import styled from "styled-components";
import { AnimatePresence, motion,  useAnimate, stagger,} from "framer-motion";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const MenuBox = styled(motion.button)`
`;

const Menulist = styled(motion.ul)`
width: 200px;
border: 5px solid white;
`;

const ListButton = styled(motion.li)`
color: white;
`;

// ------------------------------------------- 버튼
const NavButtonCircle = styled(motion.div)`
  position: relative;
  position: fixed;
  z-index: 3;
  top: 50%;
  right: 10px;
  width: 50px;
  height: 250px;
`;
const NavButton = styled(motion.button)`
  position: absolute;
  width: 50px;
  height: 50px;
  transform-origin: center center;

  &:hover {
    cursor: pointer;
  }
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



export function Processing() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
      animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
  
      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)"
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5
        }
      );
  
      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" ,},
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0
        }
      );
    }, [isOpen]);
  
    return scope;
  }


  function clickButton() {
    setShow((appear) => !appear);
  }

  return (
    <>
      <Page>
      <nav className="menu" ref={scope}>
      <MenuBox
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </MenuBox>
      <Menulist
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)"
        }}
      >
       <ListButton> 1</ListButton>
       <ListButton> 1</ListButton>
       <ListButton> 1</ListButton>
       <ListButton> 1</ListButton>
       <ListButton> 1</ListButton>
        
       
      </Menulist>{" "}
    </nav>
      </Page>
      {/* ---------------------------------------------------------------------------- */}
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
                <StyledLink to="/Introduction">이전</StyledLink>
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
                <StyledLink to="/Warehouse">다음</StyledLink>
              </NextButton>
            </Buttons>
          ) : null}
        </AnimatePresence>
      </NavButtonCircle>
    </>
  );
}
