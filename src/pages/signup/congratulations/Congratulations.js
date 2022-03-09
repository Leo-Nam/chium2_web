import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import './congratulations.scss';

export default function Congratulations() {
	useEffect(() => {
		WebFont.load({
		  google: {
			families: ['Droid Sans', 'Chilanka', 'Roboto']
		  }
		});
	   }, []);
	return (
		<div className="member_type_body">
			<div className="body_row_1">
				<div className="selection_container">
					<div className="welcome_text_container">
						<div class="welcome_text">(주) 느루 님 회원가입을 축하드립니다.</div>
						<div class="welcome_sub_text">회원가입 정보확인을 위해 로그인해주세요.</div>						
					</div>
					<div className="selection_button_container">
						<button
							class="input_login_button"
							type="button"
						>
							로그인	
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
