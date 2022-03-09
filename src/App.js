import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Welcome from './pages/signup/welcome/Welcome'
import MemberType from './pages/memberType/MemberType'
import Personal from './pages/signup/personal/Personal'
import Personal2 from './pages/signup/personal/Personal2'
import Company from './pages/signup/company/Company'
import Admin from './pages/signup/company/Admin'
import Collector from './pages/signup/company/Collector'
import UserId from './pages/find/userid/UserId'
import Password from './pages/find/password/Password'
import ChangePassword from './pages/find/password/Password2'
import Congratulations from './pages/signup/congratulations/Congratulations'

function App() {

	window.onload = () => {
		//localStorage.removeItem('isAuth');
		localStorage.clear();
	}

	window.onbeforeunload = () => {
		localStorage.clear();
	}
	
	return (
		<Router>
		<div className="appContainer">
			<div className="appBody">
				<div className="container">
					<Routes>
						<Route path="/" element={ <Welcome /> } />
						<Route path="/MemberType" element={ <MemberType /> } />
						<Route path="/signup/Personal" element={ <Personal /> } />
						<Route path="/signup/Personal2" element={ <Personal2 /> } />
						<Route path="/signup/Company/Admin" element={ <Admin /> } />
						<Route path="/signup/Company/Collector" element={ <Collector /> } />
						<Route path="/signup/Company/:category" element={ <Company /> } />
						<Route path="/find/UserId" element={ <UserId /> } />
						<Route path="/find/Password" element={ <Password /> } />
						<Route path="/find/ChangePassword" element={ <ChangePassword /> } />
						<Route path="/signup/Congratulations" element={ <Congratulations /> } />
					</Routes>
				</div>

			</div>
		</div>
		</Router>
	);
}

export default App;