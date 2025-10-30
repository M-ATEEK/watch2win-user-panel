import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";

import Auth from "../Services/Auth";

class Profile extends Component {
	state = {};

	render() {
	
		return (
			<>
				<InnerBanner />
				<InnerContent  />
				<MobileNavbar />
			</>
		);
	}
}

export default Profile;
