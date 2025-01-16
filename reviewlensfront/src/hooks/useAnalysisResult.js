import { useState, useEffect } from 'react';
import { fetchAnalysisResult } from '../api/analysisApi';
import { useAuth } from '../context/AuthContext';

// useAnalysisResult.js
//export const useAnalysisResult = (downloadFiles) => {
//	const [analysisResult, setAnalysisResult] = useState(null);
//	const [loading, setLoading] = useState(true);
//	const [error, setError] = useState(null);
//	const { accessToken } = useAuth();

//	const checkAnalysisResult = async () => {
//		try {
//			setLoading(true);

//			// Check if we have a file_id in the downloadFiles object
//			if (!downloadFiles?.id) {
//				throw new Error('분석 ID를 찾을 수 없습니다.');
//			}

//			// Use the file ID instead of the filename
//			const result = await fetchAnalysisResult(accessToken, downloadFiles.id);
//			setAnalysisResult(result);
//			setError(null);
//		} catch (error) {
//			console.log('분석 결과 조회 에러:', error.message);
//			setError(error.message);
//			setAnalysisResult(null);
//		} finally {
//			setLoading(false);
//		}
//	};

//	useEffect(() => {
//		if (accessToken && downloadFiles?.id) {
//			checkAnalysisResult();
//		}
//	}, [accessToken, downloadFiles]);

//	return { analysisResult, loading, error };
//};
export const useAnalysisResult = (downloadFiles) => {
	const [analysisResult, setAnalysisResult] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const { accessToken } = useAuth();

	const checkAnalysisResult = async () => {
		try {
			setLoading(true);

			// Check if downloadFiles has an ID
			if (!downloadFiles?.id) {
				throw new Error('분석 ID를 찾을 수 없습니다.');
			}

			// Fetch analysis result
			const result = await fetchAnalysisResult(accessToken, downloadFiles.id);
			console.log('Fetched Analysis Result:', result);

			// Handle API response structure
			setAnalysisResult(result.data || []);
			setError(null);
		} catch (error) {
			console.error('분석 결과 조회 에러:', error);
			setError(
				error.response?.data?.message || error.message || '알 수 없는 에러'
			);
			setAnalysisResult(null);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (accessToken && downloadFiles?.id) {
			console.log('DownloadFiles:', downloadFiles);
			checkAnalysisResult();
		}
	}, [accessToken, downloadFiles]);

	return { analysisResult, loading, error };
};
