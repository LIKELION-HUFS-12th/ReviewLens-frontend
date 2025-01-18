// src/utils/auth.js
export const setAuthTokens = (tokens) => {
	localStorage.setItem('accessToken', tokens.access);
	localStorage.setItem('refreshToken', tokens.refresh);
};

export const getAccessToken = () => {
	return localStorage.getItem('accessToken');
};

export const clearAuthTokens = () => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	localStorage.removeItem('user');
};
