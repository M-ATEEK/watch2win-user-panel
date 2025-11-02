import React, { Component } from "react";
import userIcon from "../../../assets/images/user.png";
import userSmallIcon from "../../../assets/images/userSm.png";
import playIcon from "../../../assets/images/play.png";
import videoThumbnail from "../../../assets/images/video.png";
import videoNameIcon from "../../../assets/images/videoNameIcon.png";
import drillImage from "../../../assets/images/drillsImg.png";
import heartIcon from "../../../assets/images/heart.png";
import durationIcon from "../../../assets/images/durationIcon.png";
import config from "../../../config";
import axios from "axios";
import { Redirect } from "react-router";
import Auth from "../../Services/Auth";


class InnerContent extends Component {
    state = {
        data: [],
        visible: 1,
        page: 1
    };

    loadMore = this.loadMore.bind(this);
    getDrillsData = () => {

        axios.get(`${config.API_URL}/admin/drills/?page=${this.state.page}`, {
            headers: {
                Authorization: Auth.getToken()
            },
        })
            .then((response) => {
                this.setState({
                    data: [...response.data.data.drills],

                });
            });
    };
    componentDidMount() {
        this.getDrillsData();
    }
    loadMore() {
        this.setState((old) => {
            return {
                page: old.page + 1
            }
        })
        this.getDrillsData();
    }


    render() {
        const token = Auth.getToken();
        if (!token) {
            return <Redirect to='/login' />;
        }
        const data = this.state.data;
        const dataVideos = this.state.drillsVideosData;

        if (data.length > 0) {
            return (
                <div className="mainInnerContent">
                    <div className="container">
                        <div className="row">
                            {data.map((drills, index) => {
                                return (
                                    <div key={index} className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="drillsArea drillsMain2">
                                            <div className="drillsMain">
                                                <div className="videoMain form-group">
                                                    <div className="videoMainArea">
                                                        <img src={drillImage} alt="" />
                                                        <div className="videoName">
                                                            <img src={videoNameIcon} alt="" />
                                                            <span>{drills.name}   </span>
                                                        </div>
                                                        <div className="videoSettings">
                                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                                <ul className="videoLeftSettings uploader list-unstyled">
                                                                    <li>
                                                                        <a href="#"><img src={userSmallIcon} alt="" /> &nbsp;  {drills.athlete ? drills.athlete.name : 'Name Not Found'}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                                <ul className="videoRightSettings favourite list-unstyled">
                                                                    <li>
                                                                        <a href="#"><img src={heartIcon} alt="" /> <span>222</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="durationSettings">
                                                            <ul className="list-unstyled">
                                                                <li>{drills.videos.length} Drills</li>
                                                                <li><img src={durationIcon} alt="" /> 12:41</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                );
                            }
                            )}
                        </div>
                    </div>
                </div>
            );
        } else {
            return '';
        }

    }

}

export default InnerContent;
