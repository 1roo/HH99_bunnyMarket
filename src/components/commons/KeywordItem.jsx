import React, { useState } from 'react';
import styled from 'styled-components';

const KeywordItem = ({ title, detail, imageSrc }) => {
  // 배경색 바꾸기
  const [backgroundColor, setBackgroundColor] = useState('#fff3f3');

  const goToDetailPage = () => {
    // 상세 페이지 이동 아직 안됨

    setBackgroundColor('#fff');
  };

  return (
    <>
      <ItemContainer
        onClick={goToDetailPage}
        $backgroundColor={backgroundColor}
      >
        <ItemBox>
          <ImageBox>
            <Image src={imageSrc} alt='image' />
          </ImageBox>
          <ContentBox>
            <Title>{title}</Title>
            <Detail>{detail}</Detail>
          </ContentBox>
        </ItemBox>
      </ItemContainer>
    </>
  );
};

export default KeywordItem;

const ItemContainer = styled.div`
  width: 100%;
  max-width: 430px;
  display: flex;
  border-bottom: 1px solid #eee;
  background-color: ${(props) => props.$backgroundColor};
  margin: 0 auto;
`;

const ItemBox = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
`;

const ImageBox = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  width: 80px;
  height: 80px;
  margin: 0 25px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentBox = styled.div`
  width: 290px;
  height: 80px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Detail = styled.div`
  font-size: 14px;
  color: #5d5d5d;
  margin-top: 10px;
`;
