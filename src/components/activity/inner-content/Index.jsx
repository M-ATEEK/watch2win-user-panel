import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import Auth from "../../Services/Auth";
import Axios from "axios";
import momentJs from "moment";
import userIcon from "../../../assets/images/user.png";

import playIcon from "../../../assets/images/play.png";
import videoThumbnail from "../../../assets/images/video.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import FavouiteIcon from "../../../assets/images/favChecked.png";
import userImage from "../../../assets/images/userImage.png";
import workoutIcon from "../../../assets/images/workoutImg.png";
import favtIcon from "../../../assets/images/favouriteImg.png";
import activityIcon from "../../../assets/images/activityIcon.png";
import { func } from "joi";

class InnerContent extends Component {
	state = {
		myActivity: [],
		followData: [],
		activityTab: false,
		followTab: true,
		atheletes: []
	};
	componentDidMount() {

		this.getAtheltes();
		Axios.get(`${config.API_URL}/user/detail`, {
			headers: {
				Authorization: Auth.getToken(),
			},
		})
			.then((response) => {
				const data = response.data.data.user[0];
				const dataActivity = response.data.data.activity;

				if (data.following && data.following != null && data.following.length > 0) {
					this.setState({

						followData: data.following,
					});
				}
				if (dataActivity && dataActivity != null && dataActivity.length > 0) {
					this.setState({
						myActivity: [...dataActivity],

					});
				}
			})
			.catch((error) => console.log(error));
	}
	dateDifferenceInDays(date1, date2) {
		const diffInMs = Math.abs(date1 - date2);

		if (parseInt(diffInMs / (1000 * 60 * 60 * 24) > 7)) {
			return "";
		} else {
			return (
				<li>
					<span className='new'>New</span>
				</li>
			);
		}
	}
	isPremimum(status) {
		if (status == false) {
			return "";
		} else {
			return (
				<li>
					<span className='premium'>Premium</span>
				</li>
			);
		}
	}

	handleTabs = (tab) => {
		if (tab === "myActivity") {
			this.setState({
				activityTab: true,
				followTab: false,
			});
		}

		if (tab === "following") {
			this.setState({
				activityTab: false,
				followTab: true,
			});
		}
	};

	getAtheltes() {
		let athelte = [];

		Axios.get(`${config.API_URL}/admin/athlete`, {
			headers: {
				Authorization: Auth.getToken(),
			},
		}).then((response) => {
			if (response.status === 200 && response.data.data.athlete.length > 0) {
				this.setState({
					atheletes: [...response.data.data.athlete]
				})


			}
		}).catch((error) => console.log(error));



	}



	render() {
		const { activityTab, followTab, myActivity, followData } = this.state;



		return (
			<div className='mainInnerContent innerMainProfileContent'>
				<div className='container'>
					<ul className='nav nav-tabs'>
						<li className={followTab ? "active" : ""} onClick={() => this.handleTabs("following")}>
							<Link data-toggle='tab' to='#following'>
								<img src={workoutIcon} alt='' /> <span>Following</span>
							</Link>
						</li>
						<li className={activityTab ? "active" : ""} onClick={() => this.handleTabs("myActivity")}>
							<Link data-toggle='tab' to='#act'>
								<img src={activityIcon} alt='' /> <span>My Activity</span>
							</Link>
						</li>
					</ul>

					<div className='tab-content'>
						<div id='following'
							style={{ display: followTab ? "block" : "none" }}
							className={followTab ? "tab-pane fade in active" : "tab-pane fade"}
						>	<div className='searchResultsParent'>
								<div className='searchResultsMain'>

									{
										followData.length > 0 ? (
											followData.map((follow, index) => {


												return (
													<div key={index} className='searchResults form-group drillSearchSection'>
														<div className='col-md-6 col-sm-8 col-xs-9'>

															{

																follow[0].image ? (
																	<img src={`${config.IMG_URL}/image/${follow[0].image}`} alt='' className="imageClassFollowing" />
																) : (
																		<img src={userImage} alt='' />
																	)
															}
															{/* <img src={userImage} alt='' />{" "} */}
															<span className='drillSearchName'>
																{follow[0].firstName}{" "}{follow[0].lastName}

															</span>
														</div>
														<div className='col-md-6 col-sm-4 col-xs-3 searchResultsFollowBtn'>
															
														</div>
														<div className='clearfix'></div>
													</div>
												);
											})

										) : (
												<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
											)}
								</div>
							</div>


						</div>
						<div id='act' style={{ display: activityTab ? "block" : "none" }} className={activityTab ? "tab-pane fade in active" : "tab-pane fade"}>
							<div className='searchResultsParent'>
								<div className='searchResultsMain'>
									{myActivity.length > 0 ? (
										myActivity.map((activity, index) => {

											return (
												<div key={index} className='searchResults form-group drillSearchSection'>
													<div className='col-md-6 col-sm-8 col-xs-9'>
														{
															activity.user_id.image ?
																<img src={`${config.IMG_URL}/image/${activity.user_id.image}`} alt='' className="imageClass" />
																:
																<img src={userImage} alt='' />
														}

														<span className='drillSearchName'>
															{activity.user_id ? activity.user_id.firstName + " " + activity.user_id.lastName : 'Name Not Found'}
															<span className='drillAtheleteName'>
																COMPLETE <strong>{activity.drill_id ? activity.drill_id.name : 'Name Not Found'}  {activity.user_id.watchedVideos ? activity.user_id.watchedVideos.length : 0}</strong>
															</span>
														</span>
													</div>
													<div className='col-md-6 col-sm-4 col-xs-3 searchResultsFollowBtn'>
														<p>{momentJs(activity.createdAt).fromNow()}</p>
													</div>
													<div className='clearfix'></div>
												</div>
											);
										})
									) : (
											<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
										)}
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
