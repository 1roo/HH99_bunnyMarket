import React, { useEffect } from 'react'
import logoImage from '../images/logoImage.png'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { Cookies } from 'react-cookie';

const Main = () => {
  const nav = useNavigate();
  const cookie = new Cookies();

  useEffect(() => {
    const token = cookie.get('accessToken');
    if (token) {
      nav('/home');
    }
  }, []);


  const handleStartClick = () => {
    nav("/auth", { state: { isLogin: false } });
  };
  const handleLoginClick = () => {
    nav("/auth", { state: { isLogin: true } });
  };


  return (
    <StyledDiv>
      <img style={{ height: '150px' }} src={logoImage} alt="당근마켓 logo" />
      <div>
        <h2>당신 근처의 당근</h2>
        <span>동네라서 가능한 모든 것<br />
          지금 내 동네를 선택하고 시작해보세요!</span>
      </div>
      <StartBtn onClick={handleStartClick}>시작하기</StartBtn>
      <StartDiv>
        <span>이미 계정이 있나요?</span>
        <span onClick={handleLoginClick}>로그인</span>
      </StartDiv>
    </StyledDiv>
  )
}

export default Main;

const StyledDiv = styled.div`
    width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    height: 100vh;
`

const StartBtn = styled.button`
    width: 430px;
    height: 50px;
    border-radius: 5px;
    color: white;
    background-color: #FF6F0F;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    bottom: 80px;
`

const StartDiv = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 50px;
    font-size: 15px;

    span:last-child {
        cursor: pointer;
        font-size: 13px;
        color: #FF6F0F;
    }
`

