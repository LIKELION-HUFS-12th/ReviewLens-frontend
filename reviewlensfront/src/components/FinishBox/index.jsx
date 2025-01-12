import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { useAnalysisResult } from '../../hooks/useAnalysisResult';
import { handleFileDownload } from '../../utils/analysisUtils';
import FinishBoxPresenter from './FinishBoxPresenter';

const FinishBox = ({ downloadFiles }) => {
	const { analysisResult, isLoading, error } = useAnalysisResult(downloadFiles);
	const [isModalOpen, setIsModalOpen] = useState(true);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		isModalOpen && (
			<FinishBoxPresenter
				downloadFiles={downloadFiles}
				analysisResult={analysisResult}
				isLoading={isLoading}
				error={error}
				onDownload={handleFileDownload}
				onClose={closeModal}
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
};

export default FinishBox;
