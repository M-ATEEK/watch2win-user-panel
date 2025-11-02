import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../common/ProtectRoute";
import Home from "../home/Index";
import Drill from "../drills/Index";
import DrillsCategory from "../drills-category/Index";
import DrillsDetail from "../single-drill-detail/Index";
import HomeNavbar from "../home-navbar/Index";
import Search from "../search/Index";

class SearchBarLayout extends Component {
	state = {};

	render() {
		return (
			<>
				<HomeNavbar />
				<Switch>
					<ProtectedRoute path='/home' component={Home} />
					<ProtectedRoute path='/drills' exact component={Drill} />
					<ProtectedRoute path='/drills/category/:id' exact component={DrillsCategory} />
					<ProtectedRoute path='/drills/detail/:id' exact component={DrillsDetail} />
					<ProtectedRoute path='/search/:name' exact component={Search} />
				</Switch>
			</>
		);
	}
}

export default SearchBarLayout;
