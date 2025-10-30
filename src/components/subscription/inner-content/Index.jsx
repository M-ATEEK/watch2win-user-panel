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


	};

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
		};

		return (
			<div className="mainInnerContent">
				<div className="container">
					<div className="packages">
						<Slider  {...settings}>
							<div className="col-md-12">
								<div className="packageDesc">
									<img src={Dumbel} alt="" />
									<h3>Professional Plan</h3>
									<p>Sed ut perspiciatis unde
							  {/* <br> */}
							   natus error sit  quae ab illo inventor</p>
									{/* <hr> */}
									<h2>$340/Month</h2>
									<a href="#" className="btn btnUnFilled">Get Started</a>
								</div>
							</div>
						</Slider>
						<Slider  {...settings}>
							<div className="col-md-12">
								<div className="packageDesc">
									<img src={Dumbel} alt="" />
									<h3>Professional Plan</h3>
									<p>Sed ut perspiciatis unde
							  {/* <br> */}
							   natus error sit  quae ab illo inventor</p>
									{/* <hr> */}
									<h2>$340/Month</h2>
									<a href="#" className="btn btnUnFilled">Get Started</a>
								</div>
							</div>
						</Slider>
						<Slider  {...settings}>
							<div className="col-md-12">
								<div className="packageDesc">
									<img src={Dumbel} alt="" />
									<h3>Professional Plan</h3>
									<p>Sed ut perspiciatis unde
							  {/* <br> */}
							   natus error sit  quae ab illo inventor</p>
									{/* <hr> */}
									<h2>$340/Month</h2>
									<a href="#" className="btn btnUnFilled">Get Started</a>
								</div>
							</div>
						</Slider>
						<Slider  {...settings}>
							<div className="col-md-12">
								<div className="packageDesc">
									<img src={Dumbel} alt="" />
									<h3>Professional Plan</h3>
									<p>Sed ut perspiciatis unde
							  {/* <br> */}
							   natus error sit  quae ab illo inventor</p>
									{/* <hr> */}
									<h2>$340/Month</h2>
									<a href="#" className="btn btnUnFilled">Get Started</a>
								</div>
							</div>
						</Slider>

					</div>
				</div>
			</div>

		);

	}
}

export default InnerContent;
