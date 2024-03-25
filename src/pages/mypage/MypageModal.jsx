import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as s from './MypageStyles';
import { IoIosArrowBack } from "react-icons/io";
import basicImg from '../../images/basicImg.png';
import { ImCamera } from "react-icons/im";
import MypageEditModal from './MypageEditModal';

const MypageModal = ({ isOpen, onClose, onSubmit, currentUser }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalEditing, setModalEditing] = useState(false);
  const [user, setUser] = useState(currentUser);
  const [editType, setEditType] = useState('');
  const [editedNickname, setEditedNickname] = useState(user.nickname);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('체인지 file', file);
    setProfileImage(file);
    setUser({
      ...user,
      url: URL.createObjectURL(file)
    })
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(prevUser => ({
      ...prevUser,
      nickname: editedNickname
    }));
    setIsEditing(false);
  };

  const handleSubmitEditModal = (updatedUser) => {
    console.log('update: ', updatedUser)
    console.log('update 이미지: ', profileImage)
    setUser({
      ...user,
      ...updatedUser
    });
    setModalEditing(false);
  }


  const handleSubmit = () => {
    console.log('User:', user);
    onSubmit(user, profileImage);
    onClose();
  };

  const handleGoBack = () => {
    setUser(currentUser);
    setEditedNickname('');
    setIsEditing(false)
    onClose();
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 8888
        },
        content: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'auto',
          backgroundColor: 'white',
          border: 'none',
          padding: 0,
          borderRadius: 0,
        }
      }}
    >
      <s.ModalContent>
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px auto' }}>
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={handleGoBack}><IoIosArrowBack /></span>
          <p style={{ width: '314px', textAlign: 'center' }}>프로필 / 계정 관리</p>
        </div>
        <div>
          <s.TitleP2>프로필 정보</s.TitleP2>
          <div>
            <s.ProfileInfo>
              <s.ProfileImageContainer style={{ height: '100px', width: '100px' }}>
                <s.ProfileImage2 src={profileImage ? URL.createObjectURL(profileImage) : user.url || basicImg} alt="Profile" />
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
              <div>
                {isEditing ? (
                  <s.InputContainer>
                    <s.NickInput
                      value={editedNickname}
                      onChange={(e) => setEditedNickname(e.target.value)}
                      disabled={!isEditing}
                    />
                    <span onClick={handleSave}>저장</span>
                  </s.InputContainer>
                ) : (
                  <s.InputContainer>
                    <s.NickInput value={user.nickname} disabled />
                    <span onClick={handleEdit}>변경</span>
                  </s.InputContainer>
                )}
              </div>
            </s.ProfileInfo>
          </div>
        </div>
        <div>
          <s.TitleP2>계정 정보</s.TitleP2>
          <s.UserInfoContainer>
            <s.InfoDiv>
              <s.InfoTitle>
                <span>이메일</span>
                <span onClick={() => { setModalEditing(true); setEditType('email'); }}>변경</span>
              </s.InfoTitle>
              <span>{user.email}</span>
            </s.InfoDiv>
            <s.InfoDiv>
              <s.InfoTitle>
                <span>휴대폰 번호</span>
                <span onClick={() => { setModalEditing(true); setEditType('phoneNumber'); }}>변경</span>
              </s.InfoTitle>
              <span>{user.phoneNumber}</span>
            </s.InfoDiv>
          </s.UserInfoContainer>
        </div>

        <s.SubmitButton onClick={handleSubmit}>저장</s.SubmitButton>
      </s.ModalContent>

      <MypageEditModal
        isOpen={modalEditing}
        onClose={() => setModalEditing(false)}
        onSubmit={handleSubmitEditModal}
        user={user}
        editType={editType} />

    </Modal >
  );
};

export default MypageModal;
