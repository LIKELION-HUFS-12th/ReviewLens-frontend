import { useState } from 'react';
import UploadBox2 from '../components/UploadBox2';
import FinishBox from '../components/FinishBox';
import { Body, ContentBox } from '../styles/Homestyles';

export default function Home() {
	const [uploadComplete, setUploadComplete] = useState(false);
	const [downloadFiles, setDownloadFiles] = useState({
		excel: null,
		pdf: null,
	});

	const handleUploadComplete = (files) => {
		setDownloadFiles(files);
		setUploadComplete(true); // 업로드 완료 상태로 전환
	};

	return (
		<Body>
			<ContentBox>
				{!uploadComplete ? (
					<UploadBox2 onUploadComplete={handleUploadComplete} />
				) : (
					<FinishBox downloadFiles={downloadFiles} />
				)}
			</ContentBox>
		</Body>
	);
}

//import { useState } from 'react';
//import UploadBox from '../components/UploadBox';
//import FinishBox from '../components/FinishBox';
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
