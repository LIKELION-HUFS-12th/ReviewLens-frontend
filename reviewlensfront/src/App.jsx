import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

export default function App() {
	return (
		<Router>
			{/* 네비게이션 컴포넌트 */}
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
}
