import React, { Component } from "react";
import config from "../../../config";
import axios from "axios";
import Auth from "../../Services/Auth";

import VisaCard from "../../../assets/images/visaCard.png";
import BackArrow from "../../../assets/images/backArrow.png";
import MasterCard from "../../../assets/images/masterCard.png";
import Paypal from "../../../assets/images/paypal.png";

class InnerContent extends Component {
	state = {


	};

	render() {

		return (
			<div className="mainInnerContent">
			<div className="container">
				<div className="paymentScreen">
					<div className="paymentBack">
						<a href="#"><img src={BackArrow} alt="" /> Back</a>
					</div>
					<div className="paymentTop">
						<div className="row">
							<div className="col-md-12">
								<h3>Order Summary</h3>
							</div>
							<div className="clearfix"></div>
							{/* <hr style={{borderBottom: "#707070 solid 1px"}}> */}
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-6">
								<h3>Professional Plan</h3>
							</div>
							<div className="col-md-6 col-sm-6 col-xs-6 text-right">
								<h3>$10.00</h3>
							</div>
							<div className="clearfix"></div>
							{/* <hr style={{ border: "#707070 dashed 1px"}}> */}
						</div>
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-6"></div>
							<div className="col-md-6 col-sm-6 col-xs-6 text-right">
								<h3>Total  &nbsp;&nbsp;  $10.00</h3>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
					<div className="paymentTop">
						<div className="row">
							<div className="col-md-12">
								<h3>Choose your payment method</h3>
								{/* <hr style={{border: 0}}> */}
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h3>
									{/* <input type="radio" name="cards"> */}
									<label>
										<img src={VisaCard} alt="" />
										<img src={MasterCard} alt="" />
									</label>
								</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h3>
									{/* <input type="radio" name="cards">  */}
									<label>
										<img src={Paypal} alt="" />
										<span>The safer easier way to pay </span>
									</label>
								</h3>
							</div>
						</div>
					</div>
					<div className="text-right form-group">
						<a href="#" className="btn btnFilled">Pay Now</a>
					</div>
				</div>
			</div>
		</div>
	

		);

	}
}

export default InnerContent;
