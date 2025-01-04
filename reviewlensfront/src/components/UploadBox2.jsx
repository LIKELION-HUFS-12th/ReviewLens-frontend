import { useState } from 'react';
import PropTypes from 'prop-types'; // PropTypes 추가
import styled from 'styled-components';
import xlsxpdf from '../assets/xlsxpdf.png';

// 스타일 컴포넌트 정의
const UploadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const UpFile = styled.input`
	display: flex;
	justify-content: space-between;
`;

const LoadingOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UploadBox2 = ({ onUploadComplete }) => {
	const [isActive, setActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleDragStart = () => setActive(true);
	const handleDragEnd = () => setActive(false);

	const handleDrop = (event) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		handleFile(file);
		setActive(false);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		handleFile(file);
	};

	const handleFile = (file) => {
		if (
			file &&
			file.type ===
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		) {
			if (file.size <= 100 * 1024 * 1024) {
				fakeUpload(file);
			} else {
				alert('파일 크기는 100MB를 초과할 수 없습니다.');
			}
		} else {
			alert('엑셀 파일만 업로드할 수 있습니다.');
		}
	};

	const fakeUpload = (file) => {
		setIsLoading(true);

		setTimeout(() => {
			const fakeResponse = {
				excel: '/fake/path/to/excel/file.xlsx',
				pdf: '/fake/path/to/pdf/report.pdf',
			};

			onUploadComplete(fakeResponse);
			setIsLoading(false);
		}, 2000);
	};

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

// PropTypes를 사용한 props 검증
UploadBox2.propTypes = {
	onUploadComplete: PropTypes.func.isRequired, // 함수 타입이며 필수 props
};

export default UploadBox2;
