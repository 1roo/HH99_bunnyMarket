import { instanceWithoutHeaders, instanceWithToken } from './axios';

export const sendPhoneNumber = async (phoneNumber, endpoint) => {
  try {
    const response = await instanceWithoutHeaders.post(`/${endpoint}`, {
      phoneNumber: phoneNumber
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const checkPhoneNumber = async ({ phoneNumber, verificationCode }, endpoint) => {
  try {
    const response = await instanceWithoutHeaders.post(`/${endpoint}`, {
      phoneNumber,
      verificationCode,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signUp = async (formData) => {
  try {
    const response = await instanceWithoutHeaders.post(`/user/signup`, formData, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


export const getInfo = async () => {
  try {
    const response = await instanceWithToken.get(`user/info`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


export const updateInfo = async (formData) => {
  try {
    const response = await instanceWithToken.post(`user/update`, formData, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};