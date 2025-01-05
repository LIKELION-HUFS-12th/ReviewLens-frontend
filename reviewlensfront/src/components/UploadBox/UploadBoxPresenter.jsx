//src/components/UploadBox/UploadBoxPresenter.jsx
import PropTypes from 'prop-types';
import xlsxpdf from '../../assets/xlsxpdf.png';
import {
	UploadContainer,
	UpFile,
	LoadingOverlay,
} from '../../styles/UploadBox';

const UploadBoxPresenter = ({
	isActive,
	isLoading,
	handleDragStart,
	handleDragEnd,
	handleDragOver,
	handleDrop,
	handleFileChange,
}) => {
	return (
		<UploadContainer>
			<div style={{ position: 'relative' }}>
				<label
					className={`preview${isActive ? ' active' : ''}`}
					onDragEnter={handleDragStart}
					onDragOver={handleDragOver}
					onDragLeave={handleDragEnd}
					onDrop={handleDrop}
				>
					<img
						src={xlsxpdf}
						alt='xlsx to pdf'
						style={{ width: '230px', height: 'auto', paddingBottom: '50px' }}
					/>
					<UpFile
						type='file'
						onChange={handleFileChange}
						accept='.xlsx'
						disabled={isLoading}
					/>
					<p>엑셀 파일(.xlsx) 업로드 최대 100MB</p>
				</label>
				{isLoading && (
					<LoadingOverlay>
						<p>업로드 중...</p>
					</LoadingOverlay>
				)}
			</div>
		</UploadContainer>
	);
};

UploadBoxPresenter.propTypes = {
	isActive: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	handleDragStart: PropTypes.func.isRequired,
	handleDragEnd: PropTypes.func.isRequired,
	handleDragOver: PropTypes.func.isRequired,
	handleDrop: PropTypes.func.isRequired,
	handleFileChange: PropTypes.func.isRequired,
};

export default UploadBoxPresenter;
