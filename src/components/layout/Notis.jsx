import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import NotiItem from '../commons/NotiItem';
import KeywordItem from '../commons/KeywordItem';
import KeywordHeader from '../layout/KeywordHeader';
import { useNavigate } from 'react-router-dom';

const TabList = () => {
  // 원래는 서버  API 호출해야함
  // 일단 미리보기

  const notis = [
    {
      id: 1,
      title: '3월 3주, 항해생활 인기글',
      contents: '이번 주 항해99에 어떤 일이 일어났을까요?',
      timeAgo: '1일 전',
      logo: '당근',
    },
    {
      id: 2,
      title: '나눔의 날 3월 소식!',
      contents: '봄날이 느껴지는 나눔 사연을 전해요.',
      timeAgo: '5일 전',
      logo: '당근',
    },
    {
      id: 3,
      title: '3월 2주, 동네생활 인기글',
      contents: '이번 주 오전동에 무슨 일이 있었나요?',
      timeAgo: '9일 전',
      logo: '당근',
    },
  ];

  const keywords = [
    {
      id: 1,
      title: '샤넬 뷰티 복조리 파우치',
      detail: '호계1동 . 끌올 12분 전',
      imageSrc: 'path/to/image1.jpg',
    },
    {
      id: 2,
      title: '아이폰 12 미니 케이스',
      detail: '서초구 서초동 . 끌올 1시간 전',
      imageSrc: 'path/to/image2.jpg',
    },
    {
      id: 3,
      title: '닌텐도 스위치',
      detail: '강남구 역삼동 . 끌올 하루 전',
      imageSrc: 'path/to/image3.jpg',
    },
  ];

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const [activeTab, setActiveTab] = useState(0);

  // 탭 바꾸기
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <NotiHeader>
        <IoIosArrowBack
          size='30'
          onClick={handleBackClick}
          style={{ cursor: 'pointer' }}
        />
        <NotiText>알림</NotiText>
        <EditText>편집</EditText>
      </NotiHeader>
      <NotiTabMenu>
        <NotiTab onClick={() => handleTabClick(0)} $active={activeTab === 0}>
          활동 알림
        </NotiTab>
        <NotiTab onClick={() => handleTabClick(1)} $active={activeTab === 1}>
          키워드 알림
        </NotiTab>
      </NotiTabMenu>
      <NotiContainer>
        {activeTab === 0 &&
          notis.map((noti) => (
            <NotiItem
              key={noti.id}
              title={noti.title}
              contents={noti.contents}
              timeAgo={noti.timeAgo}
              logo={noti.logo}
            />
          ))}
        {activeTab === 1 && (
          <>
            <KeywordHeader title='키워드 알림' />
            {keywords.map((keyword) => (
              <KeywordItem
                key={keyword.id}
                title={keyword.title}
                detail={keyword.detail}
                price={keyword.price}
                imageSrc={keyword.imageSrc}
              />
            ))}
          </>
        )}
      </NotiContainer>
    </>
  );
};

export default TabList;

const NotiHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;
const NotiText = styled.span`
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
`;

const EditText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: auto;
`;

const NotiTabMenu = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const NotiTab = styled.div`
  width: 215px;
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  border-bottom: ${({ $active }) =>
    $active ? '2px solid #000' : '2px solid #eee'};
`;

const NotiContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
`;
