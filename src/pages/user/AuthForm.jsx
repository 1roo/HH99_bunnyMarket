import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileModal from './ProfileModal';
import AddressModal from './AddressModal';
import { Cookies } from 'react-cookie';
import { IoIosArrowBack } from "react-icons/io";
import { sendPhoneNumber, checkPhoneNumber, signUp } from '../../apis/userAxios';
import * as s from './UserStyles';
import { useMutation } from '@tanstack/react-query';

const AuthForm = () => {
  const nav = useNavigate();
  const isLogin = useLocation().state.isLogin;
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [showVerificationButton, setShowVerificationButton] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [inputVerificationCode, setInputVerificationCode] = useState('');
  const [showAddressModal, setShowAddressModal] = useState(true);

  const cookie = new Cookies();

  const [user, setUser] = useState({
    phoneNumber: '',
    nickname: '',
    address: '',
    email: '',
    password: 'abc1234',
  })

  //주소 받기
  const handleSubmitAddressModal = ({ address }) => {
    setUser({
      ...user,
      address,
    })
    setShowAddressModal(false);
  }

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (input.length === 13) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
    if (input.length > 13) {
      setIsButtonActive(true);
      return;
    }
    if (e.nativeEvent.inputType === 'deleteContentBackward' || e.nativeEvent.inputType === 'deleteContentForward') {
      setUser({
        ...user,
        phoneNumber: input,
      })
      return;
    }

    let formattedNumber = '';

    if (input.length === 3 || input.length === 8) {
      formattedNumber += input + ' ';
    } else {
      formattedNumber = input;
    }
    setUser({
      ...user,
      phoneNumber: formattedNumber,
    })
  };



  //서버에서 유저로 인증번호 발송
  const handleVerificationButtonClick = async () => {
    const endpoint = isLogin ? 'user/login/send-code-phone' : 'user/signup/send-code-phone';
    try {
      const data = await sendPhoneNumber(user.phoneNumber, endpoint);
      const match = data.match(/\((\d+)\)/);
      if (match) {
        const code = match[1];

        console.log('인증번호:', code);

        setVerificationCode(code);
        setShowVerificationButton(true);
        setShowVerificationModal(false);
        setIsButtonActive(false);
      } else {
        console.error('인증번호를 찾을 수 없습니다.');
      }
    } catch (error) {
      alert(error.message);
    }
  };



  //인증번호 일치여부 확인
  const handleVerificationConfirm = async () => {
    const requestData = {
      phoneNumber: user.phoneNumber,
      verificationCode: inputVerificationCode,
    };
    const endpoint = isLogin ? 'user/login/phone' : 'user/signup/check-code-phone';
    try {
      const data = await checkPhoneNumber(requestData, endpoint);
      if (data) {
        if (!isLogin) {
          setShowVerificationModal(true);
        } else {
          cookie.set('accessToken', data.authorization);
          cookie.set('userAddress', data.dong);
          nav('/home');
        }
      } else {
        console.error('인증번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생');
    }
  };


  // 회원가입 API 호출
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      nav('/')
    }
  });
  const handleSubmitProfileModal = async ({ nickname, password, email, profileImage }) => {
    setUser({ ...user, nickname, password, email });
    setShowVerificationModal(false);

    const formData = new FormData();
    formData.append('signupRequestDto', JSON.stringify({
      email,
      password: 'Abc1234!!',
      nickname,
      phoneNumber: user.phoneNumber,
      address: user.address,
    }));
    formData.append('files', profileImage);

    mutation.mutate(formData)
  }



  return (
    <div style={{ width: "430px" }}>
      {!isLogin && <AddressModal isOpen={showAddressModal} onClose={() => setShowAddressModal(false)} onSubmit={handleSubmitAddressModal} />}
      <div style={{ fontSize: '30px', margin: '20px 0 50px', cursor: 'pointer' }} onClick={() => { nav(-1) }}><IoIosArrowBack /></div>
      <div style={{ marginLeft: '15px' }}>
        <s.HelloSpan>안녕하세요!</s.HelloSpan><br />
        {isLogin ? (
          <s.HelloSpan>휴대폰 번호로 로그인해주세요.</s.HelloSpan>
        ) : (
          <s.HelloSpan>휴대폰 번호로 가입해주세요.</s.HelloSpan>
        )}
        <p style={{ fontSize: '14px', marginBottom: '25px' }}>휴대폰 번호는 안전하게 보관되며 이웃들에게 공개되지 않아요.</p>
      </div>
      <div>
        <s.TelInput type='text' placeholder='휴대폰번호(- 없이 숫자만 입력)'
          value={user.phoneNumber}
          onChange={handlePhoneNumberChange} />
        <s.VerificationBtn active={isButtonActive.toString()} onClick={handleVerificationButtonClick}>인증문자 받기</s.VerificationBtn>
        <s.ErrorMessage>{errorMessage}</s.ErrorMessage>
        {showVerificationButton && (
          <>
            <s.TelInput type='text' placeholder='인증번호 6자리 입력'
              value={inputVerificationCode}
              onChange={(e) => setInputVerificationCode(e.target.value)} />
            <p style={{ fontSize: '14px', margin: '2px 0 14px 18px' }}>어떤 경우에도 타인에게 공유하지 마세요!</p>
            <s.VerificationBtn active='true' onClick={handleVerificationConfirm}>인증번호 확인</s.VerificationBtn>
          </>
        )}
      </div>
      <s.ChangeTelDiv>
        <span>휴대폰 번호가 변경되었나요?&nbsp;</span>
        <span>이메일로 계정 찾기</span>
      </s.ChangeTelDiv>
      <ProfileModal
        isOpen={showVerificationModal && !isLogin}
        onClose={() => setShowVerificationModal(false)}
        onSubmit={handleSubmitProfileModal}
      />
    </div>
  );

};

export default AuthForm;




