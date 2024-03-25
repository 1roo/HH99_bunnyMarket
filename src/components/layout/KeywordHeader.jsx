import React from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

const KeywordHeader = ({ keywordsCount }) => {
  return (
    <HeaderContainer>
      <BellContainer>
        <FaBell />
        <HeaderTitle>알림 받는 키워드 {keywordsCount}개</HeaderTitle>
      </BellContainer>
      <EditButton>설정</EditButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #fff;
`;

const BellContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;

export default KeywordHeader;
