import React, { Component } from "react";
import BasketBallImage from "../../../assets/images/b1.png";
import Slider from "react-slick";

class InnerBanner extends Component {
	state = {};

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
		};
		return (
			<div className='innerBanner'>
				<div className='container'>
					<div className='innerBannerContent'>
						<Slider {...settings}>
							<div className='bannerContent'>
								<img src={BasketBallImage} alt='' />
								<h3>Basketball</h3>
							</div>
							<div className='bannerContent'>
								<img src={BasketBallImage} alt='' />
								<h3>Basketball</h3>
							</div>
							<div className='bannerContent'>
								<img src={BasketBallImage} alt='' />
								<h3>Basketball</h3>
							</div>
							<div className='bannerContent'>
								<img src={BasketBallImage} alt='' />
								<h3>Basketball</h3>
							</div>
							<div className='bannerContent'>
								<img src={BasketBallImage} alt='' />
								<h3>Basketball</h3>
							</div>
							<div className='bannerContent'>
								<img src={BasketBallImage} alt='' />
								<h3>Basketball</h3>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		);
	}
}

export default InnerBanner;
