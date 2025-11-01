import React, { Component } from "react";
import ReactPlayer from "react-player";
import config from "../../../config";
import axios from "axios";
import Auth from "../../Services/Auth";
import VideoLarge from "../../../assets/images/vidLg.png";
import Play from "../../../assets/images/play.png";
import ArrowUp from "../../../assets/images/arrowUp.png";
import ArrowDown from "../../../assets/images/arrowDown.png";
import PlaySmall from "../../../assets/images/playSm.png";
import AddToFav from "../../../assets/images/addToFav.png";
import WatchList from "../../../assets/images/watchList.png";
import RepeatSm from "../../../assets/images/repeatSm.png";
import "../../../assets/css/responsive-player.css";

class InnerContent extends Component {
	state = {
		data: [],
		videoCount: 0,
		index: 0,
		videosData: [],
		vidoePlay: null,
		isplay: true,
		increaseArrow: true,
		decreaseArrow: false,
		src: null,
		videoId: null,
		earnedPoint: false,
	};

	componentDidMount() {
		this.getDrillsData();
	}

	getDrillsData = () => {
		const drillId = this.props.id;
		axios
			.get(`${config.API_URL}/admin/drills/${drillId}`, {
				headers: {
					Authorization: Auth.getToken(),
				},
			})
			.then((response) => {
				this.setState({
					data: [...response.data.data.drills],
				});
				this.setVideosdata();
				this.playerVideo();
			});
	};
	setVideosdata() {
		this.setState({
			videoCount: this.state.data[0].videos.length,
			videosData: [...this.state.data[0].videos],
		});
	}

	onChangeIncreasePlayerVideo(Increase) {
		const checkIndex = this.state.index;
		if (checkIndex < this.state.videoCount - 1) {
			this.setState({
				index: checkIndex + 1,
				decreaseArrow: true,
				increaseArrow: true,
			});

			this.playerVideo();
		} else {
			this.setState({
				decreaseArrow: true,
				increaseArrow: false,
			});
		}
	}

	onChangeDecreasePlayerVideo(Decrease) {
		const checkIndex = this.state.index;
		if (checkIndex < this.state.videoCount - 1 && checkIndex >= 0) {
			this.setState({
				index: checkIndex - 1,
				decreaseArrow: true,
				increaseArrow: true,
			});
			this.playerVideo();
		} else {
			this.setState({
				decreaseArrow: false,
				increaseArrow: true,
			});
		}
	}
	playerVideo() {
		this.setState({
			vidoePlay: this.state.videosData[this.state.index],
		});
	}

	isPremimum(status) {
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

	startVideo(startVideo) {
		this.setState({
			isplay: false,
			src: this.state.videosData[this.state.index].video,
			videoId: this.state.videosData[this.state.index]._id,
		});
	}

	earnedPoints = () => {
		const response = {
			watchedVideos: [
				{
					video_id: this.state.videoId,
					drill_id: this.state.data[0]._id,
					diffculty_id: this.state.data[0].difficultyLevel._id,
					speed_level_id: this.state.videosData[this.state.index].speedLevel._id,
				},
			],
		};
		axios
			.post(`${config.API_URL}/user/points`, response, {
				headers: {
					Authorization: Auth.getToken(),
				},
			})
			.then((response) => {
				this.setState({
					earnedPoint: true,
					isplay: true,
				});
				console.log("response " + JSON.stringify(response.data.data));
			});
	};

	addToFavourite = (drillId) => {
		const response = {
			"favouriteDrillVideos": drillId,
			"isAdded": true
		};
		axios
			.post(`${config.API_URL}/user/favoriteVideo`, response, {
				headers: {
					Authorization: Auth.getToken(),
				},
			})
			.then((response) => {
				console.log("response " + JSON.stringify(response.data.data.drills));

			});
	}

	render() {
		const currentVideo = this.state.vidoePlay;
		const data = this.state.data;
		return (
			<div className='mainInnerContent'>
				{data.map((drills, i) => {
					return (
						<div key={i} className='container'>
							<div className='searchResultsParent'>
								<h3 className='hidden-xs'>Video Thumbnail will shown here </h3>


								<div className='videoLg'>
									<div className='videoMain form-group'>


										{this.state.isplay ? (
											<div>
												<div className='videoMainArea'>
													<img src={currentVideo ? `${config.IMG_URL}/image/drills/${currentVideo.thumbnail}` : VideoLarge} alt='' />
													<div className='videoPlay videoRepeat' onClick={() => this.startVideo("startVideo")} style={{ display: this.state.earnedPoint ? "block" : "none" }}>
														<a href='#' >
															<img src={RepeatSm} alt='' />
														</a>
													</div>
													<div className='videoInfoOverlay hidden-xs' style={{ display: this.state.earnedPoint ? "block" : "none" }}>
														<h5>

															<strong>{currentVideo != null && currentVideo.speedLevel != null ? currentVideo.speedLevel.points / currentVideo.speedLevel.condition : 0}</strong> Points Earned
														</h5>
														<h6>Watch Video {currentVideo != null && currentVideo.speedLevel != null ? (currentVideo.speedLevel.condition - 2) : 0}x (times) again to earn {currentVideo != null && currentVideo.speedLevel != null ? ((currentVideo.speedLevel.condition - 2) * currentVideo.speedLevel.points) : 0} points</h6>
													</div>
													<div
														className='videoPlay'
														style={{ display: this.state.earnedPoint ? "none" : "block" }}
														onClick={() => this.startVideo("startVideo")}
													>
														<a href='#'>
															<img src={Play} alt='' />
														</a>
													</div>
													<div className='videoSettings'>
														<div className='col-md-12 col-sm-12 col-xs-12'>
															<ul className='videoRightSettings list-unstyled'>{this.isPremimum(drills.isPremium)}</ul>
														</div>
													</div>
												</div>
												<div className='videoBtmOptions hidden-xs'>
													<div className='row'>
														<div className='col-md-4 col-sm-4 speedLevel'>
															<h4>Speed level</h4>
															<div className='col-md-2 col-sm-2 speedLevelControl'>
																<div className='row'>
																	<div className='col-md-12 form-group'>
																		<a
																			className={this.state.decreaseArrow == false ? "disbaledBtn" : ""}
																			onClick={() => this.onChangeDecreasePlayerVideo("decrease")}
																		>
																			<img src={ArrowUp} alt='' />
																		</a>
																	</div>
																	<div className='col-md-12 form-group '>
																		<a
																			className={this.state.increaseArrow == false ? "disbaledBtn" : ""}
																			onClick={() => this.onChangeIncreasePlayerVideo("increase")}
																		>
																			<img src={ArrowDown} alt='' />
																		</a>
																	</div>
																</div>
															</div>
															<h5>{this.state.index + 1}</h5>
														</div>
														<div
															className='col-md-4 col-sm-4 startVideo'
															style={{ display: this.state.earnedPoint ? "none" : "block" }}
															onClick={() => this.startVideo("startVideo")}
														>
															<a>
																<img src={PlaySmall} alt='' /> &nbsp; Start
															</a>
														</div>

														<div
															className='col-md-4 col-sm-4 startVideo repeatVid'
															style={{ display: this.state.earnedPoint ? "block" : "none" }}
															onClick={() => this.startVideo("startVideo")}
														>
															<a href='#'>
																<img src={RepeatSm} alt='' /> &nbsp; Repeat
															</a>
														</div>
														<div className='col-md-4 col-sm-4 vidFavWishOptions'>
															<ul className='list-unstyled list-inline'>
																<li>
																	<a onClick={() => this.addToFavourite(drills._id)}>
																		<img src={AddToFav} alt='' />
																	</a>
																</li>
																<li>
																	<a>
																		<img src={WatchList} alt='' />
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>


											</div>

										) :
											(<div className='player-wrapper'>
												<ReactPlayer
													className='react-player'
													width='100%'
													height='100%'
													controls={true}
													playing={true}
													url={`${config.IMG_URL}/image/drills/${this.state.src}`}
													onEnded={this.earnedPoints.bind(this)}
												/>
											</div>
											)

										}



										<div className='videoDrillTexts hidden-xs'>
											<h3>DRILL SUMMARY</h3>
											<p>Category : {drills.category ? drills.category.name : "Categroy Not Found"}</p>
											<p>Difficulty level : {drills.difficultyLevel ? drills.difficultyLevel.name : "Difficulty Level Not Found"}</p>
											{/* <p>Speed level : {currentVideo.id}</p> */}
										</div>

										<div className='videoPageBtmSettings hidden-lg hidden-md hidden-sm'>
											<div className='row form-group'>
												<div className='col-xs-9'>
													<h4>Video Title will shown here </h4>
													<p>Category : {drills.category ? drills.category.name : "Categroy Not Found"}</p>
													<p>
														Difficulty level :{" "}
														{drills.difficultyLevel ? drills.difficultyLevel.name : "Difficulty Level Not Found"}
													</p>
												</div>
												<div className='col-xs-3 vidFavWishOptions'>
													<ul className='list-unstyled list-inline'>
														<li>
															<a onClick={() => this.addToFavourite(drills._id)}>
																<img src={AddToFav} alt='' />
															</a>
														</li>
														<li>
															<a href='#'>
																<img src={WatchList} alt='' />
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className='speedLevelSettingsMain form-group'>
												<div className='row'>
													<div className='col-xs-6'>
														<div className='speedLevelSettings'>
															<h5>
																Speed level <span>{i + 1}</span>
															</h5>
														</div>
													</div>
													<div className='col-xs-3'>
														<div className='speedLevelControl'>
															<a className={this.state.decreaseArrow == false ? "disbaledBtn" : ""}
																onClick={() => this.onChangeDecreasePlayerVideo("decrease")}>
																<img src={ArrowUp} alt='' />
															</a>
														</div>
													</div>
													<div className='col-xs-3'>
														<div className='speedLevelControl'>
															<a className={this.state.increaseArrow == false ? "disbaledBtn" : ""}
																onClick={() => this.onChangeIncreasePlayerVideo("increase")}>
																<img src={ArrowDown} alt='' />
															</a>
														</div>
													</div>
													<div className='clearfix'></div>
												</div>
											</div>
										</div>
									</div>
								</div>



							</div>
						</div>
					);
				})}
			</div>
		);

	}
}

export default InnerContent;
