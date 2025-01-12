// src/api/auth.js
export const API_BASE_URL = 'https://verynicetomato.site';
export const registerUser = async (userData) => {
	try {
		const response = await fetch(`${API_BASE_URL}/member/register/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: userData.email,
				username: userData.username,
				password: userData.password,
				agreement: true, // Boolean 값으로 변경
			}),
		});

		if (!response.ok) {
			throw new Error('회원가입에 실패했습니다.');
		}

		return await response.json();
	} catch (error) {
		throw new Error(error.message);
	}
};

export const loginUser = async (credentials) => {
	try {
		const response = await fetch(`${API_BASE_URL}/member/login/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || '로그인에 실패했습니다.');
		}

		return await response.json();
	} catch (error) {
		console.error('Login error details:', error.message);
		throw new Error(error.message || '로그인에 실패했습니다.');
	}
};
