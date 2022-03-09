import React from 'react';
import { Link } from 'react-router-dom';
import './admin.scss';

export default function Admin() {

	return (
		<div className="admin_body">
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
							<div className="input_item_control_caption align_right">아이디 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="아이디를 입력해주세요"
								/>
								<button
									class="input_auth_button"
									type="button"
								>
									중복확인	
								</button>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">비밀번호 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="비밀번호를 입력해주세요 (8~16자리 입력)"
								/>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">비밀번호 확인 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="비밀번호를 한번 더 입력해 주세요"
								/>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">담당자명 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="담당자명을 입력해주세요"
								/>
								<button
									class="input_auth_button"
									type="button"
								>
									우편번호검색	
								</button>
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">이메일 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="이메일"
								/>
							</div>
						</div>
						<div className="agreements_space"></div>
						<div className="next_button_container">
							<Link to="/signup/Congratulations">
								<button
									class="input_next_button"
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
