import React from 'react';
import styled from 'styled-components';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  deleteTradePost,
  getTradePostDetail,
} from '../apis/PostItemSale';

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tradePostDetail', id],
    queryFn: () => getTradePostDetail(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  // 상세 정보 삭제 함수
  const handleDelete = async () => {
    const result = await deleteTradePost(id);
    if (result.status === 200) {
      console.log('삭제 성공');
      navigate('/home');
    } else {
      console.error('삭제 실패', result.data);
    }
  };
  const detailData = data.data;
  const defaultImage = '기본 이미지 URL';
  return (
    <PageContainer>
      <ImageContainer>
        {detailData.postImageList &&
          detailData.postImageList.length > 0 ? (
          <ProductImage
            src={detailData.postImageList[0].url}
            alt="product"
          />
        ) : (
          <ProductImage
            src={defaultImage}
            alt="default"
          />
        )}
      </ImageContainer>
      <InfoContainer>
        <Title>{detailData.title}</Title>
        <Detail>{detailData.detail}</Detail>
        <Price>{detailData.price}원</Price>
        <DeleteButton onClick={handleDelete}>
          삭제하기
        </DeleteButton>
      </InfoContainer>
    </PageContainer>
  );
};

export default DetailPage;

const PageContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`;

const Detail = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

const Price = styled.span`
  font-size: 28px;
  color: #000;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  padding: 10px 16px;
  background-color: #4d4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 16px;
  margin-left: 8px;
`;
