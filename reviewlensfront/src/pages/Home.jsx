//import { useState } from 'react';
//import UploadBox from '../components/UploadBox';
//import FinishBox from '../components/FinishBox/FinishBoxPresenter';
//import { Body, ContentBox } from '../styles/Homestyles';

//export default function Home() {
//	const [uploadComplete, setUploadComplete] = useState(false);
//	const [downloadFiles, setDownloadFiles] = useState({
//		excel: null,
//		pdf: null,
//	});

//	const handleUploadComplete = (files) => {
//		setDownloadFiles(files);
//		setUploadComplete(true); // 업로드 완료 상태로 전환
//	};

//	return (
//		<Body>
//			<ContentBox>
//				{!uploadComplete ? (
//					<UploadBox onUploadComplete={handleUploadComplete} />
//				) : (
//					<FinishBox downloadFiles={downloadFiles} />
//				)}
//			</ContentBox>
//		</Body>
//	);
//}
// src/pages/Home.jsx

import { useState } from 'react';
import UploadBox from '../components/UploadBox/index.jsx'; // .jsx 확장자 명시
import FinishBox from '../components/FinishBox/index.jsx'; // .jsx 확장자 명시
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

	return (
		<Body>
			<ContentBox>
				{!uploadComplete ? (
					<UploadBox onUploadComplete={handleUploadComplete} />
				) : (
					<FinishBox downloadFiles={downloadFiles} />
				)}
			</ContentBox>
		</Body>
	);
}
