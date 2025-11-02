import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";

class SingleDrillDetail extends Component {
	state = {};
	render() {
		
		const drillId = this.props.match.params.id;
		return (
			<>
				<InnerBanner id={drillId} />
				<InnerContent id={drillId} />
				<MobileNavbar />
			</>
		);
	}
}

export default SingleDrillDetail;
