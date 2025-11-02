import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import userSmallIcon from "../../../assets/images/userSm.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import drillImage from "../../../assets/images/drillsImg.png";
import heartIcon from "../../../assets/images/heart.png";
import durationIcon from "../../../assets/images/durationIcon.png";
import config from "../../../config";
import axios from "axios";
import Auth from "../../Services/Auth";

class InnerContent extends Component {
	state = {
		data: [],
		visible: 1,
		page: 1,
		totalItems: 0,
		visible: 3,
	};

	loadMore = this.loadMore.bind(this);
	getDrillsData = () => {
		axios
			.get(`${config.API_URL}/admin/drills/?page=${this.state.page}`, {
				headers: {
					Authorization: Auth.getToken(),
				},
			})
			.then((response) => {
				this.setState({
					data: [...this.state.data, ...response.data.data.drills],
					page: this.state.page + 1,
					totalItems: response.data.count,
				});
			});
	};
	componentDidMount() {
		this.getDrillsData();
	}
	loadMore() {
		this.getDrillsData();
	}

	render() {
		const token = Auth.getToken();
		if (!token) {
			return <Redirect to='/login' />;
		}
		const data = this.state.data;
		const dataVideos = this.state.drillsVideosData;

		if (data.length > 0) {
			return (
				<div className='mainInnerContent'>
					<div className='container'>
						<div className='row'>
							{data.map((drills, index) => {
								return (
									<div key={index} className='col-md-6 col-sm-6 col-xs-12'>
										<Link to={`/drills/detail/${drills._id}`}>
											<div className='drillsArea drillsMain2'>
												<div className='drillsMain'>
													<div className='videoMain form-group'>
														<div className='videoMainArea'>
															<img
																className='drill-images'
																src={drills && drills.thumbnail ? `${config.IMG_URL}/image/drills/${drills.thumbnail}` : drillImage}
																alt=''
															/>
															<div className='videoName'>
																<img src={videoNameIcon} alt='' />
																<span>{drills.name} </span>
															</div>
															<div className='videoSettings'>
																<div className='col-md-6 col-sm-6 col-xs-6'>
																	<ul className='videoLeftSettings uploader list-unstyled'>
																		<li>
																			<span>
																				<img
																					style={{ width: "27px" }}
																					src={
																						drills.athlete
																							? `${config.IMG_URL}/image/${drills.athlete.image}`
																							: userSmallIcon
																					}
																					alt=''
																				/>

																				{drills.athlete ? drills.athlete.name : "Name Not Found"}
																			</span>
																		</li>
																	</ul>
																</div>
															
															</div>
															<div className='durationSettings'>
																<ul className='list-unstyled'>
																	<li>{drills.vidoes ? drills.videos.length : 0} Drills</li>
																	<li>
																		<img src={durationIcon} alt='' /> 12:41
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</div>
								);
							})}
						</div>
						{this.state.totalItems < data.length && (
							<div className='row'>
								<hr />
								<div className='col-md-12 col-sm-12 col-xs-12 hidden-xs text-center'>
									<button type='button' onClick={this.loadMore} className={"btn btn-sm btn-primary"}>
										Load More
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			);
		} else {
			return "";
		}
	}
}

export default InnerContent;
