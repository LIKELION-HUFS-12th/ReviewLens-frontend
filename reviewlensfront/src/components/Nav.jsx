import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	font-size: 30px;
	text-decoration: none;
	padding: 5px;
	margin: 30px;
	margin-top: 50px;
	color: black;

	&.active {
		font-weight: bold;
	}

	&:hover {
		color: var(--primary-color);
	}

	${({ isActive }) =>
		isActive &&
		`
      font-weight: 800;
      color: var(--primary-color);
    `}

	&.main {
		font-size: 38px;
	}

	&.login {
		border: 1px solid black;
		border-radius: 30px;
		padding: 0 30px;
		align-content: center;
	}
`;
const NavHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 80px;
	padding: 0 30px;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	box-sizing: border-box;
`;

const Navpart2 = styled.div`
	display: flex;
	padding: 20px;
	gap: 20px;
`;

export default function Navbar() {
	return (
		<nav>
			<NavHeader>
				<StyledNavLink to='/' end className='main'>
					리뷰렌즈
				</StyledNavLink>

				<Navpart2>
					<StyledNavLink to='/about' className='about'>
						문의하기
					</StyledNavLink>

					<StyledNavLink to='/login' className='login'>
						로그인
					</StyledNavLink>
				</Navpart2>
			</NavHeader>
		</nav>
	);
}
