import { useState } from 'react';
import PropTypes from 'prop-types'; // PropTypes 추가
import styled from 'styled-components';
import * as XLSX from 'xlsx';
import xlsxpdf from '../assets/xlsxpdf.png';

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

const UploadBox = ({ onUploadComplete }) => {
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

	const API_BASE_URL = 'https://verynicetomato.site';

	const sendToAPI = async (jsonData, originalFile) => {
		try {
			setIsLoading(true);

			const formData = new FormData();
			formData.append('file', originalFile);

			const response = await fetch(`${API_BASE_URL}/analysis/upload/`, {
				method: 'POST',
				body: formData,
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3MzkyNDYyLCJpYXQiOjE3MzQ4MDA0NjIsImp0aSI6ImNlOTAwM2VlOGEzYjQ4Mjk5MDA2NjRhNGY5YmM0ZDkyIiwidXNlcl9pZCI6MX0.qNL8v2oD2szZwWudToFBDCEo5FANNkdFivcaav0uc7c',
				},
			});

			if (!response.ok) throw new Error('파일 업로드에 실패했습니다.');

			const result = await response.json();
			onUploadComplete(result); // 부모 컴포넌트에 업로드 완료 상태 전달
		} catch (error) {
			console.error('API 에러:', error);
			alert(error.message || '파일 업로드 중 오류가 발생했습니다.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleFile = (file) => {
		if (
			file &&
			file.type ===
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		) {
			if (file.size <= 100 * 1024 * 1024) {
				readExcel(file);
			} else {
				alert('파일 크기는 100MB를 초과할 수 없습니다.');
			}
		} else {
			alert('엑셀 파일만 업로드할 수 있습니다.');
		}
	};

	const readExcel = (file) => {
		try {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = new Uint8Array(e.target.result);
				const workbook = XLSX.read(data, { type: 'array' });
				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];
				const jsonData = XLSX.utils.sheet_to_json(worksheet);
				sendToAPI(jsonData, file);
			};
			reader.readAsArrayBuffer(file);
		} catch (error) {
			console.error('파일 읽기 오류:', error);
			alert('파일을 읽는 중 문제가 발생했습니다.');
		}
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

UploadBox.propTypes = {
	onUploadComplete: PropTypes.func.isRequired, // onUploadComplete는 필수 prop
};

export default UploadBox;
