// src/api/analysisApi.js
export const API_BASE_URL = 'https://verynicetomato.site';

export const TOKEN =
	'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3MzkyNDYyLCJpYXQiOjE3MzQ4MDA0NjIsImp0aSI6ImNlOTAwM2VlOGEzYjQ4Mjk5MDA2NjRhNGY5YmM0ZDkyIiwidXNlcl9pZCI6MX0.qNL8v2oD2szZwWudToFBDCEo5FANNkdFivcaav0uc7c';

export const fetchAnalysisResult = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/analysis/result/`, {
			method: 'GET',
			headers: {
				Authorization: TOKEN,
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			if (response.status === 401) {
				throw new Error('인증 오류: 다시 로그인하세요.');
			} else if (response.status === 404) {
				throw new Error('분석 결과를 찾을 수 없습니다.');
			}
			throw new Error(`분석 결과 조회 실패: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Analysis result error:', error);
		throw error;
	}
};

export const downloadPdfReport = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/analysis/download/`, {
			method: 'GET',
			headers: {
				Authorization: TOKEN,
				'Content-Type': 'application/pdf',
			},
		});

		if (!response.ok) {
			if (response.status === 404) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'PDF 파일을 찾을 수 없습니다.');
			}
			throw new Error(`파일 다운로드 실패: ${response.status}`);
		}

		const blob = await response.blob();
		return blob;
	} catch (error) {
		console.error('PDF 다운로드 에러:', error);
		throw error;
	}
};
