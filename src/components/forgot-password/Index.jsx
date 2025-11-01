import React, { Component } from "react";

class ForgotPassword extends Component {
	state = {
		showFirstTab: true,
		showSecondTab: false,
		showThirdTab: false,
	};

	switchTab = (e, tab) => {
		e.preventDefault();
		switch (tab) {
			case "showSecondTab":
				this.setState({
					showFirstTab: false,
					showSecondTab: true,
					showThirdTab: false,
				});
				break;
			case "showThirdTab":
				this.setState({
					showFirstTab: false,
					showSecondTab: false,
					showThirdTab: true,
				});
				break;
			default:
				return;
		}
	};

	render() {
		const { showFirstTab, showSecondTab, showThirdTab } = this.state;
		return (
			<div className='loginBg forgotScreen'>
				<div className='container'>
					<div className='loginArea forgotBg'>
						<h2>Forgot Password</h2>
						<div className='formArea' style={{ display: showFirstTab ? "block" : "none" }}>
							<form action='#' method='post'>
								<div className='form-group'>
									<input type='email' className='form-control' placeholder='Enter Email' />
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
									<input type='text' className='form-control' placeholder='Enter verification code' />
								</div>
								<div className='form-group'>
									<p>Please enter a code that sent</p>
									<p>
										<a href='#'>salman@gmail.com</a>
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
									<input type='password' className='form-control' placeholder='Password' />
								</div>
								<div className='form-group'>
									<input type='password' className='form-control' placeholder='Confirm Password' />
								</div>
								<div className='form-group'>
									<button type='submit' className='btn btnLogin'>
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
