import React, { Component } from "react";
import logo from "../../assets/images/logo.png";

class Navbar extends Component {
	state = {};
	render() {
		return (
			<nav className='navbar navbar-default hidden-xs'>
				<div className='container'>
					<div className='navbar-header'>
						<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#defaultNavbar1'>
							<span className='sr-only'>Toggle navigation</span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
						</button>
						<a className='navbar-brand' href='index.html'>
							<img src={logo} alt='logo' />
						</a>
					</div>
					<div className='collapse navbar-collapse' id='defaultNavbar1'>
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<a href='#'>HOMEPAGE</a>
							</li>
							<li>
								<a href='#'>PRICING</a>
							</li>
							<li className='dropdown signinHeader'>
								<a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>
									<span className='signinHeaderTxt'>Hi! Sign In</span>MY FITNESS<span className='caret'></span>
								</a>
								<ul className='dropdown-menu' role='menu'>
									<li>
										<a href='#'>Action</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
