import React, { Component } from "react";
import "../../assets/css/Notfound.css"
import { Link } from "react-router-dom";


class NotFound extends Component {
	constructor(props) {
		super(props);
		this.state = {
	
		};
	}
	
	render() {
		return (
			<div className="main_notfound">
			 <h1 className="heading_notfound">404 error Page Not Found</h1>
			 <h1 className="heading_notfound"><Link className="anchor_notfound" to="/home">Go Back to Home Page</Link></h1>
			</div>
		);
	}
}

export default NotFound;
