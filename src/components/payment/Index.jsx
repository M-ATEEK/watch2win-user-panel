import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerContent from "./inner-content/Index";

class Payment extends Component {
	state = {};

	render() {
		const subid = this.props.match.params.id;
		return (
			<>
				<InnerContent id={subid} />
				<MobileNavbar id={subid}/>
			</>
		);
	}
}

export default Payment;
