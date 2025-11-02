import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Slider from "react-slick";
import config from "../../../config";
import axios from "axios";
import moment from 'moment';
import { data } from "jquery";
import Auth from "../../Services/Auth";

import Dumbel from "../../../assets/images/dumbel.png";


class InnerContent extends Component {
	state = {
		data: [],
		loggedinUser:[]
	};

	async componentDidMount() {
		const token = localStorage.getItem("token");
		await axios.get(`${config.API_URL}/loginUser`, {
			headers: {
				Authorization: token,
			},
		}).then((response) => {
			this.setState({
				loggedinUser: response.data.loginUser
			})
		})
		const { subscribeDetail } = this.state.loggedinUser
		var start = moment(subscribeDetail.subscribeDate);
		var current = moment().startOf('minute');
		const duration = moment.duration(current.diff(start)).asDays()
		if (duration <= "30") {
			alert("You already subscribed")
		
		axios
			.get(`${config.API_URL}/admin/subscription`, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => {
				this.setState({
					data: response.data.data.subscriptions
				})
			})
		}

	}

	sliders = () => {
		return this.state.data.map((data, i) => {
			return (
				<div key={i} className="col-md-12">
					<div className="packageDesc">
						<img src={Dumbel} alt="" />
						<h3>{data.name}</h3>
						<p> {data.details}
							{/* <br> */}
						</p>
						{/* <hr> */}
						<h2>${data.price}/Month</h2>
						<Link to={`/payment/${data._id}`} className="btn btnUnFilled">Get Started</Link>
					</div>
				</div>
			)
		});
	}
	render() {
		const data = this.state.data
		const settings = {
			dots: false,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			speed: 500
		};
		console.log(data)

		return (
			<div className="mainInnerContent">
				<div className="container">
					<div className="packages">
						<Slider  {...settings}>
							{this.sliders()}
						</Slider>

					</div>
				</div>
			</div>

		);

	}
}

export default InnerContent;
