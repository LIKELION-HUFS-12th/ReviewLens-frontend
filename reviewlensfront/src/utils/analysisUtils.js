//src/utils/analysisUtils.js
import { downloadPdfReport } from '../api/analysisApi';

export const getSentimentCounts = (analysisResult) => {
	if (!analysisResult) return { positive: 0, negative: 0 };
	return analysisResult.reduce((acc, item) => {
		acc[item.document_sentiment] = (acc[item.document_sentiment] || 0) + 1;
		return acc;
	}, {});
};

export const handleFileDownload = async () => {
	try {
		const blob = await downloadPdfReport();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = '분석_리포트.pdf'; // 기본 파일명 설정
		document.body.appendChild(a);
		a.click();

		// 클린업
		setTimeout(() => {
			window.URL.revokeObjectURL(url);
			a.remove();
		}, 100);
	} catch (error) {
		console.error('다운로드 처리 에러:', error.message);
		alert(error.message);
	}
};
