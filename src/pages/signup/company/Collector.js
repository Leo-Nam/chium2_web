import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './collector.scss';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1000,
	height: 700,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function Collector() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
							<div className="input_item_control_caption align_right">수집운반허가증 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="수집운반허가증을 등록해주세요"
								/>
								<button
									class="input_auth_button"
									type="button"
									onClick={handleOpen}
								>
									찾아보기	
								</button>
								<Modal
									open={open}
									onClose={handleClose}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
								>
									<Box sx={style}>
										<div className="modal_container">
											<Typography 
												id="modal-modal-title" 
												variant="h6" 
												component="h2"
											>
												수집운반허가증
											</Typography>
											<hr />
											<div className="modal_context_container">
												<div className="modal_context_row_1">
													<div className="modal_context_row_1_column_1">
														<input 
															class="input_text_big"
															type="text" 
															placeholder="수집운반허가증을 등록해주세요"
														/>
													</div>
													<div className="modal_context_row_1_column_2">
														<button
															class="input_auth_button"
															type="button"
														>
															파일찾기	
														</button>
													</div>
												</div>
												<div className="modal_context_row_2">
													<div className="modal_context_row_2_column_1">
														<div className="biz_reg_img">사업자등록증사진
														</div>
													</div>
													<div className="modal_context_row_2_column_2">
														<div className="modal_context_row_2_column_2_item">
															<div className="modal_context_row_2_column_2_item_title">
																수집운반허가번호
															</div>
															<div className="modal_context_row_2_column_2_item_contents">
																<input 
																	class="input_text_small_2"
																	type="text" 
																	placeholder="대표자"
																/>
															</div>
														</div>
														<div className="modal_context_row_2_column_2_item">
															<div className="modal_context_row_2_column_2_item_title">
																기업명
															</div>
															<div className="modal_context_row_2_column_2_item_contents">
																<input 
																	class="input_text_small_2"
																	type="text" 
																	placeholder="기업명"
																/>
															</div>
														</div>
														<div className="modal_context_row_2_column_2_item">
															<div className="modal_context_row_2_column_2_item_title">
																대표자
															</div>
															<div className="modal_context_row_2_column_2_item_contents">
																<input 
																	class="input_text_small_2"
																	type="text" 
																	placeholder="대표자 이름"
																/>
															</div>
														</div>
														<div className="modal_context_row_2_column_2_item">
															<div className="modal_context_row_2_column_2_item_title">
																사업장 주소지
															</div>
															<div className="modal_context_row_2_column_2_item_contents">
																<input 
																	class="input_text_small_2"
																	type="text" 
																	placeholder="사업장 주소지"
																/>
															</div>
														</div>
														<div className="modal_context_row_2_column_2_button">
															<div className="modal_context_row_2_column_2_item_title">
																
															</div>
															<div className="modal_context_row_2_column_2_item_contents">
																<button
																	class="input_reg_biz_button"
																	type="button"
																	onClick={handleClose}	
																>
																	등록하기
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Box>
								</Modal>
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
							</div>
						</div>
						<div className="input_item_container">
							<div className="input_item_control_caption align_right">이메일 <span class="text_dot">*</span></div>
							<div className="input_item_control align_left">
								<input 
									class="input_text_big"
									type="text" 
									placeholder="이메일주소를 입력해주세요"
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
