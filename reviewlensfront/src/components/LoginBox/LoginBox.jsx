import PropTypes from 'prop-types';
import {
	IdBox,
	IdInput,
	LoginBoxs,
	LoginButton,
	ParentLoginBox,
} from '../../styles/LoginBoxstyles';
import { useLoginForm } from '../../hooks/useLoginForm';

const LoginBox = ({ onToggle, onLoginSuccess }) => {
	const { formData, error, handleChange, handleSubmit } =
		useLoginForm(onLoginSuccess);

	return (
		<LoginBoxs>
			로그인
			<p>
				신규 사용자 입니까? <a onClick={onToggle}>계정 만들기</a>
			</p>
			<form onSubmit={handleSubmit}>
				<IdBox>
					이메일 주소:
					<IdInput
						name='email'
						type='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='이메일'
					/>
				</IdBox>
				<IdBox>
					비밀번호:
					<IdInput
						name='password'
						type='password'
						value={formData.password}
						onChange={handleChange}
						placeholder='비밀번호'
					/>
				</IdBox>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<ParentLoginBox>
					<LoginButton type='submit'>로그인</LoginButton>
				</ParentLoginBox>
			</form>
		</LoginBoxs>
	);
};

LoginBox.propTypes = {
	onToggle: PropTypes.func.isRequired,
	onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginBox;
