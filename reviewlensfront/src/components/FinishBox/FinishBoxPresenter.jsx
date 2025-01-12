// FinishBoxPresenter.jsx
import PropTypes from 'prop-types';
import { Loader, X } from 'lucide-react';
import { useEffect } from 'react';
import {
	CardHeader,
	CloseButton,
	ErrorAlert,
	InfoSection,
	LoaderContainer,
	ModalContent,
	ModalOverlay,
	ScrollableContainer,
	StyledButton,
	Table,
	Badge,
} from '../../styles/Modal.js';

// 수정: FinishBoxPresenter 컴포넌트에 모달 관련 로직 추가
const FinishBoxPresenter = ({
	downloadFiles,
	analysisResult,
	isLoading,
	error,
	onDownload,
	onClose,
}) => {
	// 모달이 열릴 때 스크롤 방지
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>
					<X size={20} />
				</CloseButton>

				<CardHeader>
					<h2>분석이 완료되었습니다!</h2>
				</CardHeader>

				<InfoSection>
					<h3>분석 파일 정보</h3>
					<p>파일명: {downloadFiles?.file_path?.split('/').pop()}</p>
					<p>
						상태: <Badge variant='outline'>{downloadFiles?.message}</Badge>
					</p>
				</InfoSection>

				{error && <ErrorAlert>{error}</ErrorAlert>}

				{isLoading ? (
					<LoaderContainer>
						<Loader size={24} className='animate-spin' />
						<span style={{ marginLeft: '12px' }}>분석 결과 로딩 중...</span>
					</LoaderContainer>
				) : (
					analysisResult && (
						<div style={{ padding: '16px' }}>
							<h4
								style={{
									fontSize: '18px',
									fontWeight: '600',
									marginBottom: '12px',
								}}
							>
								감성 분석 결과
							</h4>
							{analysisResult.length > 0 ? (
								<>
									<p style={{ marginBottom: '16px' }}>
										총 분석된 항목:{' '}
										<Badge variant='outline'>{analysisResult.length}개</Badge>
									</p>
									<ScrollableContainer>
										<Table>
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
														<td>
															{item.original_content?.substring(0, 50)}...
														</td>
														<td>
															<Badge variant={item.document_sentiment}>
																{item.document_sentiment}
															</Badge>
														</td>
													</tr>
												))}
											</tbody>
										</Table>
									</ScrollableContainer>
									{analysisResult.length > 5 && (
										<p
											style={{
												textAlign: 'center',
												color: '#666',
												fontSize: '14px',
												marginTop: '8px',
											}}
										>
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

				<StyledButton onClick={onDownload}>PDF 리포트 다운로드</StyledButton>
			</ModalContent>
		</ModalOverlay>
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
	onClose: PropTypes.func.isRequired,
};

export default FinishBoxPresenter;
