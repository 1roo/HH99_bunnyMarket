import React from 'react';
import styled from 'styled-components';
import logoImage from '../../images/logo.png';

const NotiItem = ({
  title,
  timeAgo,
  contents,
}) => (
  <NotiContainer>
    <NotiBox>
      <LogoBox>
        <img src={logoImage} alt="Logo" />
      </LogoBox>
      <NotiContentBox>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <TimeAgo>{timeAgo}</TimeAgo>
      </NotiContentBox>
    </NotiBox>
  </NotiContainer>
);

export default NotiItem;

const NotiContainer = styled.div`
  width: 380px;
  border-bottom: 1px solid #eee;
  margin: 0 auto;
`;

const NotiBox = styled.div`
  display: flex;
  margin: 30px auto;
`;

const LogoBox = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const NotiContentBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const Contents = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #888;
  margin-bottom: 5px;
`;

const TimeAgo = styled.span`
  font-size: 13px;
  color: #666;
`;
