import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllTradePosts } from '../apis/PostItemSale'; // 판매글 목록 API 함수를 임포트
import Header from '../components/layout/Header';
import MainItem from '../components/commons/MainItem';
import Maincategory from '../components/layout/Maincategory';
import WritingButton from '../components/commons/Button';
import { formatUpdateTime } from '../utils';

// 1. data 값이 있는지 없는지에 대한 판별 할 수 있는 삼항연산자 또는 if 문 사용!
// 2. 값이 있다면 => 아래 data.map을 사용해서 MainItem 값들이 보여지게 하기
// 3. 값이 없다면 => <div>아직 리스트가 없어요~~!</div> 를 보여지게 하기
const Home = () => {
  const { data, isLoading, isError, error } =
    useQuery({
      queryKey: ['tradePosts'], //get요청인데 넘겨줄 데이터가 없어서 쿼리키 필요 없다!
      queryFn: getAllTradePosts,
    });

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = (
      <div>
        An error occurred: {error.message}
      </div>
    );
  } else if (data && data.length > 0) {
    content = data.map((post) => (
      <MainItem
        key={post.id}
        id={post.id}
        title={post.title}
        detail={`${post.contactPlace} · ${formatUpdateTime(post.createdAt)} 전`}
        price={`${post.price}`}
        imageUrl={
          post.postImage ? post.postImage.url : ''
        }
      />
    ));
  } else {
    content = <div style={{ margin: '30px auto', textAlign: 'center' }}>해당 동에 게시물이 없습니다!</div>;
  }

  return (
    <>
      <Header />
      <Maincategory />
      <WritingButton />
      {content}
    </>
  );
};

export default Home;
