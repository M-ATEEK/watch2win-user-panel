import React, { Component } from "react";

import config from "../../config";
import axios from "axios";
import Auth from "../Services/Auth";
import { Redirect, Link } from "react-router-dom";
import Joi from "joi";

class Register extends Component {
	state = {

		login: false,
		errors: {},
		message: "",
		emptyfield: "",
		auth: false,
		data: {
			firstName: "",
			lastName: "",
			userName: "",
			email: "",
			password: "",
			confirm_password: "",
			role: 'user',
		},
	};

	schema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("Email"),
		password: Joi.string().required().min(6).label("Password"),
		firstName: Joi.string()
			.required()
			.label("First Name"),
		lastName: Joi.string()
			.required()
			.label("Last Name"),
		userName: Joi.string()
			.required()
			.label("User Name"),
	});

	submitHandler = (e) => {
		e.preventDefault();
		if (this.state.data.email === "" && this.state.data.password === "") {
			this.setState({
				message: "Enter email and password",
			});
		} else {
			axios.post(`${config.API_URL}/signup`, this.state.data).then((response) => {
				if (response.data.success) {
					if (response.data.data.token !== undefined) {
						Auth.setToken(response.data.data.token);
						this.props.history.push("/home");
					}
				} else if (response.data.success === false) {
					this.setState({
						message: response.data.errors.email.message,
					});
				}
			});
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const token = Auth.getToken();
		if (token) {
			return <Redirect to='/home' />;
		}
		return (
			<div className='loginBg'>
				<div className='container'>
					<div className='loginArea'>
						<h2>SIGNUP</h2>
						<div className='formArea'>
							<form onSubmit={this.submitHandler} method='post'>
								<p className='text-danger'>{this.state.message}</p>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='First Name'
										name='firstName'
										value={this.state.data.firstName}
										onChange={this.handleInput} />
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Last Name'
										name='lastName'
										value={this.state.data.lastName}
										onChange={this.handleInput}
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Unique Username'
										name='userName'
										value={this.state.data.userName}
										onChange={this.handleInput}
									/>
								</div>
								<div className='form-group'>
									<input
										type='email'
										className='form-control'
										placeholder='Email'
										name='email'
										value={this.state.data.email}
										onChange={this.handleInput}
									/>
								</div>
								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='Password'
										name='password'
										onChange={this.handleInput}
										value={this.state.data.password}
									/>
									{this.state.errors.password && <span className='text-danger'>{this.state.errors.password}</span>}
								</div>
								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='Confirm Password'
										name='confirm_password'
										onChange={this.handleInput}
										value={this.state.data.confirm_password}
									/>
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btnLogin'>
										REGISTER
									</button>
								</div>
								<div className='form-group orTxtMain'>
									<p className='orTxt'>
										<span>Or</span>
									</p>
								</div>
								<div className='form-group'>
									<a href='#' className='fbBtn'>
										<img src='images/fbBtn.png' alt='' /> Register with Facebook <div className='clearfix'></div>
									</a>
								</div>
								<div className='form-group'>
									<a href='#' className='gBtn'>
										<img src='images/gBtn.png' alt='' />
										Register with Google <div className='clearfix'></div>
									</a>
								</div>
								<div>
									<p>
										Already have an account ? <a href='/login'>Sign in</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
