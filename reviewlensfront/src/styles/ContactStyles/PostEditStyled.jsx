import styled from 'styled-components';

export const Body = styled.div`
  margin-top: 150px;
  padding-bottom: 160px;
  width: 100vw;
  box-sizing: border-box;
  text-align: center;
`;

export const Form = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const TitleEdit = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 25px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #6161616c;

  &:focus {
    color: black;
  }
`;

export const TextEdit = styled.input`
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;
  height: 200px;
  padding: 25px;
  font-size: 16px;
  text-align: left;
  border: none;
  color: #6161616c;

  &:focus {
    color: black;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Btn = styled.button`
  padding: 10px 12px;
  margin-top: 30px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dbdbdb;
  }
`;
