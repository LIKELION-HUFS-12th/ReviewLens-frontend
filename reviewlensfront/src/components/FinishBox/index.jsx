import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAnalysisResult } from '../../hooks/useAnalysisResult';
import { handleFileDownload } from '../../utils/analysisUtils';
import FinishBoxPresenter from './FinishBoxPresenter';
import { useAuth } from '../../context/AuthContext';

const FinishBox = ({ downloadFiles, onReset }) => {
	const { analysisResult, isLoading, error } = useAnalysisResult(downloadFiles);
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [isDownloading, setIsDownloading] = useState(false);
	const [downloadSuccess, setDownloadSuccess] = useState(false);
	const { accessToken } = useAuth();

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleDownload = async () => {
		try {
			setIsDownloading(true);
			await handleFileDownload(accessToken);
			setDownloadSuccess(true);
		} catch (error) {
			console.error('파일 다운로드 중 오류 발생:', error);
			// 에러 처리를 위한 상태 추가 가능
		} finally {
			setIsDownloading(false);
		}
	};

	const handleReset = () => {
		setIsModalOpen(false);
		if (onReset) {
			onReset();
		}
	};

	return (
		isModalOpen && (
			<FinishBoxPresenter
				downloadFiles={downloadFiles}
				analysisResult={analysisResult}
				isLoading={isLoading}
				error={error}
				onDownload={handleDownload}
				onClose={closeModal}
				accessToken={accessToken}
				isDownloading={isDownloading}
				downloadSuccess={downloadSuccess}
				onReset={handleReset}
			/>
		)
	);
};

FinishBox.propTypes = {
	downloadFiles: PropTypes.shape({
		file_path: PropTypes.string,
		message: PropTypes.string,
		pdf_report_path: PropTypes.string,
	}).isRequired,
	onReset: PropTypes.func,
};

export default FinishBox;
