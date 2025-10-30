import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerContent from "./inner-content/Index";

class SingleVideo extends Component {
	state = {};

	render() {
		
		return (
			<>
				<InnerContent  />
				<MobileNavbar />
			</>
		);
	}
}

export default SingleVideo;
