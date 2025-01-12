//src/components/UploadBox/index.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';
import * as XLSX from 'xlsx';
import { uploadFile } from '../../api/uploadApi';
import UploadBoxPresenter from './UploadBoxPresenter';

const UploadBox = ({ onUploadComplete }) => {
	const [isActive, setActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleDragStart = () => setActive(true);
	const handleDragEnd = () => setActive(false);
	const handleDragOver = (event) => event.preventDefault();

	const handleDrop = (event) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		handleFile(file);
		setActive(false);
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		handleFile(file);
	};

	const handleFileUpload = async (file) => {
		try {
			setIsLoading(true);
			const formData = new FormData();
			formData.append('file', file);

			const result = await uploadFile(formData);
			onUploadComplete(result);
		} catch (error) {
			console.error('업로드 에러:', error);
			alert(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleFile = (file) => {
		if (!file) return;

		if (
			file.type !==
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		) {
			alert('엑셀 파일만 업로드할 수 있습니다.');
			return;
		}

		if (file.size > 100 * 1024 * 1024) {
			alert('파일 크기는 100MB를 초과할 수 없습니다.');
			return;
		}

		validateExcelAndUpload(file);
	};

	const validateExcelAndUpload = (file) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const data = new Uint8Array(e.target.result);
				XLSX.read(data, { type: 'array' });
				handleFileUpload(file);
			} catch (error) {
				console.error('파일 읽기 오류:', error);
				alert('올바른 엑셀 파일 형식이 아닙니다.');
			}
		};
		reader.onerror = () => {
			alert('파일을 읽는 중 오류가 발생했습니다.');
		};
		reader.readAsArrayBuffer(file);
	};

	return (
		<UploadBoxPresenter
			isActive={isActive}
			isLoading={isLoading}
			handleDragStart={handleDragStart}
			handleDragEnd={handleDragEnd}
			handleDragOver={handleDragOver}
			handleDrop={handleDrop}
			handleFileChange={handleFileChange}
		/>
	);
};

UploadBox.propTypes = {
	onUploadComplete: PropTypes.func.isRequired,
};

export default UploadBox;
