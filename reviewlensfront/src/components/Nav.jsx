import Rimg from '../assets/R.png';
import {
	Blank,
	NavHeader,
	Navpart2,
	StyledNavLink,
} from '../styles/Homestyles';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
	const { accessToken, logout } = useAuth();

	const handleLogout = () => {
		if (window.confirm('로그아웃하시겠습니까?')) {
			logout();
			alert('로그아웃되었습니다.');
		}
	};

	return (
		<nav>
			<Blank>
				리뷰의 감정을 읽고, 인사이트를 발견하는 스마트 분석 솔루션, ReviewLens
			</Blank>
			<NavHeader>
				<StyledNavLink
					to='/'
					end
					className='main'
					style={{ justifyContent: 'center' }}
				>
					<img
						src={Rimg}
						alt='R'
						style={{ height: '70px', alignItems: 'center' }}
					/>
					EVIEW LENS
				</StyledNavLink>

				<Navpart2>
					<StyledNavLink to='/contact' className='contact'>
						문의하기
					</StyledNavLink>

					{accessToken ? (
						<>
							<StyledNavLink to='/analysis' className='analysis'>
								분석하기
							</StyledNavLink>
							<StyledNavLink to='/' className='logout' onClick={handleLogout}>
								로그아웃
							</StyledNavLink>
						</>
					) : (
						<StyledNavLink to='/login' className='login'>
							로그인
						</StyledNavLink>
					)}
				</Navpart2>
			</NavHeader>
		</nav>
	);
}
