import styled from 'styled-components';

export const Body = styled.div`
  margin-top: 200px;
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

export const TitleContainer = styled.div`
  max-width: 600px;
  min-height: 300px;
  padding: 15px;
  font-size: 16px;
  text-align: left;
`;

export const Title = styled.div`
  padding: 10px;
  margin: 10px auto;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Date = styled.div`
  font-size: 13px;
  color: #777;
  margin-bottom: 10px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.action === 'edit' ? 'blue' : 'red')};
  margin: 0 4px;
  padding: 2px 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const BodyText = styled.div`
  margin: 25px 10px;
`;

export const Loading = styled.div`
  font-size: 18px;
  color: #777;
  text-align: center;
  margin-top: 50px;
`;
