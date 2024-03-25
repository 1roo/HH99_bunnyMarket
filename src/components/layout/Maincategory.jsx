import React from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiChainedHeart } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';

const Maincategory = () => {
  return (
    <CategoryContainer>
      <CategoryButton>
        <RxHamburgerMenu style={{ marginRight: '5px' }} />
        전체
      </CategoryButton>
      <CategoryButton>
        <GiChainedHeart style={{ marginRight: '5px' }} />
        인기
      </CategoryButton>
      <CategoryButton>
        <FaHome style={{ marginRight: '5px' }} />
        생활
      </CategoryButton>
      <CategoryButton>
        <IoGameControllerOutline style={{ marginRight: '5px' }} />
        게임
      </CategoryButton>
    </CategoryContainer>
  );
};

export default Maincategory;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #f4f4f4;
  background-color: #f4f4f4;
  border-radius: 10px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin: 0 10px;
`;
