import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import Auth from "../../Services/Auth";
import Axios from "axios";
import userIcon from "../../../assets/images/user.png";

import playIcon from "../../../assets/images/play.png";
import videoThumbnail from "../../../assets/images/video.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import FavouiteIcon from "../../../assets/images/favChecked.png";
import userImage from "../../../assets/images/userImage.png";
import workoutIcon from "../../../assets/images/workoutImg.png";
import favtIcon from "../../../assets/images/favouriteImg.png";
import activityIcon from "../../../assets/images/activityIcon.png";
import durationIcon from "../../../assets/images/durationIcon.png";
import { func } from "joi";

class InnerContent extends Component {
	state = {
		myActivity: [],
		myFavoutires: [],
		myWorksOut: [],
		activityTab: false,
		favouriteTab: false,
		workoutTab: true,
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
		


				if (data.favouriteDrillVideos.length > 0) {
					this.setState({
						myFavoutires: [...data.favouriteDrillVideos],
					});
				}

				if (data.watchedVideos && data.watchedVideos != null && data.watchedVideos.length > 0) {
					this.setState({
						// myActivity: [...data.watchLaterDrillVideos],

						myWorksOut: [...data.watchedVideos],
					});
				}
				if(dataActivity && dataActivity != null && dataActivity.length > 0){
					this.setState({
						myActivity: [...dataActivity],

					},function(){
						console.log("My Activiy "  + JSON.stringify(this.state.myActivity));
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
				favouriteTab: false,
				workoutTab: false,
			});
		}

		if (tab === "myFavourites") {
			this.setState({
				activityTab: false,
				favouriteTab: true,
				workoutTab: false,
			});
		}

		if (tab === "myWorkOut") {
			this.setState({
				activityTab: false,
				favouriteTab: false,
				workoutTab: true,
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
		const { activityTab, favouriteTab, workoutTab, myActivity, myFavoutires, myWorksOut } = this.state;

		return (
			<div className='mainInnerContent innerMainProfileContent'>
				<div className='container'>
					<ul className='nav nav-tabs'>
						<li className={workoutTab ? "active" : ""} onClick={() => this.handleTabs("myWorkOut")}>
							<Link data-toggle='tab' to='#workout'>
								<img src={workoutIcon} alt='' /> <span>My Workout</span>
							</Link>
						</li>
						<li className={favouriteTab ? "active" : ""} onClick={() => this.handleTabs("myFavourites")}>
							<Link data-toggle='tab' to='#fav'>
								<img src={favtIcon} alt='' /> <span>Favourities</span>
							</Link>
						</li>
						<li className={activityTab ? "active" : ""} onClick={() => this.handleTabs("myActivity")}>
							<Link data-toggle='tab' to='#act'>
								<img src={activityIcon} alt='' /> <span>My Activity</span>
							</Link>
						</li>
					</ul>

					<div className='tab-content'>
						<div
							id='workout'
							style={{ display: workoutTab ? "block" : "none" }}
							className={workoutTab ? "tab-pane fade in active" : "tab-pane fade"}
						>
							<div className='row'>
								{myWorksOut.length > 0 ? (
									myWorksOut.map((drills, index) => {
										let atheleteName = '';
										let atheleteImage = '';
										let videoImage = '';
										let videos = {};
										let athelte = {};
										if (drills.drill_id) {

											athelte = this.state.atheletes.filter((athelete, ith) => athelete._id === drills.drill_id[0].athlete)


											if (athelte.length > 0) {
												atheleteName = athelte[0].name;
												atheleteImage = `${config.IMG_URL}/image/${athelte[0].image}`;
											} else {
												atheleteName = 'Name Not Found';
												atheleteImage = userIcon;
											}


											if (drills.drill_id && drills.drill_id[0].videos != null && drills.drill_id[0].videos.length > 0) {

												videos = drills.drill_id[0].videos.filter((video, ith) => video._id === drills.video_id)
												videoImage = `${config.IMG_URL}/image/drills/${videos[0].thumbnail}`



											} else {


												videoImage = videoThumbnail;
											}

										} else {
											atheleteName = 'Name Not Found';
											atheleteImage = userIcon;
										}
										return (

											<div key={index} className='col-md-6 col-sm-6 col-xs-12'>
												<div className='drillsArea drillsMain2'>
													<div className='drillsMain'>
														<div key={index} className='videoMain form-group'>
															<div className='videoHeader'>
																<div className='row'>
																	<div className='col-md-1 col-sm-2 col-xs-2'>
																		<img
																			style={{ width: "55px" }}
																			src={atheleteImage}
																			alt=''
																		/>
																	</div>
																	<div className='col-md-11 col-sm-10 col-xs-9'>
																		<h4>{atheleteName}</h4>

																	</div>
																</div>
															</div>
															<div className='videoMainArea'>
																<img src={videoImage} alt='' />
																<div className='videoPlay'>
																	{
																		drills.drill_id ? (
																			<Link to={`/single/video/${drills.drill_id[0]._id}/${drills.video_id}`}>
																				<img src={playIcon} alt='' />
																			</Link>
																		) : (
																				<Link to='#'>
																					<img src={playIcon} alt='' />
																				</Link>

																			)
																	}

																</div>
																<div className="videoName">
														
																	<ul class="list-unstyled">
																		
																		<li><img src={durationIcon} alt="" /> 12:41</li>
																	</ul>
																</div>
																<div className='videoSettings'>
																	<div className='col-md-6 col-sm-6 col-xs-6'>
																		<ul className='videoLeftSettings list-unstyled'>
																			<li>
																				<span className='easy'>
																					{drills.diffculty_id ? drills.diffculty_id[0].name : "Name Not Found"}
																				</span>
																			</li>
																		</ul>
																	</div>
																	<div className='col-md-6 col-sm-6 col-xs-6'>
																		<ul className='videoRightSettings list-unstyled'>

																			{drills.drill_id ? this.dateDifferenceInDays(new Date(), new Date(drills.drill_id[0].createdAt)) : ''}
																			{drills.drill_id ? this.isPremimum(drills.drill_id[0].isPremium) : ''}
																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									})
								) : (
										<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
									)}
							</div>
						</div>
						<div
							id='fav'
							style={{ display: favouriteTab ? "block" : "none" }}
							className={favouriteTab ? "tab-pane fade in active" : "tab-pane fade"}
						>
							<div className='row'>
								{myFavoutires.length > 0 ? (
									myFavoutires.map((favourties, index) => {

										let atheleteName = '';
										let atheleteImage = '';
										let videoImage = '';
										let videos = {};
										let athelte = {};
										if (favourties.drill_id) {

											athelte = this.state.atheletes.filter((athelete, ith) => athelete._id === favourties.drill_id[0].athlete)
											if (athelte.length > 0) {
												atheleteName = athelte[0].name;
												atheleteImage = `${config.IMG_URL}/image/${athelte[0].image}`;
											} else {
												atheleteName = 'Name Not Found';
												atheleteImage = userIcon;
											}


											if (favourties.drill_id && favourties.drill_id[0].videos != null && favourties.drill_id[0].videos.length > 0) {

												videos = favourties.drill_id[0].videos.filter((video, ith) => video._id === favourties.video_id)
												videoImage = `${config.IMG_URL}/image/drills/${videos[0].thumbnail}`

											} else {


												videoImage = videoThumbnail;
											}

										} else {
											atheleteName = 'Name Not Found';
											atheleteImage = userIcon;
										}







										return (
											<div key={index} className='col-md-6 col-sm-6 col-xs-12'>
												<div className='drillsArea drillsMain2'>
													<div className='drillsMain'>
														<div key={index} className='videoMain form-group'>
															<div className='videoHeader'>
																<div className='row'>
																	<div className='col-md-1 col-sm-2 col-xs-2'>
																		<img
																			style={{ width: "55px" }}
																			src={atheleteImage}
																			alt=''
																		/>
																	</div>
																	<div className='col-md-11 col-sm-10 col-xs-9'>
																		<h4>{atheleteName}</h4>
																	</div>
																</div>
															</div>
															<div className='videoMainArea'>
																<img
																	src={videoImage}
																	alt=''
																/>

																<div className='videoPlay'>
																	{
																		favourties.drill_id ? (
																			<Link to={`/single/video/${favourties.drill_id[0]._id}/${favourties.video_id}`}>
																				<img src={playIcon} alt='' />
																			</Link>
																		) : (
																				<Link to='#'>
																					<img src={playIcon} alt='' />
																				</Link>

																			)
																	}
																</div>

																<div className='videoSettings'>
																	<div className='col-md-6 col-sm-6 col-xs-6'>
																		<ul className='videoLeftSettings list-unstyled'>
																			<li>
																				{/* <span className='easy'>
																					{favourties.difficultyLevel
																						? favourties.difficultyLevel.name
																						: "Name Not Found"}
																				</span> */}
																			</li>
																		</ul>
																	</div>
																	<div className='col-md-6 col-sm-6 col-xs-6'>
																		<ul className='videoRightSettings list-unstyled'>

																			{favourties.drill_id ? this.dateDifferenceInDays(new Date(), new Date(favourties.drill_id[0].createdAt)) : ''}
																			{favourties.drill_id ? this.isPremimum(favourties.drill_id[0].isPremium) : ''}
																		</ul>
																	</div>
																</div>
																<div className='favChecked'>
																	<img src={FavouiteIcon} alt='' />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									})
								) : (
										<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
									)}
							</div>
						</div>
						<div id='act' style={{ display: activityTab ? "block" : "none" }} className={activityTab ? "tab-pane fade in active" : "tab-pane fade"}>
							<div className='searchResultsParent'>
								<div className='searchResultsMain'>
									{myActivity.length > 0 ? (
										myActivity.map((activity, index) => {
											return (
												<div className='searchResults form-group drillSearchSection'>
													<div className='col-md-6 col-sm-8 col-xs-9'>
														<img src={userImage} alt='' />{" "}
														<span className='drillSearchName'>
															John Ross{" "}
															<span className='drillAtheleteName'>
																COMPLETE <strong>DRILL 8</strong>
															</span>
														</span>
													</div>
													<div className='col-md-6 col-sm-4 col-xs-3 searchResultsFollowBtn'>
														<p>5 Min ago</p>
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
