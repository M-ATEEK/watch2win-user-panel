import React, { Component } from "react";
import config from "../../config";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import Joi from "joi";
import Auth from "../Services/Auth";

class Login extends Component {
	state = {
		email: "",
		password: "",
		login: false,
		errors: {},
		message: "",
		emptyfield: "",
		auth: false,
	};

	schema = Joi.object({
		email: Joi.string()
			.email({ tlds: { allow: false } })
			.required()
			.label("Email"),
		password: Joi.string().required().min(6).label("Password"),
	});

	submitHandler = (e) => {
		e.preventDefault();
		if (this.state.email === "" && this.state.password === "") {
			this.setState({
				message: "Enter email and password",
			});
		} else {
			const data = this.state;
			axios
				.post(`${config.API_URL}/authenticate`, data)
				.then((response) => {
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
				})
				.catch((error) => console.log(error));
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		if (localStorage.getItem("token")) {
			return <Redirect to='/home' />;
		}
		return (
			<div className='loginBg'>
				<div className='container'>
					<div className='loginArea'>
						<h2>LOGIN</h2>
						<div className='formArea'>
							<form onSubmit={this.submitHandler} method='post'>
								<p className='text-danger'>{this.state.message}</p>
								<div className='form-group'>
									<input
										type='email'
										className='form-control'
										placeholder='Email'
										name='email'
										value={this.state.email}
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
										value={this.state.password}
									/>
									{this.state.errors.password && <span className='text-danger'>{this.state.errors.password}</span>}
								</div>
								<div className='form-group'>
									<Link to="forgot-password" className='forgotPass'>
										Forgot Password?
									</Link>
									<div className='clearfix'></div>
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btnLogin'>
										Login
									</button>
								</div>
								<div>
									<p>
										Not have an account ? <Link to='/register'>Sign up</Link>
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

export default Login;
