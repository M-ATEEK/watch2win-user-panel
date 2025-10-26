import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/Store";
import App from "./App";

const Root = () => {
	return (
		<Provider store={store}>
			<Router>
				<Route path='/' component={App}></Route>
			</Router>
		</Provider>
	);
};

export default Root;
