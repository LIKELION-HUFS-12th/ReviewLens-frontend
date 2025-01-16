import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//Contact Routes
import Contact from './pages/Contacts/Contact';
import Login from './pages/Login';
import PostWrite from './pages/Contacts/PostWrite';
import PostDetail from './pages/Contacts/PostDetail';
import PostEdit from './pages/Contacts/PostEdit';
import About from './pages/About';
import { AuthProvider } from './context/AuthContext.jsx';
//

export default function App() {
	return (
		<AuthProvider>
			<Router>
				{/* 네비게이션 컴포넌트 */}
				<Nav />
				<Routes>
					<Route path='/' element={<About />} />
					<Route path='/analysis' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={<Login />} />
					{/* 문의글 시작*/}
					<Route path='/posting' element={<PostWrite />} />
					<Route path='/postdetail/:postid' element={<PostDetail />} />
					<Route path='/edit/:postid' element={<PostEdit />} />
					{/* 문의글 끝 */}
				</Routes>
			</Router>
		</AuthProvider>
	);
}
