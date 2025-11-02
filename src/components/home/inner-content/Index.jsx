import React, { Component } from "react";
import userIcon from "../../../assets/images/user.png";
import userSmallIcon from "../../../assets/images/userSm.png";
import playIcon from "../../../assets/images/play.png";
import videoThumbnail from "../../../assets/images/video.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import drillImage from "../../../assets/images/drillsImg.png";
import heartIcon from "../../../assets/images/heart.png";

class InnerContent extends Component {
	state = {};
	render() {
		const videosCount = [1, 2, 3, 4];
		return (
			<div className='mainInnerContent'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-7 col-sm-8 col-xs-12 hidden-xs'>
							{videosCount.map((count, index) => {
								return (
									<div className='videoMain form-group'>
										<div className='videoHeader'>
											<div className='row'>
												<div className='col-md-1 col-sm-2 col-xs-2'>
													<img src={userIcon} alt='' />
												</div>
												<div className='col-md-11 col-sm-10 col-xs-9'>
													<h4>Athlete Name</h4>
												</div>
											</div>
										</div>
										<div className='videoMainArea'>
											<img src={videoThumbnail} alt='' />
											<div className='videoPlay'>
												<a href='#'>
													<img src={playIcon} alt='' />
												</a>
											</div>
											<div className='videoName'>
												<img src={videoNameIcon} alt='' />
												<span>Video name will show here </span>
											</div>
											<div className='videoSettings'>
												<div className='col-md-6 col-sm-6 col-xs-6'>
													<ul className='videoLeftSettings list-unstyled'>
														<li>
															<a href='#' className='easy'>
																Easy
															</a>
														</li>
													</ul>
												</div>
												<div className='col-md-6 col-sm-6 col-xs-6'>
													<ul className='videoRightSettings list-unstyled'>
														<li>
															<a href='#' className='new'>
																New
															</a>
														</li>
														<li>
															<a href='#' className='premium'>
																Premium
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className='col-md-5 col-sm-4 col-xs-12'>
							<div className='drillsArea'>
								<div className='row'>
									<div className='col-md-6 col-sm-6 col-xs-6'>
										<h3>Drills</h3>
									</div>
									<div className='col-md-6 col-sm-6 col-xs-6 text-right'>
										<a href='#'>See All </a>
									</div>
								</div>
								<div className='drillsMain'>
									{videosCount.map((video, index) => {
										return (
											<div className='videoMain form-group'>
												<div className='videoMainArea'>
													<img src={drillImage} alt='' />
													<div className='videoName'>
														<img src={videoNameIcon} alt='' />
														<span>Defensive challenge </span>
													</div>
													<div className='videoSettings'>
														<div className='col-md-6 col-sm-6 col-xs-6'>
															<ul className='videoLeftSettings uploader list-unstyled'>
																<li>
																	<a href='#'>
																		<img src={userSmallIcon} alt='' /> &nbsp; Joe caldwell
																	</a>
																</li>
															</ul>
														</div>
														<div className='col-md-6 col-sm-6 col-xs-6'>
															<ul className='videoRightSettings favourite list-unstyled'>
																<li>
																	<a href='#'>
																		<img src={heartIcon} alt='' /> <span>222</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className='durationSettings'>
														<ul className='list-unstyled'>
															<li>4 Drills</li>
															<li>
																<img src='images/durationIcon.png' alt='' /> 12:41
															</li>
														</ul>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InnerContent;
