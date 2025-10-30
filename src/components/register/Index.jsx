import React, { Component } from "react";

class Register extends Component {
	state = {};
	render() {
		return (
			<div className='loginBg'>
				<div className='container'>
					<div className='loginArea'>
						<h2>SIGNUP</h2>
						<div className='formArea'>
							<form action='#' method='post'>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Enter Name' />
								</div>
								<div className='form-group'>
									<input type='text' className='form-control' placeholder='Unique Username' />
								</div>
								<div className='form-group'>
									<input type='email' className='form-control' placeholder='Enter Email' />
								</div>
								<div className='form-group'>
									<input type='password' className='form-control' placeholder='Enter Password' />
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
										Already have an account ? <a href='login.html'>Sign in</a>
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
