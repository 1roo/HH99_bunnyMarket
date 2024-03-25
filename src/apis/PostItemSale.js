import { instanceWithToken } from './axios';

// 판매글 작성 API
export const createSalePost = async (
  saleValue,
) => {
  const {
    title,
    content,
    category,
    price,
    contactPlace,
    selectedImage,
  } = saleValue;

  const formData = new FormData();

  // 이미지가 있을 경우 파일을 formData에 추가
  if (selectedImage) {
    formData.append('files', selectedImage);
  }

  // 나머지 판매글 데이터를 JSON 문자열로 변환하여 formData에 추가
  formData.append(
    'createTradeRequestDto',
    JSON.stringify({
      title,
      content,
      category,
      price,
      contactPlace,
    }),
  );

  try {
    const response = await instanceWithToken.post(
      '/trades',
      formData,
      {
        headers: {
          accept: '*/*',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  } catch (error) {
    console.error(
      'Error creating sale post:',
      error,
    );
    throw error;
  }
};

// 판매글 수정 API
export const updateSalePost = async (
  tradeId,
  saleValue,
  selectedImage,
) => {
  try {
    const {
      title,
      content,
      category,
      price,
      contactPlace,
      imgId,
    } = saleValue;
    const formData = new FormData();

    // 이미지가 있으면 formData에 추가
    if (selectedImage) {
      formData.append('files', selectedImage);
    }

    // 수정하려는 나머지 정보를 JSON으로 묶어서 FormData에 추가
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('contactPlace', contactPlace);
    formData.append('imgId', imgId);

    // '/trades/{tradeId}' 엔드포인트로 POST 요청
    const response = await instanceWithToken.post(
      `/trades/${tradeId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(
      'Error updating sale post:',
      error,
    );
    throw error;
  }
};

// 판매 게시글 삭제 API
export const deleteTradePost = async (
  tradeId,
) => {
  try {
    const response =
      await instanceWithToken.delete(
        `/trades/${tradeId}`,
      );
    return response;
  } catch (error) {
    console.error(
      'Error deleting trade post:',
      error,
    );
    return error.response || error;
  }
};

// 판매글 전체 조회/검색 API
export const getAllTradePosts = async () => {
  try {
    const response =
      await instanceWithToken.get(`/trades`);

    const data = response.data.content;
    return data;
  } catch (error) {
    console.error(
      'Error fetching all trade posts:',
      error,
    );
    throw error;
  }
};

// 불러오기
export const getTradePostDetail = async (
  tradeId,
) => {
  try {
    const response = await instanceWithToken.get(
      `/trades/${tradeId}`,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
