import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const MainItem = ({
  title,
  detail,
  price,
  imageUrl,
  id,
}) => {
  const navigate = useNavigate();
  const navigateDetailPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <ItemContainer onClick={navigateDetailPage}>
      <ItemBox>
        <ImageBox
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <ContentBox>
          <Title>{title}</Title>
          <Detail>{detail}</Detail>
          <Price>{price}원</Price>
        </ContentBox>
        <IconContainer>
          <IoMdHeartEmpty size="20" />
        </IconContainer>
      </ItemBox>
    </ItemContainer>
  );
};

export default MainItem;

const ItemContainer = styled.div`
  width: 390px;
  display: flex;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
`;

const ItemBox = styled.div`
  width: 390px;
  display: flex;
  margin: 20px auto;
`;

const ImageBox = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  width: 140px;
  height: 140px;
  margin-right: 10px;
  background-size: cover;
`;

const ContentBox = styled.div`
  width: 220px;
  height: 115px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const Detail = styled.div`
  font-size: 14px;
  color: #5d5d5d;
  margin-top: 10px;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  align-self: flex-end;
  margin-right: 5px;
`;
