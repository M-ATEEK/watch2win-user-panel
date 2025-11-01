import React, { Component } from "react";
import config from "../../../config";
import Auth from "../../Services/Auth";
import Axios from "axios";
import userIcon from "../../../assets/images/profileLg.png";

class InnerBanner extends Component {
	state = {
		data: []
	};

	componentDidMount() {

		Axios.get(`${config.API_URL}/user/detail`, {
			headers: {
				Authorization: Auth.getToken(),
			},
		}).then((response) => {
			this.setState({
				data: [response.data.data.user[0]]
			})


		})
			.catch((error) => console.log(error));
	}

	render() {
		const data = this.state.data;


		if (data.length > 0) {
			return (
				<div className="innerBanner innerProfileBanner">
					{data.map((user, index) => {
						return (
							<div key={index} className="container">
								{
									(user != null) ? (
										<div className="innerProfileTop">
											<img src={userIcon} alt="" />
											<h5>{user.firstName} {user.lastName} &nbsp; | &nbsp;  {user.userName}</h5>
											<h6><strong>{user.favouriteDrillVideos ? user.favouriteDrillVideo.length : 0}</strong> Following &nbsp;&nbsp; <strong>{user.points} </strong>Points Earned</h6>
										</div>
									) : (
											<div className="innerProfileTop">
												<h6><strong>User Not Found</strong></h6>
											</div>
										)
								}

							</div>
						);

					})
					}
				</div>

			);

		} else {
			return (
				<div className="innerBanner innerProfileBanner">

					<div className="container">
						<div className="innerProfileTop">

							<h5>User Not Found</h5>
						</div>
					</div>



				</div>

			);

		}


	}
}

export default InnerBanner;
