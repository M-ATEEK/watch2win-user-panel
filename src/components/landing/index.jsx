import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/customlanding.scoped.css"
//import "../../assets/css/bootstraplanding.css"
//import "../../assets/css/medialanding.css"
import baseballDrills from "../../assets/imageslanding/baseballDrills.png"
import bodyBuilding from "../../assets/imageslanding/bodybuilding.png"
import gymnastic from "../../assets/imageslanding/gymnastic.png"
import logo from "../../assets/imageslanding/logo.png"
import youtube from "../../assets/imageslanding/youtube.png"
import homeVid1 from "../../assets/imageslanding/homeVid1.png"
import basketBalPic from "../../assets/imageslanding/basketBalPic.png"
import baseballPic from "../../assets/imageslanding/baseballPic.png"
import gymImg from "../../assets/imageslanding/gymImg.png"
import social1 from "../../assets/imageslanding/social1.png"
import social2 from "../../assets/imageslanding/social2.png"
import social3 from "../../assets/imageslanding/social3.png"
import slider1 from "../../assets/imageslanding/slider1.png"
import btmSl1 from "../../assets/imageslanding/btmSl1.png"
import btmSl2 from "../../assets/imageslanding/btmSl2.png"
import btmSl3 from "../../assets/imageslanding/btmSl3.png"
import testimonials from "../../assets/imageslanding/testimonials.png";
import fbIcon from "../../assets/imageslanding/fbIcon.png";
import linkedInImg from "../../assets/imageslanding/linkedInImg.png";
import twitter from "../../assets/imageslanding/twitter.png";
import call from "../../assets/imageslanding/call.png"
import email from "../../assets/imageslanding/email.png"
import instaRed from "../../assets/imageslanding/instaRed.png"
import twRed from "../../assets/imageslanding/twRed.png"
import fbRed from "../../assets/imageslanding/fbRed.png"

function appendScript (scriptToAppend) {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    document.body.appendChild(script);
  }

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        appendScript("js/jquery-1.11.3.min.js");
        appendScript("js/bootstrap.js");
        appendScript("js/slick.min.js");
        appendScript("js/swiper-bundle.min.js");
        appendScript("js/custom.js");
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default hidden-xs">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
                            <a className="navbar-brand" href="index.html"><img src={logo} alt="" /></a></div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="defaultNavbar1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">HOMEPAGE</a></li>
                                <li><a href="#">PRICING</a></li>
                                <li className="dropdown signinHeader"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="signinHeaderTxt">Hi! Sign In</span>MY FITNESS<span className="caret" /></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="#">Action</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                </nav>
                <div className="banner">
                    <div className="bannerContent">
                        <h2>Don't Stop Till You Drop </h2>
                        <p>The best way to <span>make sure your body and mind</span> are ready for work is to wake them up with a good workout.</p>
                        <ul className="list-unstyled list-inline">
                            <li><a href="#" className="btn btnRed">GET STARTED NOW</a></li>
                            <li><a href="#"><img style={{minHeight:"17px"}} src={youtube} alt="" /> WATCH REVIEWS</a></li>
                        </ul>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="welcomeSection">
                    <div className="container">
                        <div className="row topCategories">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <img src={baseballDrills} alt="" />
                                <div className="topCatOptions">
                                    <h3>BASEBALL DRILLS</h3>
                                    <p>Trained under best trainers</p>
                                    <a href="#" className="btn btnRedSm">$99*/M</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <img src={bodyBuilding} alt="" />
                                <div className="topCatOptions">
                                    <h3>BODY BULDING CLASSES</h3>
                                    <p>Trained under best trainers</p>
                                    <a href="#" className="btn btnRedSm">$99*/M</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <img src={gymnastic} alt="" />
                                <div className="topCatOptions">
                                    <h3>Gymnastic CLASSES AND MANY MORE</h3>
                                    <p>Trained under best trainers</p>
                                    <a href="#" className="btn btnRedSm">$99*/M</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 col-sm-6 col-xs-12 welcomeContent">
                                <h5>ABOUT</h5>
                                <h3><span>Welco</span>me to Us</h3>
                                <p><span>Your body hears everything that your mind says. You have to have a positive attitude if you want to achieve your goals.</span></p>
                                <p>If you run a fitness gym, this is one slogan that can bring customers in. No one likes having to drive miles out of their way to go to the gym. It is always easier to have a gym that is actually close to home. Your body hears everything that your mind says. You have to have a positive attitude if you want to achieve your goals. <a href="#">READ MORE</a></p>
                            </div>
                            <div className="col-md-5 col-md-offset-1 col-sm-6 col-xs-12">
                                <div className="slider welcomeSlider">
                                    <div>
                                        <img src={homeVid1} alt="" />
                                    </div>
                                    <div>
                                        <img src={homeVid1} alt="" />
                                    </div>
                                    <div>
                                        <img src={homeVid1} alt="" />
                                    </div>
                                </div>
                                <div className="slider slider-nav">
                                    <div>
                                        <img src={homeVid1} alt="" />
                                    </div>
                                    <div>
                                        <img src={homeVid1} alt="" />
                                    </div>
                                    <div>
                                        <img src={homeVid1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drillSection">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12 noColPadd">
                                <a href="#">
                                    <img src={basketBalPic} alt="" />
                                    <div className="drillCation">
                                        <h3><span>Basketball</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 noColPadd">
                                <a href="#">
                                    <img src={baseballPic} alt="" />
                                    <div className="drillCation">
                                        <h3><span>BASEBALL</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 noColPadd">
                                <a href="#">
                                    <img src={gymImg} alt="" />
                                    <div className="drillCation">
                                        <h3><span>Gymnastic</span></h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12 noColPadd">
                                <a href="#">
                                    <img src="images/basketBalPic.png" alt="" />
                                    <div className="drillCation">
                                        <h3><span>Basketball</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 noColPadd">
                                <a href="#">
                                    <img src="images/baseballPic.png" alt="" />
                                    <div className="drillCation">
                                        <h3><span>BASEBALL</span></h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 noColPadd">
                                <a href="#">
                                    <img src="images/gymImg.png" alt="" />
                                    <div className="drillCation">
                                        <h3><span>Gymnastic</span></h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trainer">
                    <div className="container-fluid">
                        <div className="row trainerTopArea">
                            <h3>Ou<span>r Train</span>er</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                            <div className="trainerTopCarousel">
                                <div className="trainerTopCarouselLeft">
                                    <h3>Katlimine Core</h3>
                                    <h4><span>Gymnas</span>tic Instructor</h4>
                                    <p>Your body hears everything that your mind says. You have to have a positive attitude if you want to achieve your goals.If you run a fitness gym, this is one slogan that can bring customers in. No one likes having to drive miles out of their way to go to the gym. </p>
                                    <ul className="list-unstyled list-inline">
                                        <li><a href="#"><img src={social1} alt="" /></a></li>
                                        <li><a href="#"><img src={social2} alt="" /></a></li>
                                        <li><a href="#"><img src={social3} alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                        <img className="swiper-slide" src={slider1} /> 
                                    </div>
                                    {/* Add Pagination */}
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                            </div>
                        </div>
                        <div className="trainerBottomArea">
                            <div className="row">
                                <div className="trainerBtmCarousel">
                                    <div>
                                        <img src={btmSl1} alt="" />
                                    </div>
                                    <div>
                                        <img src={btmSl2} alt="" />
                                    </div>
                                    <div>
                                        <img src={btmSl3} alt="" />
                                    </div>
                                    <div>
                                        <img src={btmSl1} alt="" />
                                    </div>
                                    <div>
                                        <img src={btmSl2} alt="" />
                                    </div>
                                    <div>
                                        <img src={btmSl3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonailSection">
                    <div className="container">
                        <h3>Tes<span>tmoni</span>als</h3>
                        <div className="testimonailCarousel">
                            <div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                                <img src={testimonials} alt="" />
                                <h4>Ahmed Elsayed</h4>
                                <h5>CLIENT</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                                <img src={testimonials} alt="" />
                                <h4>Ahmed Elsayed</h4>
                                <h5>CLIENT</h5>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                                <img src={testimonials} alt="" />
                                <h4>Ahmed Elsayed</h4>
                                <h5>CLIENT</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactSection">
                    <div className="container">
                        <h3>Co<span>ntact</span> Us</h3>
                        <div className="contactFormArea">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="Subject">Subject</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea rows={4} className="form-control" placeholder="Write Your Message Here..." defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn formBtnRed">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="formBtmArea">
                            <div className="text-center">
                                <a href="#">Email@Example.Com</a> | <a href="#">002-010-66269735</a>
                                <ul className="list-unstyled list-inline">
                                    <li><a href="#"><img src={fbIcon} alt="" /></a></li>
                                    <li><a href="#"><img src={linkedInImg} alt="" /></a></li>
                                    <li><a href="#"><img src={twitter} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 footerLogo">
                                <a href="#"><img src="images/fLogo.png" alt="" /></a>
                            </div>
                            <div className="col-md-3  footerContent">
                                <h3>Quick Contacts</h3>
                                <p>ProElite ,Shekiupura <br /> Road Faisalabad.</p>
                                <p><img src={call} alt="" /> 8080000000</p>
                                <p><img src={email} alt="" /> 8080000000</p>
                                <ul className="list-unstyled list-inline">
                                    <li><a href="#"><img src={instaRed} alt="" /></a></li>
                                    <li><a href="#"><img src={twRed} alt="" /></a></li>
                                    <li><a href="#"><img src={fbRed} alt="" /></a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 footerContent">
                                <h3>Popular Tags</h3>
                                <div className="tags">
                                    <ul className="list-unstyled list-inline">
                                        <li><a href="#">WORKOUT</a></li>
                                        <li><a href="#">CROSSFIT</a></li>
                                        <li><a href="#">SHEDULE</a></li>
                                        <li><a href="#">TRAINERS</a></li>
                                        <li><a href="#" className="activeTag">BOXING</a></li>
                                        <li><a href="#">SHEDULE</a></li>
                                        <li><a href="#">NUTRITION</a></li>
                                        <li><a href="#">GYM</a></li>
                                        <li><a href="#">PLANS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="lastLinks">
                    <div className="container">
                        <div className="text-center">
                            <ul className="list-unstyled list-inline">
                                <li><a href="#">HOMEPAGE</a></li>
                                <li><a href="#">PRICING</a></li>
                                <li><a href="#">LOGIN</a></li>
                                <li><a href="#">SIGNUP</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="text-center">
                            <p>©2020 ProElite. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;