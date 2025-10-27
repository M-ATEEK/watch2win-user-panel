import React, { Component } from "react";
import AllDrills from "../../../assets/images/allDrills.png";

class InnerBanner extends Component {
	state = {
		data: [],
	};

	render() {

		return (
			<div className="innerBanner innerPagesBanner">
				<div className="container">
					<div className="innerBannerArea" style={{ backgroundImage: "url(" + AllDrills + ")", backgroundRepeat: 'no-repeat' }} >
						<h3>All Drills</h3>
					</div>
				</div>
			</div>
		);

	}
}

export default InnerBanner;
