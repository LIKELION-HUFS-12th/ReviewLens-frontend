//src/utils/axios.js

import axios from 'axios';
import { getAccessToken } from './auth';

const api = axios.create({
	baseURL: 'https://verynicetomato.site',
});

api.interceptors.request.use((config) => {
	const token = getAccessToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;
