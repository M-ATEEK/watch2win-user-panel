import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import MobileNavbar from "../Mobile-navbar/Index";
import InnerContent from "./inner-content/Index";

import Auth from "../Services/Auth";

class Search extends Component {
	state = {};


	componentDidMount() {
		console.log(this.props.match.params.name);
	}
	
	render() {
		const searchName = this.props.match.params.name;
		return (
			<>
				<InnerContent name={searchName}/>
				<MobileNavbar />
			</>
		);
	}
}

export default Search;
