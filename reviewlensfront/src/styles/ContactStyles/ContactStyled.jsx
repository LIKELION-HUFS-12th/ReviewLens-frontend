import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Body = styled.div`
  margin-top: 50px;
  padding-bottom: 160px;
  width: 100vw;
  box-sizing: border-box;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 40px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  margin: 0 10%;

  span {
    // 밑의 ListItem과 정렬하기 위해 사용
    flex: 1; // 동일한 너비 할당
    text-align: center;
  }
`;

export const List = styled.div`
  margin: 0 10%;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-bottom: 1px solid #ddd;

  span {
    flex: 1;
    text-align: center;
    font-size: 15px;
  }
`;

export const TitleSpan = styled.span`
  flex: 1;
  text-align: center;
  text-decoration: none; // 기본 밑줄 제거
  color: black;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

export const Button = styled.button`
  width: 20%;
  margin: 40px auto 0;
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #a4d8f3;
  }
`;
