// 문의글 상세 페이지

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api_token/api_token.jsx';
import * as D from '../../styles/ContactStyles/PostDetailStyled.jsx';

export default function PostDetail() {
  const { postid } = useParams(); // URL에서 postid를 가져옴
  const [post, setPost] = useState(null); // 게시글 데이터 상태
  const navigate = useNavigate();

  const API_ENDPOINT = `/board/postdetail/${postid}/`;

  useEffect(() => {
    // 게시글 데이터 로드
    const fetchPostDetail = async () => {
      try {
        const response = await api.get(API_ENDPOINT);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetail();
  }, [API_ENDPOINT]);

  // 문의글 수정
  const handleEdit = () => {
    navigate(`/edit/${postid}`);
  };

  // 문의글 삭제
  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await api.delete(API_ENDPOINT);
        alert('삭제가 완료되었습니다.');
        navigate('/contact');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  if (!post) {
    return <D.Loading>Loading...</D.Loading>; // 데이터 로드 중 표시 - 없으면 title 읽을 때 null 에러
  }

  return (
    <D.Body>
      <D.Form>
        <D.Title>{post.title}</D.Title>
        <D.BodyText>
          <D.Date>작성일: {post.created_at}</D.Date>
          {post.body}
        </D.BodyText>
      </D.Form>
      <D.ButtonContainer>
        <D.Button onClick={handleEdit}>수정하기</D.Button>
        <D.Button onClick={handleDelete}>삭제하기</D.Button>
      </D.ButtonContainer>
    </D.Body>
  );
}
