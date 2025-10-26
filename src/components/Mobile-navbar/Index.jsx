import React, { Component } from "react";
import { Link } from "react-router-dom";
import menuLogo1 from "../../assets/images/menu1.png";
import menuLogo2 from "../../assets/images/menu2.png";
import menuLogo3 from "../../assets/images/menu3.png";
import menuLogo4 from "../../assets/images/menu4.png";

class MobileNavbar extends Component {
	state = {};
	render() {
		return (
			<div className='mobileFixedBottomMenu navbar-fixed-bottom'>
				<ul className='list-inline list-unstyled text-center'>
					<li className='mobMenuActive'>


						<Link to="/home">
							<img src={menuLogo1} alt='' />
								Home

						</Link>

					</li>
					<li>


						<Link to="/drills">
							<img src={menuLogo2} alt='' />
								Drills
						</Link>


					</li>
					<li>

						<Link to="/activites">
							<img src={menuLogo3} alt='' />Activity
						</Link>


					</li>
					<li>
						<Link to="/activites">
							<img src={menuLogo4} alt='' />
							Find Friends
						</Link>


					</li>
				</ul>
			</div>
		);
	}
}

export default MobileNavbar;
