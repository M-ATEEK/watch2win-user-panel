import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";
import { Redirect, Link } from "react-router-dom";
import Auth from "../Services/Auth";

class DrillsCategory extends Component {
	state = {};
	render() {
		const categoryId = this.props.match.params.id;
		return (
			<>
				<InnerContent id={categoryId} />
				<MobileNavbar />
			</>
		);
	}
}

export default DrillsCategory;
