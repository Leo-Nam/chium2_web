import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//import { Link, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import './personal.scss';

export default function Personal() {

    //const location = useLocation();

    const errRef = useRef();

    const [enabled, setEnabled] = useState('');
    const [certEnabled, setCertEnabled] = useState(false);
    const [certEnabled2, setCertEnabled2] = useState(false);
    const [message, setMessage] = useState('');
    const [certID, setCertID] = useState(0);
    const [user, setUser] = useState({
		name: "",
		socialNo1: "",
		socialNo2: "",
		phone: "",
		userID: "",
		pwd1: "",
		pwd2: "",
		pwd: "",
		email: "",
		kikcd_b: "",
		address: "",
		certcode: "",
	});

	function changeUserInfo(e){
		const { value, name } = e.target
		setUser({
			...user,
			[name]: value
		})
		//localStorage.setItem('user', user)
		console.log(user)
		if (name === "phone" && value.length >= 11) {
			setCertEnabled(true)
		}
		if (name === "certcode" && value.length >= 6) {
			setCertEnabled2(true);
		}
	}


    const getCertCode = async (e) => {
        e.preventDefault();
		const userInfo = {"IN_PHONE_NO": user.phone};
		setCertEnabled(false);
		setCertEnabled2(false);
		setEnabled(false);
		var API_URL = '/api/acc/sp_create_cert_code';
		await axios.post(API_URL, userInfo)
		.then((res) => {
			const response = JSON.parse(JSON.stringify(res))
			console.log("response >>> ", response)
			return response;
		})
		.then ((response) => {
			API_URL = '/api/acc/sms';
			axios.post(API_URL, userInfo)
			const res = JSON.parse(JSON.stringify(response.data[0][0]))
			setCertID(res['json_data'][0]['ID'])
			console.log(res)
			console.log("certID >>> ", certID)
			localStorage.setItem('certID', res['json_data'][0]['ID']);
			localStorage.setItem('user', user);
			console.log(localStorage.getItem('certID'))
		})
		.catch((err) => {
			console.log(err);
            errRef.current.focus();
		})
    }

    const reqCheckCertCode = async (e) => {
        e.preventDefault();
		const userInfo = {
			"IN_PHONE_NO": user.phone,
			"IN_ID": localStorage.getItem('certID'),
			"IN_CERT_CODE": user.certcode,
		};
		var API_URL = '/api/acc/sp_check_cert_code';
		await axios.post(API_URL, userInfo)
		.then((res) => {
			const response = JSON.parse(JSON.stringify(res.data[0][0]))
			console.log("response >>> ", response["rtn_val"])
			const status = response["rtn_val"]
			if (status === 0) {
				setEnabled(true)
				setMessage("인증이 성공적으로 완료되었습니다.")
				return response
			} else {
				setMessage("인증코드가 일치하지 않습니다.")
			}
		})
		.catch((err) => {
			console.log(err);
            errRef.current.focus();
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
						<div className="top_progress_circle_off"></div>
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
							<div className="input_item_control_caption align_right">이름 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="text" 
									name="name"
									onChange={changeUserInfo}
									placeholder="실명을 입력해주세요"
								/>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">주민등록번호 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_small"
									type="text" 
									name="socialNo1"
									onChange={changeUserInfo}
									value={user.socialNo1}
									placeholder="주민번호 앞 6자리"
								/>
								<input 
									className="input_text_small"
									type="text" 
									name="socialNo2"
									onChange={changeUserInfo}
									value={user.socialNo2}
									placeholder="*******"
								/>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">휴대전화번호 <span className="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="text" 
									name="phone"
									onChange={changeUserInfo}
									value={user.phone}
									placeholder="‘-’ 구분없이 입력해주세요."
								/>
								<button
									className="input_auth_button"
									type="button"
									disabled={!certEnabled}
									onClick={getCertCode}
								>
									인증번호전송	
								</button>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left">
								<input 
									className="input_text_big"
									type="text" 
									name="certcode"
									onChange={changeUserInfo}
									value={user.certcode}
									placeholder="인증번호를 입력해주세요."
								/>
								<button
									className="input_auth_button"
									type="button"
									disabled={!certEnabled2}
									onClick={reqCheckCertCode}
								>
									인증번호확인	
								</button>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left"><span className="personal1_res_msg">{message}</span></div>
						</div>
						<div className="agreements_space"></div>
						<div className="agreements">
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left">
								<input
									className="input_checkbox"
									type="checkbox"
								/>
								<span className="agreements_text text_color_0FB291">서비스 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.{certEnabled}</span>
							</div>
						</div>
						<div className="agreements">
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left">
								<input
									className="input_checkbox"
									type="checkbox"
								/>
								<span className="agreements_text">서비스 이용약관 동의 (필수)</span>
								<span className="agreements_arrow">&#62;</span>
							</div>
						</div>
						<div className="agreements">
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left">
								<input
									className="input_checkbox"
									type="checkbox"
								/>
								<span className="agreements_text">개인정보 수집 및 이용 동의 (필수)</span>
								<span className="agreements_arrow">&#62;</span>
							</div>
						</div>
						<div className="agreements">
							<div className="input_item_control_caption align_right"></div>
							<div className="input_item_control align_left">
								<input
									className="input_checkbox"
									type="checkbox"
								/>
								<span className="agreements_text">위치기반 동의 (필수)</span>
								<span className="agreements_arrow">&#62;</span>
							</div>
						</div>
						<div className="agreements_space"></div>
						<div className="next_button_container">
							<Link to="/signup/Personal2" state={user}>
								<button
									className="input_next_button"
									type="button"
									disabled={!enabled}
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
