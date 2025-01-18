// 댓글 작성 페이지

import React, { useState, useEffect } from 'react';
import api from '../../api/api_token.jsx';
import * as C from '../../styles/ContactStyles/CommentStyled.jsx';

export default function Comment({
  postId,
  comments,
  onCommentAdded,
  onCommentDeleted,
}) {
  const [newComment, setNewComment] = useState('');

  const API_ENDPOINT = `/board/comment/${postId}/`;

  // 댓글 작성
  const handleCommentSubmit = async () => {
    if (!newComment) {
      alert('댓글을 입력하세요.');
      return;
    }

    try {
      const response = await api.post(API_ENDPOINT, { comment: newComment });
      if (response.status === 201) {
        console.log('API Response:', response.data); // API 응답 확인
        // 댓글 데이터는 response.data.comments 배열에 있음
        const newCommentData = response.data.comments.slice(-1)[0]; // 마지막 댓글 추출

        // 부모 컴포넌트에 전달
        onCommentAdded(newCommentData);
        setNewComment(''); // 입력창 초기화
        alert('댓글이 작성되었습니다.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('댓글 작성 중 오류가 발생했습니다.');
    }
  };

  // 댓글 삭제
  const handleCommentDelete = async (commentId) => {
    const DELETE_ENDPOINT = `/board/comment/${postId}/${commentId}/`;
    if (window.confirm('정말 댓글을 삭제하시겠습니까?')) {
      try {
        await api.delete(DELETE_ENDPOINT);
        onCommentDeleted(commentId); // 부모 컴포넌트에서 삭제된 댓글 반영
        alert('댓글이 삭제되었습니다.');
      } catch (error) {
        console.error('Error deleting comment:', error);
        alert('댓글 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <C.Body>
      <C.InputContainer>
        <C.Input
          type="text"
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <C.SubmitBtn onClick={handleCommentSubmit}>등록</C.SubmitBtn>
      </C.InputContainer>
      <C.CommentList>
        {comments.map((comment) => (
          <C.CommentItem key={comment.id}>
            <C.CommentHeader>
              <div>
                <C.CommentDetail>글쓴이: {comment.user}</C.CommentDetail>
                <C.CommentDetail>작성일: {comment.created_at}</C.CommentDetail>
              </div>
              <C.DeleteBtn onClick={() => handleCommentDelete(comment.id)}>
                삭제
              </C.DeleteBtn>
            </C.CommentHeader>
            <C.CommentText>{comment.comment}</C.CommentText>
          </C.CommentItem>
        ))}
      </C.CommentList>
    </C.Body>
  );
}
