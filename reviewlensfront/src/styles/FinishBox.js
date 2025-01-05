import styled from 'styled-components';

export const FinishContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export const DownloadButton = styled.button`
	padding: 10px 20px;
	background-color: #4c9bf5;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #6695cb;
	}
`;

export const ResultContainer = styled.div`
	width: 100%;
	max-width: 600px;
	padding: 20px;
	border-radius: 8px;
	background-color: #f5f5f5;
	margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
	color: #ff0000;
	padding: 10px;
	text-align: center;
`;

export const LoadingMessage = styled.div`
	text-align: center;
	padding: 20px;
	color: #4c9bf5;
`;

export const ResultTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 10px;

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: #4c9bf5;
		color: white;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	tr:hover {
		background-color: #ddd;
	}
`;
