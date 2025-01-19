import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  top: 0;
  padding-bottom: 160px;
  padding-left: 30px;
  /*background-color: var(--primary-color);*/
  background: linear-gradient(180deg, #ebf4ff 0%, #ffffff 100%);
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const ContentBox = styled.div`
  display: flex;
  margin: auto;
  margin-top: 120px;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: clamp(450px, 40vh, 700px); /* 최소 500px, 기본 40vh, 최대 700px */
  border: 0.5px solid shadow;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* 흐림 효과 그림자 */
  border-radius: 10px;
  /*background-color: var(--primary-color);*/
  background-color: white;
`;

export const ContentBox2 = styled.div`
  display: flex;
  margin: auto;
  margin-top: clamp(80px, 6vh, 100px);
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: clamp(650px, 60vh, 1100px); /* 최소 700px, 기본 60vh, 최대 1100px */
  border: 0.5px solid shadow;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* 흐림 효과 그림자 */
  border-radius: 10px;
  /*background-color: var(--primary-color);*/
  background-color: white;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  padding: 5px;
  padding-bottom: 10px;
  margin: 30px;
  margin-top: 32px;
  color: black;
  display: flex; /* Flexbox 활성화 */
  flex-direction: row; /* 세로 방향 정렬 */
  align-items: center; /* 가로 축 가운데 정렬 */
  justify-content: center; /* 세로 축 가운데 정렬 */

  &.active {
    /*font-weight: bold;*/
  }

  &:hover {
    color: var(--primary-color);
  }

  ${({ isActive }) =>
    isActive &&
    `
      font-weight: 800;
      color: var(--primary-color);
    `}

  &.main {
    font-size: 35px;
  }

  &.login,
  &.logout {
    border: 1px solid black;
    border-radius: 30px;
    padding: 0 20px;
    align-content: center;
    font-weight: 800;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3); /* 위쪽 방향 그림자 */
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  padding: 10px;
  background-color: #f8f8f8;
  position: fixed;
  top: 40px;
  left: 0;
  box-sizing: border-box;
  border-bottom: 0.08px solid;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const Navpart2 = styled.div`
  display: flex;
  padding: 10px;
  gap: 1px;
`;

export const Blank = styled.div`
  display: flex;
  height: 40px;
  width: 100vw;
  font-size: 16px;
  background-color: #81baf9;
  align-items: center;
  justify-content: center;
  top: 0px;
  position: fixed;
  z-index: 1000;
`;
