import React, { useRef, useState } from 'react';
import {
  Container,
  Header,
  CommunityWriteTitle,
  CommunityWriteContent,
  CommunityWriteFooter,
  CommunityWriteBox,
  CommunityWriteCategory,
  CommunityCateogyList,
  CommunityWriteCategoryTitle,
  CategoryList,
} from '../CommunityStyles';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { LightBreak } from '../styles/commonStyles.js';
import { VscClose } from 'react-icons/vsc';
import { useMutation } from '@tanstack/react-query';
import { createCommunity } from '../../apis/communityAxios.js';
import { useNavigate } from 'react-router-dom';

const CommunityCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] =
    useState('');
  const [
    showSelectedImage,
    setShowSelectedImage,
  ] = useState('');
  const [address, setAddress] = useState(
    '서울시 서초구 반포동',
  );
  const fileInputRef = useRef(null);
  const [showOptions, setShowOptions] =
    useState(false);
  const communityCategory = [
    '동네질문',
    '생활정보',
    '동네맛집',
  ];

  const [selectedOption, setSelectedOption] =
    useState(communityCategory[0]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUploadImageClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0]; // 첫 번째 파일만 선택하도록 함
    const reader = new FileReader();
    reader.onload = () => {
      console.log(file);
      setSelectedImage(file); // 선택된 파일의 URL을 상태에 저장
    };
    reader.readAsDataURL(file); // 파일을 읽어서 데이터 URL로 변환
  };

  const handleImageRemove = () => {
    setSelectedImage('');
  };

  const communityValue = {
    category: selectedOption,
    title,
    content,
    selectedImage,
    address,
  };
  console.log('selectedImage : ', selectedImage);
  const communityCreateMutation = useMutation({
    mutationFn: createCommunity,
    onSuccess: (response) => {
      console.log(response);
      navigate('/community');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      'submit button value > ',
      communityValue,
    );
    communityCreateMutation.mutate(
      communityValue,
    );
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };
  return (
    <>
      {/* 헤더 영영 */}
      <Container>
        <Header>
          <VscClose
            size={26}
            onClick={handleGoBackClick}
          />
          <div>동네생활 글쓰기</div>
          <form onSubmit={handleSubmit}>
            <button type="submit">완료 </button>
          </form>
        </Header>
        <LightBreak />
        {/* body */}
        <CommunityWriteBox>
          <CommunityWriteCategory>
            <CommunityWriteCategoryTitle
              onClick={() =>
                setShowOptions(!showOptions)
              }
            >
              {!selectedOption ? (
                <p> 카테고리를 선택하세요</p>
              ) : (
                <p>{selectedOption}</p>
              )}
            </CommunityWriteCategoryTitle>
            {showOptions && (
              <CommunityCateogyList>
                {communityCategory.map(
                  (option, index) => (
                    <CategoryList
                      key={index}
                      onClick={() =>
                        handleOptionSelect(option)
                      }
                    >
                      {option}
                    </CategoryList>
                  ),
                )}
              </CommunityCateogyList>
            )}
          </CommunityWriteCategory>
          <CommunityWriteTitle
            placeholder="제목을 입력하세요."
            onChange={handleTitleChange}
            value={title}
          ></CommunityWriteTitle>
          <CommunityWriteContent
            placeholder="동네 근처 이웃과 동네에서의 소소한 일상, 정보를 공유해보세요."
            onChange={handleContentChange}
            value={content}
          ></CommunityWriteContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100px',
              alignItems: 'flex-end',
            }}
          >
            {selectedImage && (
              <>
                <button
                  style={{
                    // top: '5px',
                    // right: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'black',
                    color: 'white',
                    width: '25px',
                    height: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: 'none',
                    zIndex: '1', // 사진 위에 보이도록 z-index 설정
                  }}
                  onClick={handleImageRemove}
                  name="X"
                >
                  X
                </button>
                <img
                  src={URL.createObjectURL(
                    selectedImage,
                  )}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                  alt="Selected Image"
                />
              </>
            )}
          </div>
        </CommunityWriteBox>
        <LightBreak />
        <CommunityWriteFooter>
          <AiOutlinePicture
            onClick={handleUploadImageClick}
          />{' '}
          &nbsp;
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            ref={fileInputRef}
          />
          <p>사진</p>
          <button>
            <BiMap /> &nbsp; <p>장소</p>
          </button>
        </CommunityWriteFooter>
      </Container>
    </>
  );
};

export default CommunityCreate;
