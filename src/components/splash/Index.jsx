import React, { Component } from 'react';
import Logo from "../../assets/images/logo.png";

class Splash extends Component {
    state = {}
    componentDidMount() {

        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

    }

    resize() {
        let mobileWidth = (window.innerWidth);
        if (mobileWidth < 760) {
            setTimeout(() => {
                window.location = '/login';
            }, 3000);
        } else {
            window.location = '/landing';
        }

    }

    render() {
        return (
            <div className='loginBg'>
                <div className="container">
                    <div className="splash-screen">
                        <h1 className="center-text">

                            <p className='navbar-brand'>
                                <img src={Logo} alt='' className="logoClass" />
                            </p>

                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;