import { useState, useEffect } from 'react';
import { fetchAnalysisResult } from '../api/analysisApi';

export const useAnalysisResult = (downloadFiles) => {
	const [analysisResult, setAnalysisResult] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;

		const checkAnalysisResult = async () => {
			try {
				setError(null);
				const data = await fetchAnalysisResult();
				if (mounted) {
					setAnalysisResult(data);
				}
			} catch (error) {
				console.error('분석 결과 조회 에러:', error.message);
				if (mounted) {
					setError(error.message);
				}
			} finally {
				if (mounted) {
					setIsLoading(false);
				}
			}
		};

		if (downloadFiles?.pdf_report_path) {
			checkAnalysisResult();
		} else {
			setIsLoading(false);
		}

		return () => {
			mounted = false;
		};
	}, [downloadFiles]);

	return { analysisResult, isLoading, error };
};
