import React, { Component } from "react";
import BasketBallImage from "../../../assets/images/b1.png";
import Slider from "react-slick";
import config from "../../../config";
import axios from "axios";
import { Redirect } from "react-router";
import { data } from "jquery";
import Auth from "../../Services/Auth";

class InnerBanner extends Component {
	state = {
		data: [],
	};

	getAllData = () => {

		axios.get(`${config.API_URL}/admin/categories`, {
				headers: {
					Authorization: Auth.getToken(),
				},
			})
			.then((response) => {
				this.setState({
					data:[...response.data.data.category],
				});
			});
	};
	componentDidMount() {
		this.getAllData();
	}

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
		};
		const token = Auth.getToken();
		if (!token) {
			return <Redirect to='/login' />;
		}
		const data = this.state.data;
			if (data.length > 0) {
				return (
					<div className='innerBanner'>
						<div className='container'>
							<div className='innerBannerContent'>
								
								<Slider {...settings}>	
									{data.map((category, i) => {
											return (
												<div  key={i} className='bannerContent'>
													{category.image === undefined ? (
														<img src={BasketBallImage} />
														) : (
														<img src={`${config.IMG_URL}/image/${category.image}`}/>
													)} 
														<h3>{category.name}</h3>
												</div>
											)

										})
									}
								</Slider>
							</div>
						</div>
					</div>
				);
		}else{
			return 'Record not found';
		}

	}
}

export default InnerBanner;
