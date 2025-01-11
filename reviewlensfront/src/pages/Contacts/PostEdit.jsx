// 문의글 수정 페이지

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api_token.jsx';
import axios from 'axios';
import * as D from '../../styles/ContactStyles/PostDetailStyled.jsx';
import * as E from '../../styles/ContactStyles/PostEditStyled.jsx';

export default function PostEdit() {
  const { postid } = useParams(); // url에서 postid 가져옴.
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', body: '' });

  const API_ENDPOINT = `/board/postdetail/${postid}/`; // 전체 api url + 끝 경로.

  // 게시글 데이터 로드
  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await api.get(API_ENDPOINT);
        setPost({ title: response.data.title, body: response.data.body });
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetail();
  }, [API_ENDPOINT]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await api.patch(API_ENDPOINT, {
        title: post.title,
        body: post.body,
      });

      alert('수정이 완료되었습니다.');
      navigate(`/postdetail/${postid}`); // 수정 후 상세 페이지로 이동.
    } catch (error) {
      console.error('Error saving post:', error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <D.Body>
      <D.Form>
        <E.TitleEdit
          type="text"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          placeholder="제목을 입력하세요"
        />
        <E.TextEdit
          type="text"
          name="body"
          value={post.body}
          onChange={handleInputChange}
          placeholder="내용을 입력하세요"
        />
      </D.Form>
      <D.ButtonContainer>
        <D.Button onClick={handleSave}>저장하기</D.Button>
        <D.Button onClick={() => navigate(-1)}>취소</D.Button>
      </D.ButtonContainer>
    </D.Body>
  );
}
