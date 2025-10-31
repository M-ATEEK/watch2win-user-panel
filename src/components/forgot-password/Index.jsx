import React, { Component } from "react";
import config from "../../config";
import axios from "axios";


class ForgotPassword extends Component {
	state = {
		showFirstTab: true,
		showSecondTab: false,
		showThirdTab: false,
		firstTab: false,
		secondTab: false,
		message: "",
		forgetpass_email: "",
		data: {

			new_password: "",
			confirm_password: "",
			reset_token: ""

		},
		code: "",

	};


	switchTab = (e, tab) => {
		e.preventDefault();
		switch (tab) {
			case "showSecondTab":

				console.log("azeem");
				this.setState({
					firstTab: true
				});
				this.submitHandler();

				break;
			case "showThirdTab":
				this.setState({
					showFirstTab: false,
					showSecondTab: false,
					showThirdTab: true,
					secondTab: true,

				});
				break;
			default:
				return;
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	submitHandler = () => {

		if (this.state.forgetpass_email === "") {
			this.setState({
				message: "Enter email",
			});
		} else {

			if (this.state.firstTab == true) {


				const data = {
					forgetpass_email: this.state.forgetpass_email
				};
				console.log(data);
				axios.post(`${config.API_URL}/forgetpassword`, data).then((response) => {
					if (response.data.success) {
						console.log("resposne is" + JSON.stringify(response));
						this.setState({
							showFirstTab: false,
							showSecondTab: true,
							showThirdTab: false,
							code: response.data.data.user.code,
							data: {
								reset_token: response.data.data.user.resetPasswordKey,
								new_password: "",
								confirm_password: "",

							}


						});

					} else if (response.data.success === false) {
						this.setState({
							message: response.data.errors.email.message,
						});
					}
				});


			}

		}
	};

	
	handleOnChange = (e) => {
		let data = { ...this.state.data };
		data[e.currentTarget.name] = e.currentTarget.value;
		this.setState({
			data,
		});
	};



	submitResetPassowrd = (e) => {
		console.log("sdsdsdsd " + this.state.secondTab);
		if (this.state.data.new_password === "" && this.state.data.confirm_password == "") {
			this.setState({
				message: "Enter password and confirm password",
			});
		} else {
			if (this.state.secondTab == true) {

				console.log("data" + JSON.stringify(this.state.data));

				axios.post(`${config.API_URL}/resetpassword`, this.state.data).then((response) => {
					if (response.data.success == true) {
						this.props.history.push("/login");
						
					}
				
				});
		


			}
		}
	}



	render() {
		const { showFirstTab, showSecondTab, showThirdTab } = this.state;
		return (
			<div className='loginBg forgotScreen'>

				<div className='container'>
					<div className='loginArea forgotBg'>
						<p className='text-danger'>{this.state.message}</p>
						<h2>Forgot Password</h2>
						<div className='formArea' style={{ display: showFirstTab ? "block" : "none" }}>
							<form action='#' method='post'>
								<div className='form-group'>
									<input type='email' className='form-control' name="forgetpass_email" value={this.state.forgetpass_email} onChange={this.handleInput} placeholder='Enter Email' />
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btnLogin' onClick={(e) => this.switchTab(e, "showSecondTab")}>
										Next
									</button>
								</div>
							</form>
						</div>

						<div className='formArea' style={{ display: showSecondTab ? "block" : "none" }}>
							<form action='#' method='post'>
								<div className='form-group'>
									<input type='text' className='form-control' name="code" value={this.state.code} onChange={this.handleInput} placeholder='Enter verification code' />
								</div>
								<div className='form-group'>
									<p>Please enter a code that sent</p>
									<p>
										<a href='#'>{this.state.forgetpass_email}</a>
									</p>
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btnLogin' onClick={(e) => this.switchTab(e, "showThirdTab")}>
										Next
									</button>
								</div>
							</form>
						</div>

						<div className='formArea'>
							<form action='#' method='post' style={{ display: showThirdTab ? "block" : "none" }}>

								<div className='form-group'>
									<input type='password' className='form-control' name="new_password" placeholder='Password' value={this.state.data.new_password} onChange={this.handleOnChange}
									/>

								</div>
								<div className='form-group'>
									<input type='password' className='form-control' name="confirm_password" value={this.state.data.confirm_password} placeholder='Confirm Password' onChange={this.handleOnChange}
									/>
								</div>
								<div className='form-group'>
									<button type='button' className='btn btnLogin' onClick={(e) => this.submitResetPassowrd(e)}>
										RESET
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ForgotPassword;
