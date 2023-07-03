import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div``;

const Item = styled(NavLink)`
  margin: 30px;
`;
export function Navbar() {
  return (
    <>
      <Home>
        <Item to="/"></Item>
        <Item to="/Regulation">감정 정리?</Item>
        <Item to="/Introduction">감정 소개!</Item>
        <Item to="/Processing">감정 정리!</Item>
        <Item to="/Warehouse">감정 창고!</Item>
      </Home>
      <Outlet />
    </>
  );
}
