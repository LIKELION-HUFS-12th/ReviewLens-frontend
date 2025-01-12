import PropTypes from 'prop-types';
import {
	IdBox,
	IdInput,
	SignUpBoxs,
	ParentLoginBox,
	SignUpButton,
} from '../../styles/LoginBoxstyles';
import { useSignupForm } from '../../hooks/useSignupForm';

const SignupBox = ({ onToggle }) => {
	const { formData, error, handleChange, handleSubmit } =
		useSignupForm(onToggle);

	return (
		<SignUpBoxs>
			회원가입
			<p>
				이미 계정이 있으신가요? <a onClick={onToggle}>로그인하기</a>
			</p>
			<form onSubmit={handleSubmit}>
				<IdBox>
					이름:
					<IdInput
						name='username'
						value={formData.username}
						onChange={handleChange}
						placeholder='이름'
					/>
				</IdBox>
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
				<IdBox>
					비밀번호 확인:
					<IdInput
						name='passwordConfirm'
						type='password'
						value={formData.passwordConfirm}
						onChange={handleChange}
						placeholder='비밀번호 확인'
					/>
				</IdBox>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<ParentLoginBox>
					<SignUpButton type='submit'>회원가입</SignUpButton>
				</ParentLoginBox>
			</form>
		</SignUpBoxs>
	);
};

SignupBox.propTypes = {
	onToggle: PropTypes.func.isRequired,
};

export default SignupBox;
