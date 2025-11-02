import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import axios from "axios";
import Auth from "../../Services/Auth";

import WorkoutImg from "../../../assets/images/workoutImg.png";
import UserImage from "../../../assets/images/userImage.png";

class InnerContent extends Component {
	state = {
		data: [],

	};

	render() {

		return (
			<div className="mainInnerContent innerMainProfileContent">
				<div className="container">
					<ul className="nav nav-tabs">
						<li className="active"><Link data-toggle="tab" to="#act"><img src={WorkoutImg} alt="" /> <span>Activity</span></Link></li>
					</ul>
					<div className="tab-content">
						<div id="act" className="tab-pane fade in active">
							<div className="searchResultsParent">
								<div className="searchResultsMain">
									<div className="searchResults form-group drillSearchSection">
										<div className="col-md-6 col-sm-8 col-xs-9">
											<img src={UserImage} alt="" /> <span className="drillSearchName">John Ross  <span className="drillAtheleteName">COMPLETE  <strong>DRILL 8</strong></span></span>
										</div>
										<div className="col-md-6 col-sm-4 col-xs-3 searchResultsFollowBtn">
											<p>5 Min ago</p>
										</div>
										<div className="clearfix"></div>
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
