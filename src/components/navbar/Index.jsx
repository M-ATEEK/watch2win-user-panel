import React, { Component } from "react";
import { Link } from "react-router-dom";
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
						<Link className='navbar-brand' to="/home">
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<div className='collapse navbar-collapse' id='defaultNavbar1'>
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<Link to='#'>HOMEPAGE</Link>
							</li>
							<li>
								<Link to='#'>PRICING</Link>
							</li>
							<li className='dropdown signinHeader'>
								<Link to='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded='false'>
									<span className='signinHeaderTxt'>Hi! Sign In</span>MY FITNESS<span className='caret'></span>
								</Link>
								<ul className='dropdown-menu' role='menu'>
									<li>
										<Link to='#'>Action</Link>
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
