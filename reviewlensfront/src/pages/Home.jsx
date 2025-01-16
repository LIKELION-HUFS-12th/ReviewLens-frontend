import { useState } from 'react';
import UploadBox from '../components/UploadBox/index.jsx';
import FinishBox from '../components/FinishBox/index.jsx';
import { Body, ContentBox } from '../styles/Homestyles';

export default function Home() {
	const [uploadComplete, setUploadComplete] = useState(false);
	const [downloadFiles, setDownloadFiles] = useState({
		message: '',
		file_path: '',
		pdf_report_path: '',
	});

	const handleUploadComplete = (response) => {
		setDownloadFiles({
			message: response.message,
			file_path: response.file_path,
			pdf_report_path: response.pdf_report_path,
		});
		setUploadComplete(true);
	};

	const handleReset = () => {
		// 초기 상태로 리셋
		setUploadComplete(false);
		setDownloadFiles({
			message: '',
			file_path: '',
			pdf_report_path: '',
		});
	};

	return (
		<Body>
			<ContentBox>
				{!uploadComplete ? (
					<UploadBox onUploadComplete={handleUploadComplete} />
				) : (
					<FinishBox downloadFiles={downloadFiles} onReset={handleReset} />
				)}
			</ContentBox>
		</Body>
	);
}
