import React, { Component } from "react";
import { Route, withRouter, Link, Redirect } from "react-router-dom";
import UserImage from "../../assets/images/user.png";
import SearchIcon from "../../assets/images/searchIcon.png";
import MobileUser from "../../assets/images/mobUser.png";
import BackBtn from "../../assets/images/backArrow.png";
import Auth from "../Services/Auth";
import config from "../../config";
import axios from "axios";

class HomeNavbar extends Component {
	state = {
		search: "",
		isVisible: false,
		searchVisible: false,
	};
	container = React.createRef();
	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	handleChange = (e) => {
		this.setState({
			search: e.currentTarget.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { history } = this.props;
		const { search } = this.state;
		history.push(`/search/${search}`);
	};
	handleToggle = () => {

		const { isVisible } = this.state;
		this.setState({
			isVisible: !isVisible,
		});
	};

	handleSearchToggle = () => {
		const { searchVisible } = this.state;
		this.setState({
			searchVisible: !searchVisible,
		});
	};
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (this.container.current && !this.container.current.contains(event.target)) {
			this.setState({
				// isVisible: false,
			});
		}
	};

	logout(e) {
		e.preventDefault();
		Auth.clearToken();
		this.props.history.push("/login");
	}


	render() {
		const { isVisible, searchVisible } = this.state;
		const show = isVisible ? "show" : "";

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
							<Link to='/home' className='navbar-brand'>
								Watch2Win
							</Link>
						</div>
						<div className='col-md-8 col-sm-7 headerSearch'>
							<form className='navbar-form navbar-left' role='search' onSubmit={this.handleSubmit.bind(this)}>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										name='search'
										onChange={this.handleChange}
										placeholder='SEARCH BY CATEGORY, ATHLETE NAME'
									/>
								</div>
							</form>
						</div>
						<div className='collapse navbar-collapse' id='defaultNavbar1'>
							<ul className='nav navbar-nav navbar-right'>
								<li>
									<Link to='/activites'>Activity</Link>
								</li>
								<li className='dropdown' ref={this.container}>
									<Link to='#' className='dropdown-toggle innerDropdown' data-toggle='dropdown' onClick={this.handleToggle} role='button' aria-expanded='false'>

										<img src={UserImage} alt='' />
										<span className='caret'></span>
									</Link>
									<ul className={"dropdown-menu " + show} role='menu'>
										<li>
											<Link to='/profile'>Profile</Link>
										</li>
										<li>
											<Link to='/subscription'>Subscription</Link>
										</li>
									<li>
										<a onClick={(e) => this.logout(e)}>Logout</a>
									</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<nav className='mobileNavbar'>
					<div className={searchVisible ? "col-xs-3 " : "col-xs-8 " + "mobLogo"}>
						<p className='backLink' onClick={this.props.history.goBack}>
							<img src={BackBtn} alt='' /> Back
						</p>
						<Link to='/home' style={{ display: searchVisible ? "none" : "block", color: '#fff', fontWeight: 'bold' }}>
							Watch2Win
						</Link>
					</div>
					<div className={"mobSearch col-xs-6"} style={{ display: searchVisible ? "block" : "none" }}>


						<form className='navbar-form navbar-left' role='search' onSubmit={this.handleSubmit.bind(this)}>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									name="search"
									onChange={this.handleChange}
									placeholder='SEARCH BY CATEGORY, ATHLETE NAME' />
							</div>
						</form>
					</div>
					<div className='col-xs-3 mobMenuItems'>
						<ul className='list-unstyled list-inline'>
							<li style={{ display: searchVisible ? "none" : "" }}>
								<Link onClick={this.handleSearchToggle} id='mobSearchBtn'>
									<img src={SearchIcon} alt='' />
								</Link>
							</li>
							<li className='dropdown' ref={this.container}>
								<Link href='#' className='dropdown-toggle' data-toggle='dropdown' onClick={this.handleToggle} role='button' aria-expanded='false'>
									<img src={MobileUser} alt='' />
									<span className='caret'></span>
								</Link>
								<ul className={"dropdown-menu " + show} role='menu'>
									<li>
										<Link to='/profile'>Profile</Link>
									</li>
									<li>
										<Link to='/subscription'>Subscription</Link>
									</li>
									<li>
										<a onClick={(e) => this.logout(e)}>Logout</a>

									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className='clearfix'></div>
				</nav>
			</>
		);
	}
}

export default withRouter(HomeNavbar);
