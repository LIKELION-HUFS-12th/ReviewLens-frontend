// 문의글 전체 목록 페이지

import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../api_token/api_token.jsx';
import { useNavigate } from 'react-router-dom';
import * as C from '../../styles/ContactStyles/ContactStyled.jsx';

export default function Contact() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // 게시글 목록 가져오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/board/postlist/');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // 제목 클릭 시 해당 글의 상세 페이지로 이동
  const handleTitleClick = (id) => {
    navigate(`/postdetail/${id}`);
  };

  // 버튼 클릭 시 문의글 작성 페이지로 이동
  const handleBtnClick = () => {
    navigate(`/posting`);
  };

  return (
    <C.Body>
      <C.Title>Contact Us</C.Title>
      <C.ListHeader>
        <span>제목</span>
        <span>글쓴이</span>
        <span>작성일</span>
      </C.ListHeader>
      <C.List>
        {posts.map((post) => (
          <C.ListItem key={post.id}>
            <C.TitleSpan
              onClick={() => handleTitleClick(post.id)} // 제목 클릭 시 상세 페이지로 이동.
            >
              {post.title}
            </C.TitleSpan>
            <span>{post.user}</span>
            <span>{post.created_at}</span>
          </C.ListItem>
        ))}
      </C.List>
      <C.Button onClick={handleBtnClick}>문의글 작성하기</C.Button>
    </C.Body>
  );
}
