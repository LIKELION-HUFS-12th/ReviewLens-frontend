import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	background: white;
	border-radius: 12px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
	width: 90%;
	max-width: 800px;
	max-height: 90vh;
	overflow-y: auto;
	position: relative;
	animation: slideIn 0.3s ease-out;

	@keyframes slideIn {
		from {
			transform: translateY(-20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	background: none;
	border: none;
	cursor: pointer;
	color: #666;
	padding: 4px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f0f0f0;
	}
`;

// 기존 스타일 컴포넌트들...
export const CardHeader = styled.div`
	padding: 24px 48px 24px 24px; // 오른쪽 패딩 증가 (X 버튼 공간)
	text-align: center;
	border-bottom: 1px solid #eee;

	h2 {
		color: #4c9bf5;
		font-size: 24px;
		margin: 0;
	}
`;

export const InfoSection = styled.div`
	background: #f8f9fa;
	padding: 16px;
	margin: 16px;
	border-radius: 8px;
`;

export const Badge = styled.span`
	display: inline-block;
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 14px;
	background: ${(props) =>
		props.variant === 'positive'
			? '#e6f4ea'
			: props.variant === 'neutral'
			? '#fff4e5'
			: props.variant === 'outline'
			? '#b3d8f1'
			: '#fce8e8'};
	color: ${(props) =>
		props.variant === 'positive'
			? '#137333'
			: props.variant === 'neutral'
			? '#d47300'
			: props.variant === 'outline'
			? '#1f4591'
			: '#c5221f'};
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	margin: 16px 0;

	th {
		background: #f8f9fa;
		color: #444;
		font-weight: 600;
		text-align: left;
		padding: 12px;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	td {
		padding: 12px;
		border-bottom: 1px solid #eee;
	}

	tr:hover td {
		background: #f8f9fa;
	}
`;

export const ScrollableContainer = styled.div`
	max-height: 300px;
	overflow-y: auto;
	margin: 16px;
	border: 1px solid #eee;
	border-radius: 8px;
`;

export const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 32px;
	color: #4c9bf5;
`;

export const StyledButton = styled.button`
	width: calc(100% - 32px);
	max-width: 400px;
	margin: 16px auto;
	display: block;
	padding: 12px 24px;
	background-color: #4c9bf5;
	color: white;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #3a8de4;
	}
`;

export const ErrorAlert = styled.div`
	background-color: #fce8e8;
	color: #c5221f;
	padding: 12px;
	border-radius: 8px;
	margin: 16px;
`;
