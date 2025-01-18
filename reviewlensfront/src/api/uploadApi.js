//// src/api/uploadApi.js
//export const API_BASE_URL = 'https://verynicetomato.site';
//export const TOKEN =
//	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3MzkyNDYyLCJpYXQiOjE3MzQ4MDA0NjIsImp0aSI6ImNlOTAwM2VlOGEzYjQ4Mjk5MDA2NjRhNGY5YmM0ZDkyIiwidXNlcl9pZCI6MX0.qNL8v2oD2szZwWudToFBDCEo5FANNkdFivcaav0uc7c';

//export const uploadFile = async (formData) => {
//	const response = await fetch(`${API_BASE_URL}/analysis/upload/`, {
//		method: 'POST',
//		body: formData,
//		headers: {
//			Authorization: TOKEN,
//		},
//	});

//	const data = await response.json();

//	if (!response.ok) {
//		console.log('서버 응답:', data); // 디버깅용
//		throw new Error(data.error || '파일 업로드에 실패했습니다.');
//	}

//	return data;
//};
import { API_BASE_URL } from './config';

export const uploadFile = async (formData, accessToken) => {
	const response = await fetch(`${API_BASE_URL}/analysis/upload/`, {
		method: 'POST',
		body: formData,
		headers: {
			Authorization: `Bearer ${accessToken}`, // 동적으로 토큰 추가
		},
	});

	const data = await response.json();

	if (!response.ok) {
		console.log('서버 응답:', data); // 디버깅용
		throw new Error(data.error || '파일 업로드에 실패했습니다.');
	}

	return data;
};
