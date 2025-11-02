import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";

class Drill extends Component {
	state = {};
	render() {
		return (
			<>

				<InnerBanner />
				<InnerContent />
				<MobileNavbar />
			</>
		);
	}
}

export default Drill;
