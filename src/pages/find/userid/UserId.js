import React from 'react';
import { Link } from 'react-router-dom';
import './userid.scss';

export default function UserId() {

	return (
		<div className="find_user_info_body">
			<div className="find_user_info_body_row_1">
				<div className="find_user_info_container">
					<Link to="/find/UserId">
						<div className="title_sel_container_on">
							아이디 찾기
						</div>
					</Link>
					<Link to="/find/Password">
					<div className="title_sel_container_off">
						비밀번호 찾기
					</div>
					</Link>
				</div>
				<div className="find_user_info_container">
					<div className="find_user_info_input_text_container">
						<input 
							className="find_user_info_input_text"
							type="text" 
							placeholder="이름을 입력해주세요"
						/>
						<input 
							className="find_user_info_input_text"
							type="text" 
							placeholder="전화번호를 입력해주세요"
						/>
						<button
							className="find_user_info_find_button"
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
