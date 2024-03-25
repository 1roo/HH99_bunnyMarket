import React, {
  useEffect,
  useState,
} from 'react';
import {
  CommunityTitle,
  CommunityContent,
  CommunityImage,
  Container,
  CommunityBox,
  CommunitySubBox,
  CommunityContainer,
} from '../CommunityStyles';
import { useNavigate } from 'react-router-dom';
import { GoThumbsup } from 'react-icons/go';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import { getCommunityList } from '../../apis/communityAxios';
import Header from '../../components/layout/Header';

const CommunityList = () => {
  const navigate = useNavigate();
  const [isAsc, setIsAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [contentArray, setContentArray] =
    useState([]);

  const { data } = useQuery({
    queryKey: ['community', isAsc, page],
    queryFn: () => getCommunityList(isAsc, page),
  });
  console.log(data);
  useEffect(() => {
    if (data) {
      const pageNation = data.pageable;
      const contentArray = data.content;

      console.log(contentArray[0].createdAt);
      setContentArray(contentArray);
    }
  }, [data]);
  console.log(contentArray);

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

  const handleGoToDetailClick = (id) => {
    console.log(id);
    navigate(`/communityDetail/${id}`);
  };

  return (
    <>
      <Header />
      <Container>
        {contentArray &&
        contentArray.length > 0 ? (
          contentArray.map((item) => (
            <CommunityContainer
              key={item.communityId}
              onClick={() =>
                handleGoToDetailClick(
                  item.communityId,
                )
              }
            >
              <CommunityBox>
                <div>
                  <CommunityTitle>
                    {item.title}
                  </CommunityTitle>
                  <CommunityContent>
                    {item.content}
                  </CommunityContent>
                </div>
                {!item.communityImage ? null : (
                  <CommunityImage
                    src={item.communityImage.url}
                  />
                )}
              </CommunityBox>
              <CommunitySubBox>
                <CommunitySubBox>
                  <div>{item.address}</div> &nbsp;
                  <div>
                    {calculateDaysAgo(
                      item.createdAt,
                    )}
                    일 전
                  </div>{' '}
                  &nbsp;
                  <div>조회 </div>
                </CommunitySubBox>
                <CommunitySubBox>
                  <GoThumbsup /> &nbsp;
                  <IoChatbubbleOutline />
                </CommunitySubBox>
              </CommunitySubBox>
            </CommunityContainer>
          ))
        ) : (
          <div>리스트가 없습니다.</div>
        )}
      </Container>
    </>
  );
};

export default CommunityList;
