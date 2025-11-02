import React, { Component } from "react";

import config from "../../config";
import axios from "axios";
import Form from "../common/Form";
import Auth from "../Services/Auth";
import { Redirect, Link } from "react-router-dom";
import Joi from "joi";
class Register extends Form {
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
			roles: "user",
			image: null,
		},
	};

	schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		userName: Joi.string().required().label("User Name"),
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("Email"),
		password: Joi.string().required().min(6).label("Password"),
		confirm_password: Joi.any().valid(Joi.ref("password")).label("Confirm Password"),
		roles: Joi.string().required(),
		image: Joi.allow(""),
	});

	doSubmit = () => {
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
	};
	render() {
		const { errors } = this.state;
		return (
			<div className='loginBg signinBg'>
				<div className='container'>
					<div className='loginArea'>
						<h2>SIGNUP</h2>
						<div className='formArea'>
							<form onSubmit={this.handleSubmit} method='post'>
								<p className='text-danger'>{this.state.message}</p>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='First Name'
										name='firstName'
										value={this.state.data.firstName}
										onChange={this.handleOnChange}
									/>
									{errors.firstName && <span className='text-danger'>{errors.firstName}</span>}
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Last Name'
										name='lastName'
										value={this.state.data.lastName}
										onChange={this.handleOnChange}
									/>
									{errors.lastName && <span className='text-danger'>{errors.lastName}</span>}
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Unique Username'
										name='userName'
										value={this.state.data.userName}
										onChange={this.handleOnChange}
									/>
									{errors.userName && <span className='text-danger'>{errors.userName}</span>}
								</div>
								<div className='form-group'>
									<input
										type='email'
										className='form-control'
										placeholder='Email'
										name='email'
										value={this.state.data.email}
										onChange={this.handleOnChange}
									/>
									{errors.email && <span className='text-danger'>{errors.email}</span>}
								</div>
								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='Password'
										name='password'
										onChange={this.handleOnChange}
										value={this.state.data.password}
									/>
									{errors.password && <span className='text-danger'>{errors.password}</span>}
								</div>
								<div className='form-group'>
									<input
										type='password'
										className='form-control'
										placeholder='Confirm Password'
										name='confirm_password'
										onChange={this.handleOnChange}
										value={this.state.data.confirm_password}
									/>
									{errors.confirm_password && <span className='text-danger'>{errors.confirm_password}</span>}
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
									<Link to='#' className='fbBtn'>
										<img src='images/fbBtn.png' alt='' /> Register with Facebook <div className='clearfix'></div>
									</Link>
								</div>
								<div className='form-group'>
									<Link to='#' className='gBtn'>
										<img src='images/gBtn.png' alt='' />
										Register with Google <div className='clearfix'></div>
									</Link>
								</div>
								<div>
									<p>
										Already have an account ? <Link to='/login'>Sign in</Link>
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
