import React, { Component } from "react";
import BasketBallImage from "../../../assets/images/basketBallImg.png";
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
		
		return (
			<div className="innerBanner innerPagesBanner">
				<div className="container">
					<div className="innerBannerArea" style={{ backgroundImage: "url(" + BasketBallImage + ")", backgroundRepeat: 'no-repeat' }} >
						<h3>Basketball</h3>
					</div>
				</div>
			</div>
		);

	}
}

export default InnerBanner;
