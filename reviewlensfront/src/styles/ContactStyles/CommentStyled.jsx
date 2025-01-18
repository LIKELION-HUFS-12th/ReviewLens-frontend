// PostDetailStyled.jsx 참고

import styled from 'styled-components';

// 답변 리스트와 답변 작성 전체 container
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
`;

// 답변 작성
export const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 500px;
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

export const SubmitBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

// 답변 리스트
export const CommentList = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// 각각 답변
export const CommentItem = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 15px;
  font-size: 16px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  resize: none;
  outline: none;

  &:last-child {
    border-bottom: none; /* 마지막 댓글은 하단 경계 제거 */
  }
`;

// 답변 헤더 (글쓴이/날짜/삭제 버튼)
export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 답변 디테일 (글쓴이/날짜)
export const CommentDetail = styled.span`
  font-size: 13px;
  color: #777;
  margin: 10px;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// 답변 내용
export const CommentText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  margin-left: 10px;
`;
