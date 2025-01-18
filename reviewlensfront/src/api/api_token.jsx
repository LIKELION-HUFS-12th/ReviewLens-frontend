// src/api/api_token.jsx

import axios from 'axios';

const API_URL = 'https://verynicetomato.site';

const api = axios.create({
  baseURL: API_URL,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // localStorage에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
