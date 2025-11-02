import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import config from "../../../config";
import Auth from "../../Services/Auth";


class InnerContent extends Component {
    state = {

        athelete: [],
        user: [],
        category: [],
        searchName: ''


    };
    componentDidMount() {
        this.setState({
            searchName: this.props.name
        });

    }
    render() {

        return (
            <div>
                <div className="innerBanner">
                    <div className="container">
                        <div className="innerBannerContent">
                            <h4>Search results <span>{this.state.searchName}</span></h4>
                            <ul className="list-unstyled list-inline searchBtns">
                                <li><a href="#" className="btnFilled">People</a></li>
                                <li><a href="#">Category</a></li>
                                <li><a href="#">Atheletes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mainInnerContent">
                    <div className="container">
                        <div className="searchResultsParent">
                            <h3>People</h3>
                            <div className="searchResultsMain">
                                <div className="searchResults form-group">
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <img src="images/userImage.png" alt="" /> <span>John Ross</span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 searchResultsFollowBtn">
                                        <a href="#" className="btn btnFilled">Follow</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default InnerContent;
