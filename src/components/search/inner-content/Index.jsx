import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import Auth from "../../Services/Auth";
import Axios from "axios";

class InnerContent extends Component {
	state = {
		athletes: [],
		peoples: [],
		categories: [],
		searchName: "",
		peopleTab: true,
		athleteTab: false,
		categoryTab: false,
	};
	componentDidMount() {
		const { search } = this.props;
		Axios.get(`${config.API_URL}/user/search?keyword=${search}`, {
			headers: {
				Authorization: Auth.getToken(),
			},
		})
			.then((response) => {
				const data = response.data.data;
				this.setState({
					athletes: [...data.athlete],
					categories: [...data.categories],
					peoples: [...data.users],
				});
			})
			.catch((error) => console.log(error));
	}

	handleTabs = (tab) => {
		if (tab === "people") {
			this.setState({
				peopleTab: true,
				athleteTab: false,
				categoryTab: false,
			});
		}

		if (tab === "athlete") {
			this.setState({
				peopleTab: false,
				athleteTab: true,
				categoryTab: false,
			});
		}

		if (tab === "category") {
			this.setState({
				peopleTab: false,
				athleteTab: false,
				categoryTab: true,
			});
		}
	};

	render() {
		const { peopleTab, athleteTab, categoryTab, peoples, athletes, categories } = this.state;
		return (
			<div>
				<div className='innerBanner'>
					<div className='container'>
						<div className='innerBannerContent'>
							<h4>
								Search results -<span>{this.props.search}</span>
							</h4>
							<ul className='list-unstyled list-inline searchBtns'>
								<li onClick={() => this.handleTabs("people")}>
									<Link to="#" className={peopleTab ? "btnFilled" : ""}>People</Link>
								</li>
								<li onClick={() => this.handleTabs("category")}>
									<Link to="#" className={categoryTab ? "btnFilled" : ""}>Category</Link>
								</li>
								<li onClick={() => this.handleTabs("athlete")}>
									<Link to="#" className={athleteTab ? "btnFilled" : ""}>Athelete</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='mainInnerContent'>
					<div className='container'>
						<div className='searchResultsParent' style={{ display: peopleTab ? "block" : "none" }}>
							<h3>People</h3>
							<div className='searchResultsMain'>
								{peoples.length > 0 ? (
									peoples.map((people, index) => {
										return (
											<>
												<div key={index} className='searchResults form-group'>
													<div className='col-md-6 col-sm-6 col-xs-6'>
														<img src={`${config.IMG_URL}/images/${people.image}`} alt='' />{" "}
														<span>{people.firstName + " " + people.lastName}</span>
													</div>
													<div className='col-md-6 col-sm-6 col-xs-6 searchResultsFollowBtn'>
														<Link href='#' className='btn btnFilled'>
															Follow
														</Link>
													</div>
													<div className='clearfix'></div>
												</div>
											</>
										);
									})
								) : (
										<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No People found against {this.props.search}</h2>
									)}
							</div>
						</div>

						<div className='searchResultsParent' style={{ display: categoryTab ? "block" : "none" }}>
							<h3>Category</h3>
							{categories.length > 0 ? (
								categories.map((category, index) => {
									return (
										<>
											<div key={index} className='searchResults form-group'>
												<div className='col-md-6 col-sm-6 col-xs-6'>
													<img src={`${config.IMG_URL}/image/${category.image}`} alt='' width='150px' height='150px' />{" "}
													<span>{category.name}</span>
												</div>
												<div className='col-md-6 col-sm-6 col-xs-6 searchResultsFollowBtn'>
													<Link to="/drills" className='btn btnFilled'>
														See Drills
													</Link>
												</div>
												<div className='clearfix'></div>
											</div>
										</>
									);
								})
							) : (
									<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No Category found against {this.props.search}</h2>
								)}
						</div>

						<div className='searchResultsParent' style={{ display: athleteTab ? "block" : "none" }}>
							<h3>Athlete</h3>
							{athletes.length > 0 ? (
								athletes.map((athlete, index) => {
									return (
										<>
											<div key={index} className='searchResults form-group'>
												<div className='col-md-6 col-sm-6 col-xs-6'>
													<img src={`${config.IMG_URL}/image/${athlete.image}`} alt='' width='150px' height='150px' />{" "}
													<span>{athlete.name}</span>
												</div>
												<div className='col-md-6 col-sm-6 col-xs-6 searchResultsFollowBtn'>
													<Link to="/drills" className='btn btnFilled'>
														See Drills
													</Link>
												</div>
												<div className='clearfix'></div>
											</div>
										</>
									);
								})
							) : (
									<h2 style={{ color: "#fee6cc", textAlign: "center" }}>No athlete found against {this.props.search}</h2>
								)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InnerContent;
