import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import Axios from 'axios'
import './personal2.scss';

export default function Personal2() {
	const location = useLocation();
	const user1 = location.state;
	console.log("data >>> ", user1);
    const errRef = useRef();

    const [userIdValid, setUserIdValid] = useState(false);
    //const [pwd1Valid, setPwd1Valid] = useState(false);
    //const [pwdValid, setPwdValid] = useState(false);
    //const [pwd2InputEnabled, setPwd2InputEnabled] = useState(false);
    //const [userIdEnabled, setUserIdEnabled] = useState(false);
    const [userIdValidMessage, setUserIdValidMessage] = useState('');
    const [message, setMessage] = useState('');
    const [messageEmailValid, setMessageEmailValid] = useState('');
    const [userIdMessageStyle, setUserIdMessageStyle] = useState({
		display: 'none',
	});
    const [messageStyle, setMessageStyle] = useState({
		display: 'none',
	});
    const [message2Style, setMessage2Style] = useState({
		display: 'none',
	});
    const [user, setUser] = useState({
		name: user1.name,
		socialNo1: user1.socialNo1,
		socialNo2: user1.socialNo2,
		phone: user1.phone,
		userID: "",
		pwd1: "",
		pwd2: "",
		pwd: "",
		email: "",
		kikcd_b: "",
		address: "",
		certcode: user1.certcode,
	});

	console.log("user >>> ", user)

	const [emailError, setEmailError] = useState(false)
	function validateEmail(email) {
		if (typeof email !== "undefined") {
			let lastAtPos = email.lastIndexOf("@");
			let lastDotPos = email.lastIndexOf(".");

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					user.email.indexOf("@@") === -1 &&
					lastDotPos > 2 &&
					user.email.length - lastDotPos > 2
				)
				) {
				setEmailError(false);
				changeMessage2Style("display", "flex")
				setMessageEmailValid("이메일주소가 유효하지 않습니다.")
			} else {
				setEmailError(true);
				changeMessage2Style("display", "none")
			}
		}
	}

	function changeUserInfo(e){
		const { value, name } = e.target
		setUser({
			...user,
			[name]: value
		})
		//localStorage.setItem('user', user)
		console.log(user)
		if (name === "userID") {
			setUserIdValidMessage('')
			changeUserIdMessageStyle("display", "none")
			if (value.length >= 6) {
				setUserIdValid(true)
			}
		}
		if (name === "pwd1") {
			if (value.length >= 8 && value.length <= 16) {
				//setPwd1Valid(true)
				//setPwd2InputEnabled(true)
				setMessage('비밀번호가 유효합니다.')
				changeMessageStyle("display", "flex")
				if (value === user.pwd2) {
					setMessage('비밀번호가 일치합니다.')
				}
			} else {
				setMessage('비밀번호는 8글자 이상 16글자 이하이어야 합니다.')
				changeMessageStyle("display", "flex")
			}
			//setPwd1Valid(true)
			//setPwd2InputEnabled(true)
		}
		if (name === "pwd2" && value.length >= 8 && value.length <= 16) {
			//setPwdValid(true);
			setMessage('비밀번호가 일치하지 않습니다.')
			if (value === user.pwd1) {
				setMessage('비밀번호가 일치합니다.')
			}
		}
		if (name === "email") {
			validateEmail(user.email)
		}
	}

	function changeUserIdMessageStyle(name, value){
		setUserIdMessageStyle({
			...userIdMessageStyle,
			[name]: value
		})
	}

	function changeMessageStyle(name, value){
		setMessageStyle({
			...messageStyle,
			[name]: value
		})
	}

	function changeMessage2Style(name, value){
		setMessage2Style({
			...message2Style,
			[name]: value
		})
	}

    const req_is_userid_duplicate = async (e) => {
        e.preventDefault();
		const userInfo = {
			"IN_USER_ID": user.userID
		};
		changeUserIdMessageStyle("display", "flex")
		var API_URL = '/api/acc/sp_req_is_userid_duplicate';
		await axios.post(API_URL, userInfo)
		.then((res) => {
			const response = JSON.parse(JSON.stringify(res.data[0][0]))
			console.log("response >>> ", response["rtn_val"])
			const status = response["rtn_val"]
			if (status === 0) {
				//setUserIdEnabled(true)
				setUserIdValidMessage("유효한 사용자 아이디입니다.")
				return response
			} else {
				//setUserIdEnabled(false)
				setUserIdValidMessage("중복된 사용자 아이디입니다.")
			}
		})
		.catch((err) => {
			console.log(err);
            errRef.current.focus();
		})
    }

    function getAddress() {
		const fullAddress = user.address
		const authKey = "12cee859ae97b823b9436a669326e69e"
		const headers = {
			Authorization: authKey
		}
		var API_URL = "https://dapi.kakao.com/v2/local/search/address.json?query=" + fullAddress
		Axios.get(API_URL, headers)
		.then((res) => {
			const location = res.data.documents[0]
			console.log = location
		})
		.catch((err) => {
			console.log(err);
		})
    }

	return (
		<div className="member_type_body">
			<div className="body_row_1">
				<div className="input_container">
					<div className="top_progress_number_container">
						<div className="top_progress_left_space"></div>
						<div className="top_progress_number_on">01</div>
						<div className="top_progress_hr_container"></div>
						<div className="top_progress_number_off">02</div>
						<div className="top_progress_hr_container"></div>
						<div className="top_progress_number_off">03</div>
					</div>
					<div className="top_progress_container">
						<div className="top_progress_left_space"></div>
						<div className="top_progress_circle_on"></div>
						<div className="top_progress_hr_container"><div className="top_progress_hr"></div></div>
						<div className="top_progress_circle_on"></div>
						<div className="top_progress_hr_container"><div className="top_progress_hr"></div></div>
						<div className="top_progress_circle_off"></div>
					</div>
					<div className="top_progress_text_container">
						<div className="top_progress_left_space"></div>
						<div className="top_progress_text_on align_left">인증</div>
						<div className="top_progress_space_between_text"></div>
						<div className="top_progress_text_off align_center">정보입력</div>
						<div className="top_progress_space_between_text"></div>
						<div className="top_progress_text_off align_right">가입완료</div>
					</div>
					<div className="input_control_container">
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">아이디 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="text" 
									name="userID"
									onChange={changeUserInfo}
									value={user.userID}
									placeholder="아이디를 입력해주세요(6자리 이상)"
								/>
								<button
									className="input_auth_button"
									type="button"
									disabled={!userIdValid}
									onClick={req_is_userid_duplicate}
								>
									중복확인	
								</button>
							</div>
						</div>
						<div className="input_item_container" style={userIdMessageStyle}>
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left"><span className="personal1_res_msg">{userIdValidMessage}</span></div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">비밀번호 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="password" 
									name="pwd1"
									onChange={changeUserInfo}
									value={user.pwd1}
									placeholder="비밀번호를 입력해주세요 (8~16자리 입력)"
								/>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">비밀번호 확인 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="password" 
									name="pwd2"
									onChange={changeUserInfo}
									value={user.pwd2}
									placeholder="비밀번호를 한번 더 입력해 주세요"
								/>
							</div>
						</div>
						<div className="input_item_container" style={messageStyle}>
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left"><span className="personal1_res_msg">{message}</span></div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">이메일 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="text" 
									name="email"
									onChange={changeUserInfo}
									value={user.email}
									placeholder="이메일"
								/>
							</div>
						</div>
						<div className="input_item_container" style={message2Style}>
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left"><span className="personal1_res_msg">{messageEmailValid}{emailError}</span></div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">주소 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="text" 
									name="address"
									onChange={changeUserInfo}
									value={user.address}
									placeholder="주소를 입력해주세요"
								/>
								<button
									className="input_auth_button"
									type="button"
									onClick={getAddress}
								>
									우편번호검색	
								</button>
							</div>
						</div>
						<div className="agreements_space"></div>
						<div className="next_button_container">
							<Link to="/signup/Congratulations">
								<button
									className="input_next_button"
									type="button"
								>
									다음	
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
