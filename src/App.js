import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayouts";
import HomeLayout from "./components/layouts/HomeLayout";
import "./assets/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/custom.css";
import "./assets/css/media.css";
import NotFound  from "./components/NotFound/Notfound"
import LandingPage from "./components/landing/index"


function App() {
	return (
		<>
		    <Switch>
		    <Route path='/' exact component={LandingPage} />
			<Route path='/login' component={AuthLayout} />
			<Route path='/register' component={AuthLayout} />
			<Route path='/forgot-password' component={AuthLayout} />
			<Route path='/home' component={HomeLayout} />
			<Route path='/drills' exact component={HomeLayout} />
			<Route path='/drills/category/:id' exact component={HomeLayout} />
			<Route path='/drills/detail/:id' exact component={HomeLayout} />
			<Route path='/search/:name' exact component={HomeLayout} />
			<Route path='/activites' exact component={HomeLayout} />
			<Route path='/logout' component={HomeLayout} />


			<Route path='/single/video/:id/:videoId' exact component={HomeLayout} />
			<Route path='/single/activity' exact component={HomeLayout} />
			<Route path='/payment/:id' exact component={HomeLayout} />
			<Route path='/subscription' exact component={HomeLayout} />
			<Route component={NotFound} />

			
          </Switch>

		</>
	);
}

export default App;
