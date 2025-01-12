//import { useState } from 'react';
//import LoginBox from '../components/LoginBox/LoginBox';
//import SignupBox from '../components/LoginBox/SignupBox';
//import { Body, ContentBox, ContentBox2 } from '../styles/Homestyles';

//const handleLoginSuccess = (response) => {
//  // 로그인 성공 후 처리
//  // 예: 메인 페이지로 이동
//  console.log('로그인 성공:', response);
//  // navigate('/main'); // React Router를 사용하는 경우
//};

//const Login = () => {
//	const [isLogin, setIsLogin] = useState(true);

//	const toggleMode = () => {
//		setIsLogin(!isLogin);
//	};

//	return (
//		<Body>
//			{isLogin ? (
//				<ContentBox>
//<LoginBox
//  onToggle={toggleMode}
//  onLoginSuccess={handleLoginSuccess}
///>
//				</ContentBox>
//			) : (
//				<ContentBox2>
//					<SignupBox onToggle={toggleMode} />
//				</ContentBox2>
//			)}
//		</Body>
//	);
//};

//export default Login;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBox from '../components/LoginBox/LoginBox';
import SignupBox from '../components/LoginBox/SignupBox';
import { Body, ContentBox, ContentBox2 } from '../styles/Homestyles';

const Login = () => {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState('');

	// 로그인/회원가입 모드 전환
	const toggleMode = () => {
		setIsLogin(!isLogin);
		setError(''); // 모드 전환시 에러 메시지 초기화
	};

	// 로그인 성공 처리
	const handleLoginSuccess = (response) => {
		try {
			// 토큰 저장
			localStorage.setItem('accessToken', response.access);
			localStorage.setItem('refreshToken', response.refresh);

			// 사용자 정보 저장
			localStorage.setItem('user', JSON.stringify(response.user));

			// 로그인 성공 후 메인 페이지로 이동
			navigate('/');
		} catch (err) {
			setError('로그인 처리 중 오류가 발생했습니다.');
			console.error('Login handling error:', err);
		}
	};

	// 회원가입 성공 처리
	const handleSignupSuccess = () => {
		// 회원가입 성공 시 로그인 모드로 전환
		setIsLogin(true);
		alert('로그인 성공!');
	};

	// 에러 처리
	const handleError = (error) => {
		setError(error.message);
	};

	return (
		<Body>
			{error && (
				<div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
			)}
			{isLogin ? (
				<ContentBox>
					<LoginBox
						onToggle={toggleMode}
						onLoginSuccess={handleLoginSuccess}
						onError={handleError}
					/>
				</ContentBox>
			) : (
				<ContentBox2>
					<SignupBox
						onToggle={toggleMode}
						onSignupSuccess={handleSignupSuccess}
						onError={handleError}
					/>
				</ContentBox2>
			)}
		</Body>
	);
};

export default Login;
