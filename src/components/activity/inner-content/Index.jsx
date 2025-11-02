import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import config from "../../../config";
import Auth from "../../Services/Auth";
import Axios from "axios";

import userIcon from "../../../assets/images/user.png";
import userSmallIcon from "../../../assets/images/userSm.png";
import playIcon from "../../../assets/images/play.png";
import videoThumbnail from "../../../assets/images/video.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import drillImage from "../../../assets/images/drillsImg.png";
import heartIcon from "../../../assets/images/heart.png";
import durationIcon from "../../../assets/images/durationIcon.png";
import FavouiteIcon from "../../../assets/images/favChecked.png";
import userImage from "../../../assets/images/userImage.png";

class InnerContent extends Component {
	state = {
		myActivity: [],
		myFavoutires: [],
		myWorksOut: [],
		activityTab: false,
		favouriteTab: false,
		workoutTab: true,
	};
	componentDidMount() {

		Axios.get(`${config.API_URL}/user/detail`, {
			headers: {
				Authorization: Auth.getToken(),
			},
		})
			.then((response) => {
				const data = response.data.data.user[0];

				console.log(data);
				this.setState({
					myActivity: [...data.watchLaterDrillVideos],
					myFavoutires: [...data.favouriteDrillVideos],
					myWorksOut: [...data.watchedVideos],
				});

				console.log(this.state.myFavoutires);
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
			return "";
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

	render() {
		const { activityTab, favouriteTab, workoutTab, myActivity, myFavoutires, myWorksOut } = this.state;
		return (


			<div className="mainInnerContent innerMainProfileContent">
				<div className="container">
					<ul className="nav nav-tabs">
						<li className={workoutTab ? "active" : ""} onClick={() => this.handleTabs("myWorkOut")}><a data-toggle="tab" href="#workout"><img src="images/workoutImg.png" alt="" /> <span>My Workout</span></a></li>
						<li className={favouriteTab ? "active" : ""} onClick={() => this.handleTabs("myFavourites")}><a data-toggle="tab" href="#fav"><img src="images/favouriteImg.png" alt="" /> <span>Favourities</span></a></li>
						<li className={activityTab ? "active" : ""} onClick={() => this.handleTabs("myActivity")}><a data-toggle="tab" href="#act"><img src="images/activityIcon.png" alt="" /> <span>My Activity</span></a></li>
					</ul>

					<div className="tab-content">
						<div id="workout" style={{ display: workoutTab ? "block" : "none" }} className={workoutTab ? "tab-pane fade in active" : "tab-pane fade"}>
							<div className="row">

								{

									myWorksOut.length > 0 ? (
										myWorksOut.map((drills, index) => {
											return (
												<div key={index} className="col-md-6 col-sm-6 col-xs-12">
													<div className="drillsArea drillsMain2">
														<div className="drillsMain">
															<div key={index} className='videoMain form-group'>
																<div className='videoHeader'>
																	<div className='row'>
																		<div className='col-md-1 col-sm-2 col-xs-2'>
																			<img src={userIcon} alt='' />
																		</div>
																		<div className='col-md-11 col-sm-10 col-xs-9'>
																			<h4>{drills.athlete ? drills.athlete.name : "Name Not Found"}</h4>
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
																						{drills.difficultyLevel ? drills.difficultyLevel.name : "Name Not Found"}
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
														</div>
													</div>
												</div>

											);
										}
										)) : (
											<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
										)

								}
							</div>
						</div>
						<div id="fav" style={{ display: favouriteTab ? "block" : "none" }} className={favouriteTab ? "tab-pane fade in active" : "tab-pane fade"}>
							<div className="row">
								{

									myFavoutires.length > 0 ? (
										myFavoutires.map((favourties, index) => {
											return (
												<div key={index} className="col-md-6 col-sm-6 col-xs-12">
													<div className="drillsArea drillsMain2">
														<div className="drillsMain">
															<div key={index} className='videoMain form-group'>
																<div className='videoHeader'>
																	<div className='row'>
																		<div className='col-md-1 col-sm-2 col-xs-2'>
																			<img src={userIcon} alt='' />
																		</div>
																		<div className='col-md-11 col-sm-10 col-xs-9'>
																			<h4>{favourties.athlete ? favourties.athlete.name : "Name Not Found"}</h4>
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
																						{favourties.difficultyLevel ? favourties.difficultyLevel.name : "Name Not Found"}
																					</a>
																				</li>
																			</ul>
																		</div>
																		<div className='col-md-6 col-sm-6 col-xs-6'>
																			<ul className='videoRightSettings list-unstyled'>
																				{this.dateDifferenceInDays(new Date(), new Date(favourties.createdAt))}
																				{this.isPremimum(favourties.isPremium)}
																			</ul>
																		</div>
																	</div>
																	<div className="favChecked">
																		<img src={FavouiteIcon} alt="" />
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>

											);
										}
										)) : (
											<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
										)

								}
							</div>
						</div>
						<div id="act" style={{ display: activityTab ? "block" : "none" }} className={activityTab ? "tab-pane fade in active" : "tab-pane fade"}>
							<div className="searchResultsParent">
								<div className="searchResultsMain">
									{
										myActivity.length > 0 ? (
											myActivity.map((activity, index) => {
												return (

													<div className="searchResults form-group drillSearchSection">
														<div className="col-md-6 col-sm-8 col-xs-9">
															<img src={userImage} alt="" /> <span className="drillSearchName">John Ross  <span className="drillAtheleteName">COMPLETE  <strong>DRILL 8</strong></span></span>
														</div>
														<div className="col-md-6 col-sm-4 col-xs-3 searchResultsFollowBtn">
															<p>5 Min ago</p>
														</div>
														<div className="clearfix"></div>
													</div>
												);
											})) : (
												<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Record Found</h2>
											)
									}
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
