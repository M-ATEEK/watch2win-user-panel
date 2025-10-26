import React, { Component } from "react";
import fbLogo from "../../assets/images/fbBtn.png";
import googleLogo from "../../assets/images/gBtn.png";

class Login extends Component {
	state = {};
	render() {
		return (
			<div className='loginBg'>
				<div className='container'>
					<div className='loginArea'>
						<h2>LOGIN</h2>
						<div className='formArea'>
							<form action='#' method='post'>
								<div className='form-group'>
									<input type='email' className='form-control' placeholder='Enter Email' />
								</div>
								<div className='form-group'>
									<input type='password' className='form-control' placeholder='Enter Password' />
								</div>
								<div className='form-group'>
									<a href='#' className='forgotPass'>
										Forgot Password?
									</a>
									<div className='clearfix'></div>
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btnLogin'>
										Login
									</button>
								</div>
								<div className='form-group orTxtMain'>
									<p className='orTxt'>
										<span>Or</span>
									</p>
								</div>
								<div className='form-group'>
									<a href='#' className='fbBtn'>
										<img src={fbLogo} alt='' /> Signin with Facebook <div className='clearfix'></div>
									</a>
								</div>
								<div className='form-group'>
									<a href='#' className='gBtn'>
										<img src={googleLogo} alt='' />
										Signin with Google <div className='clearfix'></div>
									</a>
								</div>
								<div>
									<p>
										Not have an account ? <a href='register.html'>Sign up</a>
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
