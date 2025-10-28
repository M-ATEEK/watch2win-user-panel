import React, { Component } from "react";
import UserSm from "../../../assets/images/userSm.png";
import DurationIcon from "../../../assets/images/durationIcon.png";
import VidNameIconLg from "../../../assets/images/vidNameIconLg.png";
import config from "../../../config";
import axios from "axios";
import Auth from "../../Services/Auth";

class InnerBanner extends Component {
	state = {
		data: [],
	};
	getDrillsData = () => {
		const drillId = this.props.id;
		axios
			.get(`${config.API_URL}/admin/drills/${drillId}`, {
				headers: {
					Authorization: Auth.getToken(),
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

	durations = (videos) => {
		const length = videos.length;
		var sum = 0;
		if (length > 0) {
			videos.map((video, index) => {

				sum = sum + video.duration;

			})

		}
		if (sum >= 0) {
			return (

				<li style={{ color: "white" }}>
					<img src={DurationIcon} alt='' /> {sum}
				</li>


			);
		}
	}

	render() {
		const { data } = this.state;
		if (data != null && data.length > 0) {
			{
				return (
					<div className='innerBanner innerPagesBanner innerBannerOptions'>
						<div className='container'>
							{data.map((drills, index) => {
								const backgroundImg = `${config.IMG_URL}/image/drills/${drills.thumbnail}`;
								return (
									<div
										key={index}
										className='innerBannerArea'
										style={{ backgroundImage: "url(" + backgroundImg + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
									>
										<div className='videoSettings'>
											<div className='col-md-6 col-sm-6 col-xs-6'>
												<ul className='videoLeftSettings uploader list-unstyled'>
													<li>
														{/* <a href="#"> */}
														<img
															style={{ width: "55px" }}
															src={drills.athlete ? `${config.IMG_URL}/image/${drills.athlete.image}` : UserSm}
															alt=''
														/>
														{/* <img src={UserSm} alt="" /> */}
														&nbsp; {drills.athlete ? drills.athlete.name : "Name Not Found"}
														{/* </a> */}
													</li>
												</ul>
											</div>
											{/* <div className="col-md-6 col-sm-6 col-xs-6">
												<ul className="videoRightSettings favourite list-unstyled">
													<li>
														<a href="#">
															<img src={HeartIcon} alt="" /> <span>222</span></a>
													</li>
												</ul>
											</div> */}
										</div>
										<h3>
											<img src={VidNameIconLg} alt='' /> {drills.name}{" "}
										</h3>
										<div className='durationSettings'>
											<ul className='list-unstyled list-inline'>
												{
													drills.videos.length > 0
														?
														(
															this.durations(drills.videos)
														)
														: (
															""
														)
												}
												<li>{drills.videos ? drills.videos.length : 0} Drills</li>
											</ul>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			}
		} else {
			return (
				<div className='innerBanner innerPagesBanner innerBannerOptions'>
					<div className='container'>
						<div className='row'>
							<h2 style={{ color: "#fee6cc", textAlign: "center" }}>Drill Not Found</h2>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default InnerBanner;
