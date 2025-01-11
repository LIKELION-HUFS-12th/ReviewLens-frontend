// 전체 api url과 token - Contacts에 사용.

import axios from 'axios';

const API_URL = 'https://verynicetomato.site';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3MzkyNDYyLCJpYXQiOjE3MzQ4MDA0NjIsImp0aSI6ImNlOTAwM2VlOGEzYjQ4Mjk5MDA2NjRhNGY5YmM0ZDkyIiwidXNlcl9pZCI6MX0.qNL8v2oD2szZwWudToFBDCEo5FANNkdFivcaav0uc7c';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

export default api;
