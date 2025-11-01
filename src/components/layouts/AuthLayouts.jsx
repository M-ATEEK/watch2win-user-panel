import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ForgotPassword from "../forgot-password/Index";
import Login from "../login/Index";
import Navbar from "../navbar/Index";
import Register from "../register/Index";

class AuthLayout extends Component {
	state = {};

	render() {
		return (
			<>
				<Navbar />
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/forgot-password' component={ForgotPassword} />
				</Switch>
			</>
		);
	}
}

export default AuthLayout;
