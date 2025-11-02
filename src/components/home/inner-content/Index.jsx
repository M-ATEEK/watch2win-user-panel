import React, { Component } from "react";
import userIcon from "../../../assets/images/user.png";
import userSmallIcon from "../../../assets/images/userSm.png";
import playIcon from "../../../assets/images/play.png";
import videoThumbnail from "../../../assets/images/video.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import drillImage from "../../../assets/images/drillsImg.png";
import heartIcon from "../../../assets/images/heart.png";
import durationIcon from "../../../assets/images/durationIcon.png";
import config from "../../../config";
import axios from "axios";
import { Redirect } from "react-router";
import Auth from "../../Services/Auth";


class InnerContent extends Component {
	state = {
		data: [],
		page: 1,
		totalItems: 0,
		visible:3
	};

	loadMore = this.loadMore.bind(this);
	getDrillsData = () => {

		axios.get(`${config.API_URL}/admin/drills/?page=${this.state.page}`, {
			headers: {
				Authorization: Auth.getToken()
			},
		})
			.then((response) => {
				console.log("response " + JSON.stringify(response.data.data.drills));
				this.setState({
					data: [...this.state.data,...response.data.data.drills],
					page: this.state.page + 1,
					totalItems: response.data.count

				});
			});
	};
	componentDidMount() {
		this.getDrillsData();
	}
	loadMore() {
		this.getDrillsData();
	}
	dateDifferenceInDays(date1, date2) {
		const diffInMs = Math.abs(date1 - date2);

		if (parseInt(diffInMs / (1000 * 60 * 60 * 24) > 7)) {
			return '';
		} else {
			return (
				<li>
					<a href='#' className='new'>
						New
					</a>
				</li>
			);
		}
	}
	isPremimum(status) {
		console.log(status);
		if (status == false) {
			return '';
		} else {
			return (
				<li>
					<a href='#' className='premium'>
						Premium
					</a>
				</li>
			);
		}
	}
	render() {

		const token = Auth.getToken();
		if (!token) {
			return <Redirect to='/login' />;
		}
		const data = this.state.data;
		console.log("length"+data.length);
		if (data.length > 0) {
			return (
				<div className='mainInnerContent'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-7 col-sm-8 col-xs-12 hidden-xs'>


								{
									data.map((drills, index) => {
										return (
											<div key={index} className='videoMain form-group'>
												<div className='videoHeader'>
													<div className='row'>
														<div className='col-md-1 col-sm-2 col-xs-2'>
															<img src={userIcon} alt='' />
														</div>
														<div className='col-md-11 col-sm-10 col-xs-9'>
															<h4>{drills.athlete ? drills.athlete.name : 'Name Not Found'}</h4>
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
																		{drills.difficultyLevel ? drills.difficultyLevel.name : 'Name Not Found'}
																	</a>
																</li>
															</ul>
														</div>
														<div className='col-md-6 col-sm-6 col-xs-6'>
															<ul className='videoRightSettings list-unstyled'>
																{this.dateDifferenceInDays(new Date(), new Date(drills.createdAt))}
																{this.isPremimum(drills.isPremium)}
															</ul>
														</div>
													</div>




												</div>
											</div>
										);

									})
								}
								<hr />
								<div className='col-md-12 col-sm-12 col-xs-12 hidden-xs text-center'>
									{this.state.totalItems < data.length &&
										<button type="button" onClick={this.loadMore} className={"btn btn-sm btn-primary"}>Load More</button>
									}
								</div>

							</div>
							<div className='col-md-5 col-sm-4 col-xs-12'>
								<div className='drillsArea'>

									<div className='row'>
										<div className='col-md-6 col-sm-6 col-xs-6'>
											<h3>Drills</h3>
										</div>
										<div className='col-md-6 col-sm-6 col-xs-6 text-right'>
											<a href='/drills'>See All </a>
										</div>
									</div>
									<div className='drillsMain'>

										{data.slice(0,this.state.visible).map((drills, index) => {
											return (
												<div key={index} className='videoMain form-group'>
													<div className='videoMainArea'>
														<img src={drillImage} alt='' />
														<div className='videoName'>
															<img src={videoNameIcon} alt='' />
															<span>{drills.name} </span>
														</div>
														<div className='videoSettings'>
															<div className='col-md-6 col-sm-6 col-xs-6'>
																<ul className='videoLeftSettings uploader list-unstyled'>

																	<li>
																		<a href='#'>
																			<img src={userSmallIcon} alt='' /> &nbsp; {drills.athlete ? drills.athlete.name : 'Name Not Found'}
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
																<li>{drills.videos ? drills.videos.length : 0} Drills</li>
																<li>
																	<img src={durationIcon} alt='' /> 12:41
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
		} else {
			return '';
		}
	}
}

export default InnerContent;
