import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Slider from "react-slick";
import config from "../../../config";
import axios from "axios";
import { data } from "jquery";
import Auth from "../../Services/Auth";

import Dumbel from "../../../assets/images/dumbel.png";


class InnerContent extends Component {
	state = {

		data: []
	};

	getSubscriptionData = () => {

		axios
			.get(`${config.API_URL}/admin/subscription`, {
				headers: {
					Authorization: Auth.getToken(),
				},
			})
			.then((response) => {
				this.setState({
					data: [...response.data.data.subscriptions],
				});

			});
	};
	componentDidMount() {
		this.getSubscriptionData();
	}

	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500
		};
		const data = this.state.data;


		return (
			<div className="mainInnerContent">
				<div className="container">
					<div className="packages">
						<Slider  {...settings}>
							{
								(data.length > 0) ? (
									[0, 1, 2].map(function () {
										return data.map((subscription, index) => {
											return (
												<div key={index} className="col-md-12">
													<div className="packageDesc">
														<img src={Dumbel} alt="" />
														<h3>{subscription.name}</h3>
														<p>{subscription.details}</p>

														<h2>${subscription.price}/Month</h2>
														<Link className= "btn btnUnFilled" to="/payment">Get Started</Link>

													</div>
												</div>
											);

										})
									})

								) : (
										<h2 style={{ color: "#fee6cc", textAlign: "center" }}>Subscription Not Found</h2>
									)
							}

						</Slider>

					</div>
				</div>
			</div>

		);

	}
}

export default InnerContent;
