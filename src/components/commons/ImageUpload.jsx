import React from 'react';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

const ImageUploader = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }; // 수정했음

  return (
    <ImageUploadContainer>
      {!image && (
        <ImageInputLabel>
          <FaCamera size={30} color="#9a9a9a" />
          <ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </ImageInputLabel>
      )}
      {image && (
        <ImageBox>
          <UploadedImage
            src={URL.createObjectURL(image)}
            alt="업로드된 이미지"
          />
        </ImageBox>
      )}
    </ImageUploadContainer>
  );
};

export default ImageUploader;

const ImageUploadContainer = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ImageInputLabel = styled.label`
  cursor: pointer;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageBox = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 10px;
  width: 140px;
  height: 140px;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
