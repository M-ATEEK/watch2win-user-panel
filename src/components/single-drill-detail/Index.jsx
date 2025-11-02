import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";

class SingleDrillDetail extends Component {
	state = {};

	componentDidMount() {
		console.log(this.props.match.params.id);
	}

	// renderRedirect = () => {
	// 	const token = Auth.getToken();
	// 	if (token) {
	// 		return <Redirect to='/home' />;
	// 	}
	// };

	render() {
		// {
		// 	this.renderRedirect();
		// }
		const drillId = this.props.match.params.id;
		console.log(drillId);
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
