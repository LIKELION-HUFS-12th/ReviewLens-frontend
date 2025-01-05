//src/components/FinishBox/index.jsx
import PropTypes from 'prop-types';
import { useAnalysisResult } from '../../hooks/useAnalysisResult';
import { handleFileDownload } from '../../utils/analysisUtils';
import FinishBoxPresenter from './FinishBoxPresenter';

const FinishBox = ({ downloadFiles }) => {
	const { analysisResult, isLoading, error } = useAnalysisResult(downloadFiles);

	return (
		<FinishBoxPresenter
			downloadFiles={downloadFiles}
			analysisResult={analysisResult}
			isLoading={isLoading}
			error={error}
			onDownload={handleFileDownload}
		/>
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
