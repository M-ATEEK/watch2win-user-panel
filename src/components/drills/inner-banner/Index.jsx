import React, { Component } from "react";
import BasketBallImage from "../../../assets/images/b1.png";
import AlDrills from "../../../assets/images/allDrills.png";
import Slider from "react-slick";
import config from "../../../config";
import axios from "axios";
import { Redirect } from "react-router";
import { data } from "jquery";
import Auth from "../../Services/Auth";

class InnerBanner extends Component {
	state = {
		data: [],
	};

	render() {

		const token = Auth.getToken();
		if (!token) {
			return <Redirect to='/login' />;
		}

		return (
			<div className="innerBanner innerPagesBanner">
				<div className="container">
					<div className="innerBannerArea"style={{  backgroundImage: "url(" + AlDrills + ")",backgroundRepeat: 'no-repeat'}} >
						<h3>All Drills</h3>
					</div>
				</div>
			</div>
		);

	}
}

export default InnerBanner;
