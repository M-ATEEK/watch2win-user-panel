import React, { Component } from "react";
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
						<a href='#'>
							<img src={menuLogo1} alt='' />
							Home
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={menuLogo2} alt='' />
							Drills
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={menuLogo3} alt='' />
							Activity
						</a>
					</li>
					<li>
						<a href='#'>
							<img src={menuLogo4} alt='' />
							Find Friends
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default MobileNavbar;
