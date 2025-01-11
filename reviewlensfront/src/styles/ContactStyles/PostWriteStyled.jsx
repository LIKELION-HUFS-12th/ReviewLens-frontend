import styled from 'styled-components';

export const Body = styled.div`
  margin-top: 150px;
  padding-bottom: 160px;
  width: 100vw;
  box-sizing: border-box;
  text-align: center;
`;

export const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 40px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const BodyText = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 20%;
  max-width: 200px;
  margin-top: 30px;
  padding: 10px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #a4d8f3;
  }

  &:active {
    background-color: #a4d8f3;
  }
`;
