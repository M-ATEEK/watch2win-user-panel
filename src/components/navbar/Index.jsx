import React, { Component } from "react";
import { Link } from "react-router-dom";

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
						<Link className='navbar-brand' to="/landing">
							Watch2Win
						</Link>
					</div>
					<div className='collapse navbar-collapse' id='defaultNavbar1'>
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<Link to='/landing'>HOMEPAGE</Link>
							</li>
							<li>
								<Link to='#'>PRICING</Link>
							</li>
							<li className='signinHeader'>
								<Link to='/login'>
									<span className='signinHeaderTxt'>Hi! Sign In</span>MY FITNESS
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
