import React, { Component } from "react";
import { Redirect } from "react-router";
import Logo from "../../assets/images/logo.png";
import UserImage from "../../assets/images/user.png";
import MobileLogo from "../../assets/images/mobLogo.png";
import SearchIcon from "../../assets/images/searchIcon.png";
import MobileUser from "../../assets/images/mobUser.png";

class HomeNavbar extends Component {
	state = {
		search: ''
	};


	handleChange  = (e) => {
		this.setState({
			search: e.currentTarget.value,
		});
	}
	handleSubmit =(e) => {

		// this.props.history.push(`/search/${this.state.search}`);
		// window.location.href =`/search/${this.state.search}`;
		
		return <Redirect to={`/search/${this.state.search}`} />;
		// this.props.history.push(`/search/${this.state.search}`);
	}
	render() {
		return (
			<>
				<nav className='navbar navbar-default desktopNav'>
					<div className='container'>
						<div className='navbar-header'>
							<button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#defaultNavbar1'>
								<span className='sr-only'>Toggle navigation</span>
								<span className='icon-bar'></span>
								<span className='icon-bar'></span>
								<span className='icon-bar'></span>
							</button>
							<a className='navbar-brand' href='index.html'>
								<img src={Logo} alt='' />
							</a>
						</div>
						<div className='col-md-8 col-sm-7 headerSearch'>
							<form className='navbar-form navbar-left' role='search' onSubmit={this.handleSubmit.bind(this)}>
								<div className='form-group'>
									<input type='text' className='form-control' name="search" onChange={this.handleChange} placeholder='SEARCH BY CATEGORY, ATHLETE NAME' />
								</div>
							</form>
						</div>
						<div className='collapse navbar-collapse' id='defaultNavbar1'>
							<ul className='nav navbar-nav navbar-right'>
								<li>
									<a href='#'>Activity</a>
								</li>
								<li className='dropdown'>
									<a href='#' className='dropdown-toggle innerDropdown' data-toggle='dropdown' role='button' aria-expanded='false'>
										<img src={UserImage} alt='' />
										<span className='caret'></span>
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
				<nav className='mobileNavbar'>
					<div className='col-xs-8 mobLogo'>
						<a href='#'>
							<img src={MobileLogo} alt='' />
						</a>
					</div>
					<div className='mobSearch col-xs-9'>
						<form className='navbar-form navbar-left' role='search'>
							<div className='form-group'>
								<input type='text' className='form-control' onChange={this.handleChange} placeholder='SEARCH BY CATEGORY, ATHLETE NAME' />
							</div>
						</form>
					</div>
					<div className='col-xs-3 mobMenuItems'>
						<ul className='list-unstyled list-inline'>
							<li>
								<a href='#' id='mobSearchBtn'>
									<img src={SearchIcon} alt='' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={MobileUser} alt='' />
								</a>
							</li>
						</ul>
					</div>
					<div className='clearfix'></div>
				</nav>
			</>
		);
	}
}

export default HomeNavbar;
