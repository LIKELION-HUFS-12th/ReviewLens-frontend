import PropTypes from 'prop-types';
import styled from 'styled-components';

const FinishContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const DownloadButton = styled.button`
	padding: 10px 20px;
	/*background-color: var(--primary-color);*/
	background-color: #4c9bf5;

	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		/*background-color: var(--primary-color);*/
		/*background-color: #81baf9;*/
		background-color: #6695cb;
	}
`;

const FinishBox = ({ downloadFiles }) => {
	const handleDownload = async (path) => {
		try {
			const response = await fetch(path);
			if (!response.ok) throw new Error('파일 다운로드에 실패했습니다.');

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = '분석_리포트.pdf'; // 파일 이름 고정
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			a.remove();
		} catch (error) {
			console.error('다운로드 에러:', error);
			alert(error.message);
		}
	};

	return (
		<FinishContainer>
			<h2>분석이 완료되었습니다!</h2>

			{/* PDF 다운로드 버튼 */}
			{downloadFiles.pdf && (
				<DownloadButton onClick={() => handleDownload(downloadFiles.pdf)}>
					PDF 리포트 다운로드
				</DownloadButton>
			)}
		</FinishContainer>
	);
};

// PropTypes 정의
FinishBox.propTypes = {
	downloadFiles: PropTypes.shape({
		pdf: PropTypes.string.isRequired, // PDF 경로만 필수
	}).isRequired,
};

export default FinishBox;
