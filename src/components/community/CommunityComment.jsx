import React, { useState } from 'react';
import {
  CommunityDetailCommentHeader,
  Container,
  CommunityDetailFirstCommentBox,
  CommunityDetailFirstComment,
  CommunityDetailSecondCommentBox,
  CommunityLike,
  CommunityDetailRecomment,
  Footer,
  FooterLeft,
} from '../../pages/CommunityStyles';
import {
  CommumnityDetailHeaderSub,
  CommunityDetailBox,
  CommunityDetailCnt,
  CommunityDetailContent,
  UserImage,
  UserName,
} from '../../pages/CommunityStyles';
import { GoThumbsup } from 'react-icons/go';
import { Break } from '../../pages/styles/commonStyles';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { HiPaperAirplane } from 'react-icons/hi2';
import { useQuery } from '@tanstack/react-query';
import { getCommunityComment } from '../../apis/communityAxios';
import CommunityCommentCreate from './CommunityCommentCreate';

const CommunityComent = ({ communityId }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['community', communityId],
    queryFn: () =>
      getCommunityComment(
        communityId,
        isAsc,
        page,
      ),
  });
  // data가 undefined인 경우를 처리하기 위해 추가
  const commentList = data?.data?.content || [];

  return (
    <div>
      <Container>
        <CommunityDetailCommentHeader>
          <div>댓글 {commentList.length}</div>
          <div>등록순 &nbsp; 최신순</div>
        </CommunityDetailCommentHeader>

        {commentList.length === 0 ? (
          <div>댓글이 없습니다.</div>
        ) : (
          commentList.map((comment, index) => (
            <div key={index}>
              <CommunityDetailFirstCommentBox>
                <CommunityDetailBox>
                  <UserImage />
                  <CommumnityDetailHeaderSub>
                    <UserName>
                      {comment.nickname}
                    </UserName>
                    <CommunityDetailCnt>
                      {comment.date}
                    </CommunityDetailCnt>
                  </CommumnityDetailHeaderSub>
                </CommunityDetailBox>
                <CommunityDetailFirstComment>
                  <CommunityDetailContent>
                    {comment.commentContent}
                  </CommunityDetailContent>
                  <CommunityLike>
                    <div>
                      <GoThumbsup /> 좋아요
                    </div>
                  </CommunityLike>
                </CommunityDetailFirstComment>
              </CommunityDetailFirstCommentBox>
              <CommunityDetailRecomment>
                <CommunityCommentCreate
                  communityId={communityId}
                  commentId
                />
              </CommunityDetailRecomment>
              {/* 대댓글 리스트 렌더링 */}
              {comment.childComments &&
                comment.childComments.map(
                  (childComment, childIndex) => (
                    <CommunityDetailSecondCommentBox
                      key={childIndex}
                    >
                      <CommunityDetailBox>
                        <UserImage />
                        <CommumnityDetailHeaderSub>
                          <UserName>
                            {
                              childComment.nickname
                            }
                          </UserName>
                          <CommunityDetailCnt>
                            {childComment.date}
                          </CommunityDetailCnt>
                        </CommumnityDetailHeaderSub>
                      </CommunityDetailBox>
                      <CommunityDetailFirstComment>
                        <CommunityDetailContent>
                          {
                            childComment.commentContent
                          }
                        </CommunityDetailContent>
                        <CommunityLike>
                          <div>
                            <GoThumbsup /> 좋아요
                          </div>
                        </CommunityLike>
                      </CommunityDetailFirstComment>
                    </CommunityDetailSecondCommentBox>
                  ),
                )}
            </div>
          ))
        )}
      </Container>
      <Break />
      <CommunityCommentCreate
        communityId={communityId}
      />
    </div>
  );
};

export default CommunityComent;
