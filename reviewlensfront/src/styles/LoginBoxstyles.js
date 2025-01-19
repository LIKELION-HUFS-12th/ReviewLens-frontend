import styled from 'styled-components';

export const LoginBoxs = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	font-size: 2rem;
	font-weight: 900;
	justify-content: center;

	p {
		font-size: 1rem;
		font-weight: 500;
		gap: 0;
	}

	a {
		margin-left: 10px;
		font-size: 1rem;
		color: #81baf9;
		cursor: pointer;
	}
`;
export const SignUpBoxs = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	font-size: 30px;
	font-weight: 900;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 50px;
	gap: 20px;

	p {
		font-size: 20px;
		font-weight: 500;
		gap: 0;
	}

	a {
		margin-left: 10px;
		font-size: 18px;
		color: #81baf9;
		cursor: pointer;
	}
`;

export const IdBox = styled.div`
	display: flex;
	/*gap: 20px;*/
	align-items: center;
	justify-content: space-between;
	margin: 10px;
	width: 100%;
	font-weight: 500;
	font-size: 1.1rem;
`;
export const IdInput = styled.input`
	display: flex;
	align-items: center;
	height: 25px;
	width: 20rem;
	border: 0.01px solid #ccc; /* 테두리 추가 */
	box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.1);
	outline: none;
	font-size: 1.05rem;
	border-radius: 8px;
	margin-left: 2rem;
	padding: 0.8rem;
	padding-left: 10px;
`;

export const ParentLoginBox = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const LoginButton = styled.button`
	width: 76px;
	height: auto;
	font-size: 18px;
	font-weight: 500;
	/*background-color: var(--primary-color);*/
	background-color: #81baf9;
	box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
	color: white;
	padding: 6.5px;
	margin-top: 5px;
	cursor: pointer;
`;
export const SignUpButton = styled.button`
	width: 85px;
	height: auto;
	font-size: 18px;
	font-weight: 500;
	/*background-color: var(--primary-color);*/
	background-color: #81baf9;
	box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
	color: white;
	padding: 6.5px;
	margin-top: 5px;
	cursor: pointer;
`;
