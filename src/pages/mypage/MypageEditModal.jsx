import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as s from './MypageStyles';


const MypageEditModal = ({ isOpen, onClose, onSubmit, user, editType }) => {
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [isButtonActive2, setIsButtonActive2] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEditedEmail(user.email);
      setEditedPhoneNumber(user.phoneNumber);
    }
  }, [isOpen, user.email, user.phoneNumber]);

  useEffect(() => {
    if (!isOpen) {
      setEditedEmail('');
      setEditedPhoneNumber('');
      setVerificationCode('');
      setInputCode('');
      setVerificationMessage('');
    }
  }, [isOpen]);


  const handleCloseModal = () => {
    if (inputCode === '') {
      onClose();
    } else {
      if (isCodeVerified) {
        if (editType === 'email') {
          onSubmit({ [editType]: editedEmail });
        } else {
          onSubmit({ [editType]: editedPhoneNumber });
        }
        setIsButtonActive(true);
        onClose();
      } else {
        alert('인증되지 않았습니다.')
      }
    }


  };


  const handleGenerateVerificationCode = () => {
    const generatedCode = Math.floor(100000 + Math.random() * 900000);
    console.log('인증번호:', generatedCode);
    setVerificationCode(generatedCode.toString());
    setIsButtonActive(false);
    setIsButtonActive2(true);
    setVerificationMessage('');
  };

  const handleVerifyCode = () => {
    if (inputCode === verificationCode) {
      setIsCodeVerified(true);
      setVerificationMessage('인증번호가 일치합니다.');
      setIsButtonActive2(false)
    } else {
      setIsCodeVerified(false);
      setVerificationMessage('인증번호가 일치하지 않습니다.');
    }
  };

  const handleInputChange = (e) => {
    setIsButtonActive2(true);
    setInputCode(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.795)',
          zIndex: 9999
        },
        content: {
          position: 'absolute',
          width: '300px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.938)',
          border: '1px solid #ff6f0fca',
          padding: 0,
          borderRadius: '5px',
        }
      }}
    >
      <s.ModalContent style={{ display: 'flex', flexDirection: 'column' }}>
        <s.StyledTitle>{editType === 'email' ? '이메일' : '전화번호'} 수정</s.StyledTitle>
        <s.FlexDiv2 style={{ flexDirection: 'column' }}>
          <s.StyledInput
            value={editType === 'email' ? editedEmail : editedPhoneNumber}
            onChange={editType === 'email' ? (e) => setEditedEmail(e.target.value) : (e) => setEditedPhoneNumber(e.target.value)}
          />
          <s.StyledBtn active={isButtonActive.toString()} style={{ margin: '5px 0' }} onClick={handleGenerateVerificationCode}>인증번호 받기</s.StyledBtn>
        </s.FlexDiv2>
        <s.StyledInput placeholder='인증번호 6자리 입력' value={inputCode} onChange={handleInputChange} />
        <s.StyledBtn active={isButtonActive2.toString()} style={{ margin: '5px 0' }} onClick={handleVerifyCode}>인증번호 확인</s.StyledBtn>
        {verificationMessage && <p style={{ textAlign: 'center' }}>{verificationMessage}</p>}
        <s.SubmitButton onClick={handleCloseModal}>저장</s.SubmitButton>
      </s.ModalContent>
    </Modal>
  );
};

export default MypageEditModal;