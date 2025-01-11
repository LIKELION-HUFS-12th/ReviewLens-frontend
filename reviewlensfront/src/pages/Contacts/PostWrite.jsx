// 문의글 작성 페이지

import React from 'react';
import { useState } from 'react';
import api from '../../api/api_token';
import * as W from '../../styles/ContactStyles/PostWriteStyled';
import { useNavigate } from 'react-router-dom';

export default function PostWrite() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const API_ENDPOINT = '/board/posting/';

  const handleSubmit = async () => {
    if (!title || !body) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    try {
      const response = await api.post(API_ENDPOINT, {
        title: title,
        body: body,
      });

      console.log('API 응답 데이터:', response.data);

      if (response.status === 201) {
        alert('문의글이 작성되었습니다.');
        setTitle('');
        setBody('');
        navigate(`/postdetail/${response.data.id}`);
      }
    } catch (error) {
      console.error('문의글 작성 중 오류 발생:', error);
      alert('문의글 작성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <W.Body>
      <W.Header>문의글 작성</W.Header>
      <W.Form>
        <W.Title
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <W.BodyText
          placeholder="내용을 입력해주세요"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </W.Form>
      <W.Button onClick={handleSubmit}>작성 완료</W.Button>
    </W.Body>
  );
}
