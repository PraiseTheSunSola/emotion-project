import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  /* height: 50px; */
  z-index: 2;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Page = styled(NavLink)`
  margin: 30px;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    text-shadow: 1px 17px gray;
  }
  &.active {
    color: ${(props) => props.theme.activeColor};
  }
`;

export function Navbar() {
  return (
    <>
      <Home>
        <Page to="/"></Page>
        <Page to="/">Home</Page>
        <Page to="/Regulation">INTRO</Page>
        <Page to="/Introduction">TYPES</Page>
        <Page to="/Control">CONTROL</Page>
      </Home>
      <Outlet />
    </>
  );
}
