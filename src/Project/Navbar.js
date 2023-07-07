import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div``;

const Page = styled(NavLink)`
  margin: 30px;
`;
export function Navbar() {
  return (
    <>
      <Home>
        <Page to="/"></Page>
        <Page to="/Regulation">감정 정리</Page>
        <Page to="/Introduction">감정 종류</Page>
        <Page to="/Processing">정리 하기</Page>
        <Page to="/Warehouse">감정 창고</Page>
      </Home>
      <Outlet />
    </>
  );
}
