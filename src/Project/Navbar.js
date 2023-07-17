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
`;

export function Navbar() {
  return (
    <>
      <Home>
        <Page to="/"></Page>
        <Page to="/">Home</Page>
        <Page to="/Regulation">Intro</Page>
        <Page to="/Introduction">Types</Page>
        <Page to="/Control">Control</Page>
      </Home>
      <Outlet />
    </>
  );
}
