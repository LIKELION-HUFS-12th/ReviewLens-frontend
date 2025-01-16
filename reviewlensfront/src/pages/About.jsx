import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
	FileText,
	Search,
	LineChart,
	CheckCircle,
	ArrowRight,
} from 'lucide-react';
import styled from 'styled-components';

// Styled Components
const Body1 = styled.div`
	display: flex;
	width: 100vw;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background: linear-gradient(180deg, #ebf4ff 0%, #ffffff 100%);
	overflow-x: hidden;
`;

const StepContainer = styled.div`
	/*width: 100vw;*/
	margin: auto;
	padding: 15rem;
	font-size: 1.4rem;
`;

const StepGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 2rem 0;
	padding: 0 1rem;
	font-size: 1.5rem;
`;

const StepContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const IconTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	line-height: 17px;
`;
const AnimatedTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: 800;
	text-align: center;
	margin: 2rem 0;
	opacity: ${(props) => (props.visible ? 1 : 0)};
	transform: translateY(${(props) => (props.visible ? 0 : '-20px')});
	transition: all 1s ease-out;

	@media (min-width: 768px) {
		font-size: 3rem;
	}
`;

const HighlightText = styled.span`
	color: #81baf9;
	margin-left: 0.5rem;
	line-height: 10px;
`;

const CtaButton = styled.button`
	font-size: 1.25rem;
	font-weight: 600;

	padding: 1rem 2rem;
	background-color: #81baf9;

	color: white;

	border: none;
	border-radius: 9999px;
	cursor: pointer;

	display: flex;
	margin: auto;
	align-items: center;

	gap: 0.8rem;
	transition: all 0.3s ease;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);

	&:hover {
		background-color: #3491fb;

		transform: translateY(-2px);
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	svg {
		transition: transform 0.2s ease;
	}

	&:hover svg {
		transform: translateX(4px);
	}
`;

const About = () => {
	const navigate = useNavigate();
	const { accessToken } = useAuth();
	const [activeStep, setActiveStep] = useState(0);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveStep((prev) => (prev + 1) % 4);
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY;
			setIsVisible(scrolled < 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleAlysClick = () => {
		if (accessToken) {
			navigate('/analysis');
		} else {
			navigate('/login');
		}
	};

	const steps = [
		{
			icon: <FileText size={32} />,
			title: '1. 파일 제공',
			description: '분석할 리뷰가 들어있는 파일을 제공해주세요.',
			color: 'bg-blue-500',
		},
		{
			icon: <Search size={32} />,
			title: '2. 분석 시작',
			description: '리뷰 분석하기 버튼을 눌러주세요.',
			color: 'bg-green-500',
		},
		{
			icon: <LineChart size={32} />,
			title: '3. 자동 분석',
			description: '리뷰렌즈가 자동으로 리뷰를 분석합니다.',
			color: 'bg-purple-500',
		},
		{
			icon: <CheckCircle size={32} />,
			title: '4. 결과 확인',
			description: ' 분석 결과를 확인하세요.',
			color: 'bg-orange-500',
		},
	];

	return (
		<Body1>
			<StepContainer>
				<AnimatedTitle visible={isVisible}>
					리뷰를<HighlightText>분석</HighlightText>해보세요
				</AnimatedTitle>

				<p className='text-xl text-center text-gray-600 mb-12'>
					AI 기반의 리뷰 분석 서비스로 고객의 목소리를 쉽게 이해하세요
				</p>

				<StepGrid>
					{steps.map((step, index) => (
						<div
							key={index}
							className={`w-full transform transition-all duration-500 ${
								activeStep === index ? 'scale-102' : 'scale-100'
							}`}
						>
							<div
								className={`rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 w-full
                            ${
															activeStep === index
																? 'border-2 border-blue-500 transform translate-x-2'
																: ''
														}`}
							>
								<StepContent>
									<IconTitleWrapper>
										<div
											className={`${step.color} text-white p-3 rounded-full`}
										>
											{step.icon}
										</div>
										<h3 className='text-xl font-semibold'>{step.title}</h3>
									</IconTitleWrapper>
									<p className='text-gray-600 ml-14'>{step.description}</p>
								</StepContent>
							</div>
						</div>
					))}
				</StepGrid>

				<div className='text-center mt-12'>
					<CtaButton onClick={handleAlysClick}>
						분석 시작하기
						<ArrowRight />
					</CtaButton>
				</div>
			</StepContainer>
		</Body1>
	);
};

export default About;
