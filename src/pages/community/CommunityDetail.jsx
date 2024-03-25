import React, { useState } from 'react';
import {
  Header,
  CommunityDetailBox,
  CommumnityDetailHeaderSub,
  UserImage,
  UserName,
  Container,
  HeaderRight,
  CommunityDetailCnt,
  CommunityDetailTitle,
  CommunityDetailContent,
  CommunityDetailImage,
  CommunityDetailLikeBox,
  CommunityDetailLikeAndSave,
  CommunityCountBox,
  ModalContainer,
  ModalContent,
  ModalDeleteContainer,
  ModalDeleteContent,
  DeleteButton,
  CancelButton,
  ModalButtons,
} from '../CommunityStyles';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  Break,
  LightBreak,
} from '../../pages/styles/commonStyles';
import { FaRegEye } from 'react-icons/fa';
import { GoThumbsup } from 'react-icons/go';
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import {
  deleteCommunity,
  getCommunityComment,
  getCommunityDetail,
} from '../../apis/communityAxios';
import { CiMenuKebab } from 'react-icons/ci';
import { PiExport } from 'react-icons/pi';
import { GoBellFill } from 'react-icons/go';
import { MdArrowBackIos } from 'react-icons/md';
import CommunityComment from '../../components/community/CommunityComment';

const CommunityDetail = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  // const [isAsc, setIsAsc] = useState(true);
  // const [page, setPage] = useState(1);
  const param = useParams();
  const communityId = param.id;
  console.log(communityId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['community', communityId],
    queryFn: () =>
      getCommunityDetail(communityId),
    staleTime: 60 * 1000,
  });

  console.log(data);
  const detailList = data;

  const deleteCommunityContent = useMutation({
    mutationFn: deleteCommunity,
    onSuccess: async (data) => {
      console.log('삭제 성공 : ', data);
      setIsDeleteOpen(false);
      setIsOpen(!isOpen);
      navigate('/community');
    },
    onError: (error) => {
      console.log('삭제 실패 : ', error);
    },
  });

  // createdAt을 현재일로부터 몇일 전인지 계산하는 함수
  const calculateDaysAgo = (createdAt) => {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);

    const differenceInTime =
      currentDate.getTime() -
      createdAtDate.getTime();
    const differenceInDays =
      differenceInTime / (1000 * 3600 * 24);

    return Math.round(differenceInDays);
  };

  const handleGoBackClick = () => {
    navigate('/community');
  };
  // 모달 토글 함수
  const handleModalBottomClick = () => {
    setIsOpen(!isOpen); // 모달 상태를 반전시킵니다.
  };

  // 게시글 삭제 모달 오픈
  const handleOpenDeleteModalClick = () => {
    console.log(isDeleteOpen);
    setIsDeleteOpen(true);
  };
  // 취소 버튼
  const handleCancelClick = () => {
    setIsDeleteOpen(false);
    setIsOpen(!isOpen);
  };
  // 삭제 버튼
  const handleDeleteClick = () => {
    // console.log(id);
    deleteCommunityContent.mutate(communityId);
  };

  const handleUpdateClick = () => {
    console.log(communityId);
    navigate(`/communityUpdate/${communityId}`);
  };

  if (isLoading) {
    return <div>is Loding...</div>;
  } else if (isError) {
    return (
      <div> Error occured during fetching...</div>
    );
  }
  return (
    <>
      <Header>
        <button onClick={handleGoBackClick}>
          {' '}
          <MdArrowBackIos size={20} />{' '}
        </button>
        <HeaderRight>
          <GoBellFill size={20} />{' '}
          <PiExport size={20} />
          <button
            onClick={handleModalBottomClick}
          >
            <CiMenuKebab />
          </button>
        </HeaderRight>
      </Header>
      <Container>
        <CommunityDetailBox>
          <UserImage />
          <CommumnityDetailHeaderSub>
            <UserName>
              {detailList.nickname}
            </UserName>
            <CommunityDetailCnt>
              인증 횟수 •{' '}
              {calculateDaysAgo(
                detailList.createdAt,
              )}
              일 전
            </CommunityDetailCnt>
          </CommumnityDetailHeaderSub>
        </CommunityDetailBox>
        <div>
          <CommunityDetailTitle>
            {detailList.title}
          </CommunityDetailTitle>
          <CommunityDetailContent>
            <div>{detailList.content}</div>
            {detailList.communityImageList.map(
              (image, index) => (
                <div key={index}>
                  {!image ? null : (
                    <CommunityDetailImage
                      src={image.url}
                      alt={`Image ${index}`}
                    />
                  )}
                </div>
              ),
            )}
            <CommunityCountBox>
              <FaRegEye /> &nbsp; 555명이 봤어요
            </CommunityCountBox>
            <CommunityDetailLikeBox>
              <CommunityDetailLikeAndSave>
                <GoThumbsup />
                공감하기
              </CommunityDetailLikeAndSave>
              <CommunityDetailLikeAndSave>
                저장
              </CommunityDetailLikeAndSave>
            </CommunityDetailLikeBox>
          </CommunityDetailContent>
        </div>
      </Container>
      <Break />
      <CommunityComment
        communityId={detailList.communityId}
      />

      {/* 모달 */}
      {/* 모달을 클릭하면 아래에서 위로 올라오는 모달 */}
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          {/* 모달 내용 */}
          <button
            onClick={() =>
              handleUpdateClick(
                detailList.communityImageList,
                detailList,
              )
            }
          >
            수정
          </button>
          <LightBreak />
          <button
            onClick={handleOpenDeleteModalClick}
          >
            삭제
          </button>
        </ModalContent>
      </ModalContainer>

      {/* 삭제 모달 */}
      {isDeleteOpen && (
        <ModalDeleteContainer>
          <ModalDeleteContent>
            <div>게시글을 삭제할까요?</div>
            <div>
              게시글을 삭제하면 모든 데이터가
              삭제되고 다시 볼 수 없어요.
            </div>
            <ModalButtons>
              <CancelButton
                onClick={handleCancelClick}
              >
                취소
              </CancelButton>
              <DeleteButton
                onClick={handleDeleteClick}
              >
                삭제
              </DeleteButton>
            </ModalButtons>
          </ModalDeleteContent>
        </ModalDeleteContainer>
      )}
    </>
  );
};

export default CommunityDetail;
