import React, { useState } from 'react';
import Modal from 'react-modal';
import * as s from './UserStyles';
import basicImg from '../../images/basicImg.png';
import { ImCamera } from "react-icons/im";

const ProfileModal = ({ isOpen, onClose, onSubmit }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }

    onClose();
    onSubmit({ nickname, email, profileImage });
  };



  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999
        },
        content: {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, 0)',
          width: '430px',
          height: '930px',
          bottom: 0,
          overflow: 'auto',
          backgroundColor: 'white',
          border: 'none',
          padding: 0,
          borderRadius: 0
        }
      }}
    >
      <s.ModalContent>
        <p>프로필 설정</p>
        <s.ProfileImageContainer>
          <s.ProfileImage src={profileImage ? URL.createObjectURL(profileImage) : basicImg} alt="Profile" />
          <s.ProfileImageLabel htmlFor="profileImage">
            <s.ProfileImageIcon><ImCamera /></s.ProfileImageIcon>
          </s.ProfileImageLabel>
          <s.ProfileImageInput
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </s.ProfileImageContainer>
        <s.StyledInput2
          type="text"
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <s.StyledInput2
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginTop: '20px' }} />
        <p>프로필 사진과 닉네임, 이메일을 입력해주세요.</p>
        <s.SubmitButton onClick={handleSubmit}>다음</s.SubmitButton>
      </s.ModalContent>
    </Modal>
  );
};

export default ProfileModal;

