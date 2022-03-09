import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';

import './membertype.scss';
import member_type_1_on from '../../images/member_type_1_on.png';
import member_type_1_off from '../../images/member_type_1_off.png';
import member_type_2_on from '../../images/member_type_2_on.png';
import member_type_2_off from '../../images/member_type_2_off.png';
import member_type_3_on from '../../images/member_type_3_on.png';
import member_type_3_off from '../../images/member_type_3_off.png';

export default function MemberType() {
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
					<div className="bottom_notice_container">
						<div className="bottom_notice_txt">
							・회원 유형에 따라 가입절차에 차이가 있으니, 개인회원 또는 기업회원을 선택해주세요.
						</div>
					</div>
					<div className="selection_items_container">
						<Link to="/signup/Personal">
							<div className="selection_item">
								<div className="selection_item_circle">
									<div className="card">
										<img src={member_type_1_on} className="type_1_on" alt=""/>
										<img src={member_type_1_off} className="type_1_off" alt=""/>
									</div>
								</div>
								<div className="selection_item_bottom">
									<div className="item_name">개인배출자</div>
									<div className="item_desc">사업자가 없는 개인</div>
								</div>
							</div>
						</Link>
						<Link to="/signup/Company/1">
							<div className="selection_item">
								<div className="selection_item_circle">
									<div className="card">
										<img src={member_type_2_off} className="type_2_off" alt=""/>
										<img src={member_type_2_on} className="type_2_on" alt=""/>
									</div>
								</div>
								<div className="selection_item_bottom">
									<div className="item_name">사업자 배출자</div>
									<div className="item_desc">사업자 등록증 보유</div>
								</div>
							</div>
						</Link>
						<Link to="/signup/Company/2">
							<div className="selection_item">
								<div className="selection_item_circle">
									<div className="card">
										<img src={member_type_3_off} className="type_3_off" alt=""/>
										<img src={member_type_3_on} className="type_3_on" alt=""/>
									</div>
								</div>
								<div className="selection_item_bottom">
									<div className="item_name">수거업체</div>
									<div className="item_desc">수집운반 허가증 등록이 가능한 업체</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
