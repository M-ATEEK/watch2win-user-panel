import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";
import { Redirect, Link } from "react-router-dom";
import Auth from "../Services/Auth";

class Home extends Component {
	state = {};


	renderRedirect=()=>{
      
		const token = Auth.getToken();
		if (token) {
			return <Redirect to='/home' />;
		}
	}
		
	render() {
		{this.renderRedirect()}
		return (
			<>

				<InnerBanner />
				<InnerContent />
				<MobileNavbar />
			</>
		);
	}
}

export default Home;
