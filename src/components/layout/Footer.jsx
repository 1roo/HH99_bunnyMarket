import React, { useState } from 'react';
import styled from 'styled-components';
import {
  GoHome,
  GoHomeFill,
} from 'react-icons/go';
import {
  HiOutlineNewspaper,
  HiNewspaper,
} from 'react-icons/hi';
import {
  HiOutlineLocationMarker,
  HiLocationMarker,
} from 'react-icons/hi';
import {
  PiChatsCircle,
  PiChatsCircleFill,
} from 'react-icons/pi';
import {
  FaUser,
  FaRegUser,
} from 'react-icons/fa';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [footerIcons, setFooterIcons] = useState({
    home: false,
    news: false,
    near: false,
    chat: false,
    mypage: false,
  });

  if (
    location.pathname !== '/mypage' &&
    location.pathname !== '/community' &&
    location.pathname !== '/home' &&
    location.pathname !== '/nothing'
  ) {
    return null;
  }

  const handleHomeClick = () => {
    nav('/home');
    setFooterIcons({
      home: true,
      news: false,
      near: false,
      chat: false,
      mypage: false,
    });
  };

  const handleNewsClick = () => {
    nav('/community');
    setFooterIcons({
      home: false,
      news: true,
      near: false,
      chat: false,
      mypage: false,
    });
  };
  const handleNearClick = () => {
    nav('/nothing');
    setFooterIcons({
      home: false,
      news: false,
      near: true,
      chat: false,
      mypage: false,
    });
  };
  const handleChatClick = () => {
    nav('/nothing');
    setFooterIcons({
      home: false,
      news: false,
      near: false,
      chat: true,
      mypage: false,
    });
  };
  const handleMypageClick = () => {
    nav('/mypage');
    setFooterIcons({
      home: false,
      news: false,
      near: false,
      chat: false,
      mypage: true,
    });
  };

  return (
    <FooterContainer>
      <FooterButton onClick={handleHomeClick}>
        {footerIcons.home ? (
          <GoHomeFill
            style={{ fontSize: '30px' }}
          />
        ) : (
          <GoHome style={{ fontSize: '30px' }} />
        )}
        <span>홈</span>
      </FooterButton>
      <FooterButton onClick={handleNewsClick}>
        {footerIcons.news ? (
          <HiNewspaper
            style={{ fontSize: '30px' }}
          />
        ) : (
          <HiOutlineNewspaper
            style={{ fontSize: '30px' }}
          />
        )}
        <span>동네생활</span>
      </FooterButton>
      <FooterButton onClick={handleNearClick}>
        {footerIcons.near ? (
          <HiLocationMarker
            style={{ fontSize: '30px' }}
          />
        ) : (
          <HiOutlineLocationMarker
            style={{ fontSize: '30px' }}
          />
        )}
        <span>내근처</span>
      </FooterButton>
      <FooterButton onClick={handleChatClick}>
        {footerIcons.chat ? (
          <PiChatsCircleFill
            style={{ fontSize: '30px' }}
          />
        ) : (
          <PiChatsCircle
            style={{ fontSize: '30px' }}
          />
        )}
        <span>채팅</span>
      </FooterButton>
      <FooterButton onClick={handleMypageClick}>
        {footerIcons.mypage ? (
          <FaUser style={{ fontSize: '30px' }} />
        ) : (
          <FaRegUser
            style={{ fontSize: '30px' }}
          />
        )}
        <span>나의당근</span>
      </FooterButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 430px;
  margin: 0 auto;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 998;
  background-color: white;
`;

const FooterButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  span {
    font-size: 13px;
  }

  &:focus {
    outline: none;
  }
`;
