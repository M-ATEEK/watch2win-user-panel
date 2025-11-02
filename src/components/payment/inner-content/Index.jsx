import React, { Component } from "react";
import config from "../../../config";
import { Link } from "react-router-dom";
import axios from "axios";
import Auth from "../../Services/Auth";
import moment from 'moment';
import DropIn from "braintree-web-drop-in-react";
import VisaCard from "../../../assets/images/visaCard.png";
import { WaveLoading } from 'react-loadingg';
import BackArrow from "../../../assets/images/backArrow.png";
import MasterCard from "../../../assets/images/masterCard.png";
import Paypal from "../../../assets/images/paypal.png";
import { Redirect } from "react-router-dom";


class InnerContent extends Component {
	instance;
	state = {
		amount: "",
		clientToken: null,
		payment_method_nonce: null,
		loggedinUser: []

	};
	async componentDidMount() {
		const id = this.props.id
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
		console.log(duration)
		if (duration <= "30") {
			alert("subscribed");
			window.location.href = "/subscription";
		}
		axios.get(`${config.API_URL}/admin/subscription/${id}`, {
			headers: {
				Authorization: token,
			},
		})
			.then((response) => {
				const { price } = response.data.data.subscriptions
				this.setState({
					price: price
				})
			})

		await axios.get(`${config.API_URL}/checkoutNew`)
			.then((response) => {
				this.setState({
					clientToken: response.data.token,
				});
			})
	}
	async buy() {
		// Send the nonce to your server
		const data = await this.instance.requestPaymentMethod();
		let params = {
			data: data,
			sub_id: this.props.id
		}
		await axios
			.post(`${config.API_URL}/checkout`, params, {
				headers: {
					Authorization: Auth.getToken(),
				},
			}).then((response)=>{
				if(response.data.result.success){
					alert('you subscribe successfully')
				}
				else{
					alert('Error')
				}
			})
	}
	render() {

		if (!this.state.clientToken) {
			return (
				   
					<WaveLoading  />
				
			);
		} else {
			return (
				<div className="mainInnerContent">
					<div className="container">
						<div className="paymentScreen">
							<div className="paymentBack">
								<Link to="#"><img src={BackArrow} alt="" /> Back</Link>
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
										<h3>${this.state.price}</h3>
									</div>
									<div className="clearfix"></div>
									{/* <hr style={{ border: "#707070 dashed 1px"}}> */}
								</div>
								<div className="row">
									<div className="col-md-6 col-sm-6 col-xs-6"></div>
									<div className="col-md-6 col-sm-6 col-xs-6 text-right">
										<h3>Total  &nbsp;&nbsp;  ${this.state.price}</h3>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
							<div className="paymentTop">
								<DropIn
									options={{ authorization: this.state.clientToken }}
									onInstance={(instance) => (this.instance = instance)}
								/>
								<Link to="#" onClick={this.buy.bind(this)} className="btn btnFilled">Pay Now</Link>
							</div>
							{/*	<div className="paymentTop">
						<div className="row">
							<div className="col-md-12">
								<h3>Choose your payment method</h3>
								<hr style={{border: 0}} /> 
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h3>
									 <input type="radio" name="cards" /> 
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
									<input type="radio" name="cards" />  
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
					*/}

						</div>
					</div>
				</div>


			);
		}

	}
}

export default InnerContent;
