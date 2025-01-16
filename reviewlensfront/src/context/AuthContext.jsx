import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(
		localStorage.getItem('accessToken') || ''
	);

	useEffect(() => {
		const handleStorageChange = () => {
			const token = localStorage.getItem('accessToken');
			setAccessToken(token || ''); // 토큰 업데이트
		};

		window.addEventListener('storage', handleStorageChange);
		return () => window.removeEventListener('storage', handleStorageChange);
	}, []);

	const login = (token) => {
		localStorage.setItem('accessToken', token);
		setAccessToken(token);
	};

	const logout = () => {
		localStorage.removeItem('accessToken');
		setAccessToken('');
	};

	return (
		<AuthContext.Provider value={{ accessToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
