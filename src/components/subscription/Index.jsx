import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerContent from "./inner-content/Index";

class Subscription extends Component {
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

export default Subscription;
