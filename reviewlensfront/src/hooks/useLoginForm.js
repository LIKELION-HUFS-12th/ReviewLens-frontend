// src/hooks/useLoginForm.js
import { useState } from 'react';
import { loginUser } from '../api/auth';

export const useLoginForm = (onLoginSuccess) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			console.log('Sending login data:', {
				email: formData.email,
				password: formData.password,
			});

			const response = await loginUser({
				email: formData.email,
				password: formData.password,
			});

			// 로그인 성공 후 토큰 저장
			if (response.access) {
				localStorage.setItem('accessToken', response.access);
				localStorage.setItem('refreshToken', response.refresh);
			}

			onLoginSuccess(response);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return {
		formData,
		error,
		handleChange,
		handleSubmit,
	};
};
