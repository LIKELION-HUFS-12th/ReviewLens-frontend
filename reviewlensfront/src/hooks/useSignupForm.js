// src/hooks/useSignupForm.js

import { useState } from 'react';
import { registerUser } from '../api/auth';

export const useSignupForm = (onSuccess) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.passwordConfirm) {
			setError('비밀번호가 일치하지 않습니다.');
			return;
		}

		try {
			await registerUser({
				email: formData.email,
				username: formData.username,
				password: formData.password,
			});

			onSuccess();
		} catch (err) {
			setError(err.message);
		}
	};

	return {
		formData,
		error,
		handleChange,
		handleSubmit,
	};
};
