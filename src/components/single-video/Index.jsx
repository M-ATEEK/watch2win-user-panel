import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerContent from "./inner-content/Index";

class SingleVideo extends Component {
	state = {};
	render() {

		const drillId = this.props.match.params.id;
		return (
			<>
				<InnerContent  id={drillId} />
				<MobileNavbar />
			</>
		);
	}
}

export default SingleVideo;
