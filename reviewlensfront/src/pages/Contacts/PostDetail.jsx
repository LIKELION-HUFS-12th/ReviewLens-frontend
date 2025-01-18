// 문의글 상세 페이지

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api_token.jsx';
import Comment from './Comment.jsx';
import * as D from '../../styles/ContactStyles/PostDetailStyled.jsx';

export default function PostDetail() {
  const { postid } = useParams(); // URL에서 postid를 가져옴
  const [post, setPost] = useState(null); // 게시글 데이터 상태
  const [comments, setComments] = useState([]); // 댓글 상태 관리
  const navigate = useNavigate();

  const API_ENDPOINT_POST = `/board/postdetail/${postid}/`;
  const API_ENDPOINT_COMMENT = `/board/comment/${postid}/`;

  useEffect(() => {
    // 게시글, 댓글 데이터 로드
    const fetchPostDetail = async () => {
      try {
        const response = await api.get(API_ENDPOINT_POST);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await api.get(API_ENDPOINT_COMMENT);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPostDetail();
    fetchComments();
  }, [API_ENDPOINT_POST, API_ENDPOINT_COMMENT]);

  // 댓글 달기
  const handleCommentAdded = (newComment) => {
    console.log('New Comment Added:', newComment); // 새 댓글 데이터 확인
    setComments((prevComments) => [...prevComments, newComment]); // 새로운 댓글 추가
  };

  // 댓글 삭제
  const handleCommentDeleted = (deletedCommentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== deletedCommentId)
    );
  };

  // 문의글 수정
  const handleEdit = () => {
    navigate(`/edit/${postid}`);
  };

  // 문의글 삭제
  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await api.delete(API_ENDPOINT_POST);
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
        <D.TitleContainer>
          <D.Detail>
            <D.Date>작성일: {post.created_at}</D.Date>
            <D.BtnContainer>
              <D.Btn action="edit" onClick={handleEdit}>
                수정
              </D.Btn>
              <D.Btn action="delete" onClick={handleDelete}>
                삭제
              </D.Btn>
            </D.BtnContainer>
          </D.Detail>
          <D.Title>제목: {post.title}</D.Title>
          <D.BodyText>{post.body}</D.BodyText>
        </D.TitleContainer>
      </D.Form>
      <Comment
        postId={postid}
        comments={comments}
        onCommentAdded={handleCommentAdded}
        onCommentDeleted={handleCommentDeleted}
      />
    </D.Body>
  );
}
