import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import './welcome.scss'

export default function Welcome() {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const errRef = useRef();

    const [pwd, setPwd] = useState('');
    const [userid, setUserid] = useState('');
    const [errMsg, setErrMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
		const userInfo = {"IN_USER_ID": userid, "IN_PWD": pwd};
		console.log("userid >>>>>>>> ", userid);
		console.log("pwd >>>>>>>> ", pwd);
		console.log("userInfo >>>>>>>> ", userInfo);
        try {
			const API_URL = '/api/acc/sp_req_user_login';
            const response = JSON.parse(JSON.stringify(await axios.post(API_URL, userInfo)));
			const status = response.data['status'];
			const message = response.data['message'];
			const data = response.data['data'];
			console.log("response >>>>>>>> ", response);
			if (status === 0) {
				localStorage.setItem('userInfo', data);
				console.log("data >>> ", data);
				if(localStorage.getItem('userInfo') === null){
					console.log("user info null");
				} else {
					console.log("user info not null");
					console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
					//console.log(JSON.parse(localStorage.getItem('userInfo'))["ID"]);
				}
				navigate(from, { replace: true });
			}
        } catch (err) {
			console.log(err);
            if (!err?.response) {
                setErrMsg('No Server Response', err.response);
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 500) {
                setErrMsg('Server Error');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
  	return (
		<div className="welcome_body">
			<div className="body_row_2"></div>
			<div className="body_row_1">
				<div className="left_1"></div>
				<div className="welcome_container">	
					<div className="welcome_container_left">						
						<div className="circle_1"></div>						
						<div className="circle_2"></div>						
						<div className="circle_3"></div>
						<div className="circle_4"></div>
						<div className="left_title">Ch!um</div>						
						<div className="left_sub_title">어디, 무엇이든 이제는 간편하게 치움</div>
					</div>
					<div className="welcome_container_right">	
						<form onSubmit={handleSubmit}>
						<div className="right_title">Welcome</div>						
						<div className="right_sub_title">Log in to your account to continue</div>
						<div className="login_form">
							<div className="input_login">
								<input 
									type="text" 
									className="loginInput"
									id="userid"
									onChange={(e) => setUserid(e.target.value)}
									value={userid}
									placeholder="아이디입력"
									required
								/>
							</div>
							<div className="input_login">
								<input 
									type="text" 
									className="loginInput"
									id="password"
									onChange={(e) => setPwd(e.target.value)}
									value={pwd}
									placeholder="비밀번호입력"
									required
								/>
							</div>
							<div className="input_login">
								<div className="under_login_input">
									<div className="sub_under_login_input">
										<input type="checkbox" />
										<span className="sub_under_login_input_text">로그인 상태 유지</span>
									</div>
									<div className="sub_under_login_input">								
										<span className="sub_under_login_input_text"><Link to="/find/UserId">아이디</Link> / <Link to="/find/Password">비밀번호</Link> 찾기</span>
									</div>
								</div>
							</div>
							<div className="input_login">
								<button className="loginButton">LOGIN</button>
							</div>
							<div className="input_login">
								<span className="signup_text">{pwd}아직 회원이 아니신가요? <Link to="/MemberType">회원가입</Link></span>
							</div>
						</div>
						</form>
					</div>
				</div>
				<div className="right_1"></div>
			</div>
			<div className="body_row_3"></div>
		</div>
	)
}
