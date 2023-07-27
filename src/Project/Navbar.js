import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
  margin-bottom: 30px;
`;

const Page = styled(NavLink)`
  margin: 30px;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    text-shadow: 1px 17px gray;
  }
  &.active {
    color: red;
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
