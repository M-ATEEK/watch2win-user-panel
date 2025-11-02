import React, { Component } from "react";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerBanner from "./inner-banner/Index";
import InnerContent from "./inner-content/Index";
import { Redirect, Link } from "react-router-dom";
import Auth from "../Services/Auth";

class DrillsCategory extends Component {
	state = {};

	componentDidMount() {
		console.log(this.props.match.params.id);
	}

	renderRedirect = () => {
		const token = Auth.getToken();
		if (token) {
			return <Redirect to='/home' />;
		}
	};

	render() {
		{
			this.renderRedirect();
		}
		const categoryId = this.props.match.params.id;
		return (
			<>
				<InnerBanner />
				<InnerContent id={categoryId} />
				<MobileNavbar />
			</>
		);
	}
}

export default DrillsCategory;
