import PropTypes from 'prop-types';
import { Loader, X, Check, RotateCcw } from 'lucide-react';
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

const FinishBoxPresenter = ({
	downloadFiles,
	analysisResult,
	isLoading,
	error,
	onDownload,
	onClose,
	accessToken,
	isDownloading,
	downloadSuccess,
	onReset,
}) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	// 다운로드 완료 후 표시될 화면
	if (downloadSuccess) {
		return (
			<ModalOverlay onClick={onClose}>
				<ModalContent onClick={(e) => e.stopPropagation()}>
					<CloseButton onClick={onClose}>
						<X size={20} />
					</CloseButton>
					<CardHeader>
						<div className='flex items-center justify-center gap-2'>
							<Check size={24} className='text-green-500' />
							<h2>다운로드가 완료되었습니다!</h2>
						</div>
					</CardHeader>
					<div className='p-6 flex flex-col items-center gap-4'>
						<p> &nbsp; &nbsp; 다운로드한 PDF 파일을 확인해 주세요.</p>
						<div className='flex gap-4'>
							<StyledButton onClick={onReset}>
								<RotateCcw size={16} className='mr-2' />
								새로운 분석하기
							</StyledButton>
						</div>
					</div>
				</ModalContent>
			</ModalOverlay>
		);
	}

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
										<p className='text-center text-gray-500 text-sm mt-2'>
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
				<StyledButton
					onClick={() => onDownload(accessToken)}
					disabled={isDownloading}
				>
					{isDownloading ? (
						<>
							<Loader size={16} className='animate-spin mr-2' />
							다운로드 중...
						</>
					) : (
						'PDF 리포트 다운로드'
					)}
				</StyledButton>
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
	accessToken: PropTypes.string.isRequired,
	isDownloading: PropTypes.bool,
	downloadSuccess: PropTypes.bool,
	onReset: PropTypes.func.isRequired,
};

export default FinishBoxPresenter;
