import { instanceWithToken } from './axios';
import Community from '../pages/Community';

export const getCommunityList = async (
  isAsc,
  page,
) => {
  try {
    const response = await instanceWithToken.get(
      '/community',
      {
        params: { isAsc, page },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      'failed to fetch community data',
    );
  }
};

export const createCommunity = async (
  communityValue,
) => {
  try {
    const {
      category,
      title,
      content,
      selectedImage,
      address,
    } = communityValue;


    const formData = new FormData();
    formData.append('files', selectedImage); // 이미지를 FormData에 추가

    formData.append(
      'CommunityRequestDto',
      JSON.stringify({
        category,
        title,
        content,
        address,
      }),
    );

    // FormData에는 이미지와 JSON 데이터가 함께 포함되어 있음
    const response = await instanceWithToken.post(
      '/community',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityDetail = async (id) => {
  try {
    const response = await instanceWithToken.get(
      `/community/${id}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommunity = async (id) => {
  try {
    const response =
      await instanceWithToken.delete(
        `/community/${id}`,
      );
    return response;
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const updateCommunity = async (data) => {
  const {
    category,
    title,
    content,
    selectedImage,
    address,
  } = data;

  const formData = new FormData();
  formData.append('files', selectedImage); // 이미지를 FormData에 추가

  formData.append(
    'UpdateCommunityRequestDto',
    JSON.stringify({
      category,
      title,
      content,
      address,
    }),
  );
  try {
    const response = await instanceWithToken.post(
      `/community/${data.communityId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityComment = async (
  communityId,
  isAsc,
  page,
) => {
  try {
    const response = await instanceWithToken.get(
      `/community/${communityId}/comments`,
      {
        params: { isAsc, page },
      },
    );
    return response;
  } catch (error) {
    throw new Error(
      'failed to fetch community data',
    );
  }
};

export const createCommunityComment = async (
  newCommentValue,
) => {
  const {
    commentContent,
    communityId,
    parentCommentId,
  } = newCommentValue.newCommentValue;

  try {
    const response = await instanceWithToken.post(
      `community/${communityId}/comment`,
      { commentContent, parentCommentId },
    );
  } catch (error) {
    console.log(error);
  }
};
