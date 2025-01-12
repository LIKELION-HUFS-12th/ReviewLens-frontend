import styled from 'styled-components';

export const Body = styled.div`
  margin-top: 150px;
  padding-bottom: 160px;
  width: 100vw;
  box-sizing: border-box;
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
`;

export const BodyText = styled.div`
  width: 100%;
  max-width: 600px;
  height: 200px;
  padding: 15px;
  font-size: 16px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;
  outline: none;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  font-size: 16px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #a4d8f3;
  }

  &:active {
    background-color: #a4d8f3;
  }
`;

export const Loading = styled.div`
  font-size: 18px;
  color: #777;
  text-align: center;
  margin-top: 50px;
`;
