import React from "react";
import { Route } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayouts";
import "./assets/css/bootstrap.css";
import "./assets/css/custom.css";
import "./assets/css/media.css";

function App() {
	return (
		<>
			<Route path='/login' component={AuthLayout} />
		</>
	);
}

export default App;
