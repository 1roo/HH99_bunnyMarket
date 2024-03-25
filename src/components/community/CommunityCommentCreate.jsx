import React, { useState } from 'react';
import {
  Container,
  Footer,
  FooterLeft,
} from '../../pages/CommunityStyles';
import { AiOutlinePicture } from 'react-icons/ai';
import { HiPaperAirplane } from 'react-icons/hi2';
import { BiMap } from 'react-icons/bi';
import { useMutation } from '@tanstack/react-query';
import { createCommunityComment } from '../../apis/communityAxios';
import { useNavigate } from 'react-router-dom';

const CommunityCommentCreate = ({
  communityId,
}) => {
  const navigate = useNavigate();
  const [commentContent, setCommentContent] =
    useState('');
  const [parentCommentId, setParentCommetId] =
    useState(null);

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const newCommentValue = {
    communityId,
    parentCommentId,
    commentContent,
  };

  const communityCreateCommentMutation =
    useMutation({
      mutationFn: createCommunityComment,
      onSuccess: () => {
        // 댓글 작성 후 입력창 초기화
        setCommentContent('');
        // 성공적으로 작성됐다는 메시지 등을 추가할 수도 있습니다.
        alert(
          '댓글이 성공적으로 작성되었습니다.',
        );
        navigate(
          `/communityDetail/${communityId}`,
        );
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const handleSubmitComment = (e) => {
    e.preventDefault();
    communityCreateCommentMutation.mutate({
      newCommentValue,
    });
  };

  return (
    <>
      <Container>
        <Footer>
          <p> 댓글</p>
          <input
            placeholder="댓글을 입력해주세요."
            onChange={handleCommentContentChange}
            value={commentContent}
          />
          <form>
            <div>
              <HiPaperAirplane
                color="gray"
                onClick={handleSubmitComment}
              />
            </div>
          </form>
        </Footer>
      </Container>
    </>
  );
};

export default CommunityCommentCreate;
