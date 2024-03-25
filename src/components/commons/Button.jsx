import React, {
  useState,
  useEffect,
} from 'react';
import styled, { css } from 'styled-components';
import Modal from './MainModal';
import { useNavigate } from 'react-router-dom';

const Button = ({ isCommunity }) => {
  const navigate = useNavigate();
  const [isCircle, setIsCircle] = useState(false);
  const [isClicked, setIsClicked] =
    useState(false);
  const [showModal, setShowModal] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsCircle(true);
      } else {
        setIsCircle(false);
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
    );
    handleScroll();

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal
      ? 'hidden'
      : 'auto';

    // 컴포넌트 언마운트 / 모달 닫힐 때 스크롤 되도록 설정!
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowModal(!showModal);
    // 모달이 표시될 때 body 스크롤을 방지
    document.body.style.overflow = showModal
      ? 'auto'
      : 'hidden';
  };
  const handleWriteClick = () => {
    navigate('/communityCreate');
  };
  return (
    <>
      {isCommunity ? (
        <>
          {' '}
          <WritingButton
            $isCircle={isCircle}
            $isClicked={isClicked}
            onClick={handleWriteClick}
          >
            글쓰기
          </WritingButton>
        </>
      ) : (
        <>
          <WritingButton
            $isCircle={isCircle}
            $isClicked={isClicked}
            onClick={handleClick}
          >
            {isClicked
              ? 'X'
              : isCircle
                ? '+'
                : '+ 글쓰기'}
          </WritingButton>
          {showModal && <Modal />}
        </>
      )}
    </>
  );
};

export default Button;

const WritingButton = styled.button`
  width: 130px;
  height: 60px;
  background-color: #fa7014;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  position: fixed;
  right: calc(50% - 215px); /* 가운데 정렬 */
  bottom: 100px;
  z-index: 1000;
  transition: all 0.2s ease;

  ${({ $isCircle }) =>
    $isCircle &&
    css`
      width: 60px;
      height: 60px;
      border-radius: 50%;
    `}

  ${({ $isClicked }) =>
    $isClicked &&
    css`
      width: 60px;
      height: 60px;
      background-color: #fff;
      color: #000;
      border-radius: 50%;
    `}
`;