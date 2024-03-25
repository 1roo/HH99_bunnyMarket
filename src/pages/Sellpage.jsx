import React, {
  useEffect,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import ImageUploader from '../components/commons/ImageUpload';
import CategorySelector from '../components/commons/CategorySelector';
import TransactionTypeSelector from '../components/commons/TypeSelector';
import { createSalePost } from '../apis/PostItemSale';
import axios from 'axios';

const SellPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSalePost({
        title,
        content: description,
        category: selectedCategory,
        price,
        contactPlace,
        selectedImage: image,
      });
      queryClient.invalidateQueries([
        'tradePosts',
      ]);
      navigate('/home');
    } catch (error) {
      console.error(
        'Failed to create sale post:',
        error,
      );
    }
  };

  // 제목, 가격
  const [title, setTitle] = useState('');
  const onTitleChange = (e) => {
    setTitle(e.target.value);
    setShowCategories(e.target.value.length > 0);
  };
  const [price, setPrice] = useState(0);
  // 포맷된 가격 인풋
  const formatPriceInput = (value) => {
    const number = value.replace(/[^0-9]/g, '');
    return Number(number);
  };

  // 자세한 설명
  const [description, setDescription] =
    useState('');

  // 거래 유형
  const [transactionType, setTransactionType] =
    useState('');
  // 가격 제안
  const [offers, setOffers] = useState(false);
  // 이미지
  const [image, setImage] = useState(null);
  // 카테고리
  const [showCategories, setShowCategories] =
    useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState('');
  const categories = [
    '디지털기기',
    '패션/잡화',
    '기타',
    '취미/게임/스포츠',
    '생활/주방/인테리어',
  ];

  // 거래 희망 장소
  const [contactPlace, setContactPlace] =
    useState('');
  // 참고
  const [address, setAddress] = useState('');
  const [addressResults, setAddressResults] =
    useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (address.trim() !== '') {
        handleAddressSearch();
      } else {
        setAddressResults([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [address]); // 'contactPlace' 대신 'address'를 사용합니다.

  // 주소 검색 호출 함수
  const handleAddressSearch = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/address/search?partialAddress=${encodeURIComponent(address.trim())}`,
      );
      const data = response.data;
      if (data && data.length > 0) {
        setAddressResults(data);
      } else {
        console.error('검색 결과가 없습니다.');
      }
    } catch (error) {
      console.error(
        '검색 요청 중 오류 발생:',
        error,
      );
    }
  };
  //사용자가 주소 검색 후 ㅇㅇ동을 클릭하면 그 값을 사용자 주소에 저장
  const handleAddressResultClick = (
    selectedAddress,
  ) => {
    setContactPlace(selectedAddress);
    // 검색 결과 목록을 비움
    setAddressResults([]);
  };

  return (
    <Container>
      <Header>내 물건 팔기</Header>
      <Form onSubmit={handleSubmit}>
        <ImageUploader
          image={image}
          setImage={setImage}
        />
        <Label>제목</Label>
        <Input
          placeholder="제목"
          value={title}
          onChange={onTitleChange}
        />
        <CategorySelector
          showCategories={showCategories}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={
            setSelectedCategory
          }
        />
        <TransactionTypeSelector
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          price={price}
          setPrice={setPrice}
          formatPriceInput={formatPriceInput}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={offers}
            onChange={(e) =>
              setOffers(e.target.checked)
            }
          />
          <CheckboxLabel>
            가격 제안 받기
          </CheckboxLabel>
        </CheckboxContainer>
        <Label>자세한 설명</Label>
        <Textarea
          placeholder="제품 상태, 사용감 등을 구매자가 잘 이해할 수 있도록 자세히 설명해주세요."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
        <Button size="small">
          자주 쓰는 문구
        </Button>
        <Label>거래 희망 장소</Label>
        <Input
          placeholder="위치 검색"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />
        <See>보여줄 동네 선택</See>
        <ButtonBox>
          <Button onClick={handleSubmit}>
            작성완료
          </Button>
        </ButtonBox>
      </Form>
      {/* 주소 검색 결과를 렌더링하는 부분 */}
      {addressResults.length > 0 && (
        <div>
          {addressResults.map(
            (address, index) => (
              <div
                key={index}
                onClick={() =>
                  handleAddressResultClick(
                    address.address_name, // 수정
                  )
                }
              >
                {address.address_name}
              </div>
            ),
          )}
        </div>
      )}
    </Container>
  );
};

export default SellPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 60px; // 푸터 수정되면 삭제하기
  background: #fff;
`;

const Header = styled.h1`
  font-size: 20px;
  width: 430px;
  height: 40px;
  color: #333;
  border-bottom: 1px solid #000;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${({ disabled }) =>
    disabled ? '#bbbbbb' : '#fff'};
`;

const Textarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  height: 100px;
`;
const ButtonBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 390px;
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: #fa7014;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          background-color: #eee;
          color: #000;
          width: 120px;
          font-size: 14px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
          padding: 0;
        `;
    }
  }}
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label``;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const See = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-top: 15px;
  margin-bottom: 60px;
`;
