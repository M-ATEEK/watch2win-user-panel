import React, { Component } from "react";
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

class InnerContent extends Component {
	state = {
		data: [],

	};

	render() {

		return (
			<div className="mainInnerContent">
				<div className="container">
					<div className="searchResultsParent">
						<h3 className="hidden-xs">Video Thumbnail will shown here </h3>
						<div className="videoLg">
							<div className="videoMain form-group">
								<div className="videoMainArea">
									<img src={VideoLarge} alt="" />
									<div className="videoPlay">
										<a href="#"><img src={Play} alt="" /></a>
									</div>
									<div className="videoSettings">
										<div className="col-md-12 col-sm-12 col-xs-12">
											<ul className="videoRightSettings list-unstyled">
												<li>
													<a href="#" className="premium">Premium</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="videoBtmOptions hidden-xs">
									<div className="row">
										<div className="col-md-4 col-sm-4 speedLevel">
											<h4>Speed level</h4>
											<div className="col-md-2 col-sm-2 speedLevelControl">
												<div className="row">
													<div className="col-md-12 form-group">
														<a href="#"><img src={ArrowUp} alt="" /></a>
													</div>
													<div className="col-md-12">
														<a href="#"><img src={ArrowDown} alt="" /></a>
													</div>
												</div>
											</div>
											<h5>4</h5>
										</div>
										<div className="col-md-4 col-sm-4 startVideo">
											<a href="#"><img src={PlaySmall} alt="" /> &nbsp; Start</a>
										</div>
										<div className="col-md-4 col-sm-4 vidFavWishOptions">
											<ul className="list-unstyled list-inline">
												<li><a href="#"><img src={AddToFav} alt="" /></a></li>
												<li><a href="#"><img src={WatchList} alt="" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<div class="videoDrillTexts hidden-xs">
									<h3>DRILL SUMMARY</h3>
									<p>Category          : Baseball</p>
									<p>Difficulty level  : Intermediate</p>
									<p>Speed level       :  4</p>
								</div>

								<div className="videoPageBtmSettings hidden-lg hidden-md hidden-sm">
									<div className="row form-group">
										<div className="col-xs-9">
											<h4>Video Title will shown here </h4>
											<p>Category          : Baseball</p>
											<p>Difficulty level  : Intermediate</p>
										</div>
										<div className="col-xs-3 vidFavWishOptions">
											<ul className="list-unstyled list-inline">
												<li><a href="#"><img src={AddToFav} alt="" /></a></li>
												<li><a href="#"><img src={WatchList} alt="" /></a></li>
											</ul>
										</div>
									</div>
									<div className="speedLevelSettingsMain form-group">
										<div className="row">
											<div className="col-xs-6">
												<div className="speedLevelSettings">
													<h5>Speed level <span>4</span></h5>
												</div>
											</div>
											<div className="col-xs-3">
												<div className="speedLevelControl">
													<a href="#"><img src={ArrowUp} alt="" /></a>
												</div>
											</div>
											<div className="col-xs-3">
												<div className="speedLevelControl">
													<a href="#"><img src={ArrowDown} alt="" /></a>
												</div>
											</div>
											<div className="clearfix"></div>
										</div>
									</div>
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
