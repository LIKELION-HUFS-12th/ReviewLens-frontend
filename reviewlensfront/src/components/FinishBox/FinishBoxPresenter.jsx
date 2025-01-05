//src/components/FinishBox/FinishBoxPresenter.jsx
import PropTypes from 'prop-types';
import {
	FinishContainer,
	ResultContainer,
	ErrorMessage,
	LoadingMessage,
	ResultTable,
	DownloadButton,
} from '../../styles/FinishBox';

const FinishBoxPresenter = ({
	downloadFiles,
	analysisResult,
	isLoading,
	error,
	onDownload,
}) => {
	return (
		<FinishContainer>
			<h2>분석이 완료되었습니다!</h2>

			<ResultContainer>
				<h3>분석 파일 정보</h3>
				<p>파일명: {downloadFiles?.file_path?.split('/').pop()}</p>
				<p>상태: {downloadFiles?.message}</p>

				{error && <ErrorMessage>{error}</ErrorMessage>}

				{isLoading ? (
					<LoadingMessage>분석 결과 로딩 중...</LoadingMessage>
				) : (
					analysisResult && (
						<div>
							<h4>감성 분석 결과</h4>
							{analysisResult.length > 0 ? (
								<>
									<p>총 분석된 항목: {analysisResult.length}개</p>
									<ResultTable>
										<thead>
											<tr>
												<th>상품명</th>
												<th>리뷰 내용</th>
												<th>감성 분석</th>
											</tr>
										</thead>
										<tbody>
											{analysisResult.slice(0, 5).map((item, index) => (
												<tr key={index}>
													<td>{item.product_name}</td>
													<td>{item.original_content?.substring(0, 50)}...</td>
													<td>{item.document_sentiment}</td>
												</tr>
											))}
										</tbody>
									</ResultTable>
									{analysisResult.length > 5 && (
										<p style={{ textAlign: 'center', marginTop: '10px' }}>
											* 처음 5개 항목만 표시됨
										</p>
									)}
								</>
							) : (
								<p>분석된 데이터가 없습니다.</p>
							)}
						</div>
					)
				)}
			</ResultContainer>

			{/*{downloadFiles?.pdf_report_path && (*/}
			<DownloadButton onClick={onDownload}>PDF 리포트 다운로드</DownloadButton>
		</FinishContainer>
	);
};
FinishBoxPresenter.propTypes = {
	downloadFiles: PropTypes.shape({
		file_path: PropTypes.string,
		message: PropTypes.string,
		pdf_report_path: PropTypes.string,
	}),
	analysisResult: PropTypes.arrayOf(
		PropTypes.shape({
			product_name: PropTypes.string,
			original_content: PropTypes.string,
			document_sentiment: PropTypes.string,
		})
	),
	isLoading: PropTypes.bool,
	error: PropTypes.string,
	onDownload: PropTypes.func.isRequired,
};

export default FinishBoxPresenter;
