import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Rimg from '../assets/R.png';

const StyledNavLink = styled(NavLink)`
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
    /*color: white;*/
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

  &.login {
    border: 1px solid black;
    border-radius: 30px;
    padding: 0 20px;
    align-content: center;
    font-weight: 800;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3); /* 위쪽 방향 그림자 */
  }
`;
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 10px;
  /*background-color: var(--primary-color);*/
  background-color: #f8f8f8;
  position: fixed;
  top: 40px;
  left: 0;
  box-sizing: border-box;
  border-bottom: 0.08px solid;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
`;

const Navpart2 = styled.div`
  display: flex;
  padding: 10px;
  gap: 1px;
`;
const Blank = styled.div`
  display: flex;
  height: 40px;
  width: 100vw;
  font-size: 14px;
  /*background-color: white;*/
  /*background-color: var(--primary-color);*/
  background-color: #81baf9;
  align-items: center;
  justify-content: center;
  top: 0px;
  position: fixed;
  z-index: 1000;
`;

export default function Navbar() {
  return (
    <>
      <nav>
        <Blank>
          리뷰의 감정을 읽고, 인사이트를 발견하는 스마트 분석 솔루션, ReviewLens
        </Blank>
        <NavHeader>
          <StyledNavLink
            to="/"
            end
            className="main"
            style={{ justifyContent: 'center' }}
          >
            <img
              src={Rimg}
              alt="R"
              style={{ height: '70px', alignItems: 'center' }}
            />
            REVIEW LENS
          </StyledNavLink>

          <Navpart2>
            <StyledNavLink to="/contact" className="contact">
              문의하기
            </StyledNavLink>

            <StyledNavLink to="/login" className="login">
              로그인
            </StyledNavLink>
          </Navpart2>
        </NavHeader>
      </nav>
    </>
  );
}
