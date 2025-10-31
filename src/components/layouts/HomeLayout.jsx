import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Index";
import HomeNavbar from "../home-navbar/Index";

class HomeLayout extends Component {
    state = {}

    render() {
        return (
            <>
                <HomeNavbar />
                <Switch>
                    <Route path="/home" component={Home} />
                </Switch>
            </>
        )
    }
}

export default HomeLayout