import React from 'react';
import { Link } from 'react-router-dom';
import './password.scss';

export default function UserId() {

	return (
		<div className="find_pwd_info_body">
			<div className="find_pwd_info_body_row_1">
				<div className="find_pwd_info_container">
					<Link to="/find/UserId">
						<div className="title_sel_container_off">
							아이디 찾기
						</div>
					</Link>
					<Link to="/find/Password">
					<div className="title_sel_container_on">
						비밀번호 찾기
					</div>
					</Link>
				</div>
				<div className="find_pwd_info_container">
					<div className="find_pwd_info_input_text_container">
						<input 
							className="find_pwd_info_input_text"
							type="text" 
							placeholder="새로운 비밀번호 입력"
						/>
						<input 
							className="find_pwd_info_input_text"
							type="text" 
							placeholder="비밀번호 확인"
						/>
						<button
							className="find_pwd_info_find_button"
							type="button"
						>
							다음	
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
