import React, {Component } from 'react';
import "./css-src/App.scss";
import "./css-src/fontello/css/fontello.css";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useRouteMatch,
    useLocation
  } from "react-router-dom";
// import { render } from 'sass';

const App = (props) => {
    return (
        <HashRouter>
            <NavDiv>
                <header>
                    <div className="container">
                        <ul className="navbar-menu">
                            <li><NavLink to="/" style={{ textDecoration: 'none' }}><img src={require('../dist/img/navbar/logo.png')} class="logo-htc"/></NavLink></li>
                            <li><NavLink to="/products" style={{ textDecoration: 'none',color:'white',fontSize:'12' }}>PRODUCTS</NavLink></li>
                            <li><NavLink to="/support" style={{ textDecoration: 'none',color:'white'  }}>SUPPORT</NavLink></li>
                        </ul>
                        <ul className="navbar-tool">
                            <li><i className="icon-search" /></li>
                            <li><a><i className="icon-shop" /></a></li>
                            <li><a><i className="icon-adult" /></a></li>
                            <li><a><img src={require('../dist/img/navbar/vive.png')} className="logo-vive"></img></a></li>
                        </ul>
                </div>
                </header>
            </NavDiv>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/support" component={Support}></Route>
            </Switch>
            <footer>
         <div className="grid">
              <div className="item-box">
                  <label className="globe"><i class="icon-globe"></i> Middle East</label>
              </div>
              <div className="item-box">
                  <label>Products</label>
                  <ul>
                      <li><a>5G</a></li>
                      <li><a>Smartphones</a></li>
                      <li><a>EXODUS</a></li>
                      <li><a>VIVE</a></li>
                  </ul>
              </div>
              <div className="item-box">
                  <label>Sites</label>
                  <ul>
                      <li><a>HTC Dev</a></li>
                      <li><a>HTC Research</a></li>
                  </ul>
              </div>
              <div className="item-box">
                  <label>Support</label>
                  <ul>
                      <li><a>Support Center</a></li>
                      <li><a>Warranty Policy</a></li>
                  </ul>
              </div>
              <div className="item-box">
                  <label>About HTC</label>
                  <ul>
                      <li><a>Company Overview</a></li>
                      <li><a>Corporate Responsibility</a></li>
                      <li><a>Investor</a></li>
                      <li><a>Privacy Policy</a></li>
                      <li><a>Product Security</a></li>
                  </ul>
              </div>
              <div className="copyright-block">
                  <p> © 2011-2021 HTC Corporation </p>
                  <a> Legal Terms </a>
              </div>
         </div>
     </footer>
        </HashRouter>
      )
}
const NavDiv = (props) => {

    const location = useLocation().pathname.replace('/','');
    return (
        <nav className={`nav-${location}`}>{props.children}</nav>
    )
}

export default App;


export function Main() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed: 2000,
      };
  return(
    <div>
        <div className="hero">
            <Slider {...settings}>
                <div>
                    <img src={require('../dist/img/hero/1/htc-desire.jpg')}/>
                </div>
                <div>
                    <img src={require('../dist/img/hero/2/2in1.jpg')}/>
                </div>
                <div>
                    <img src={require('../dist/img/hero/3/vivepro2-d.png')}/>
                </div>
                    <img src={require('../dist/img/hero/4/desktop2.jpg')}/>
                <div>
                    <img src={require('../dist/img/hero/5/tws1-homebanner-d-white.jpg')}/>
                </div>
                <div>
                    <img src={require('../dist/img/hero/6/desktop4.jpg')}/>
            </div>
            </Slider>
        </div>
            <div className="grid">
                <div className="vive-vr item-box">
                    <h2>VIVE VR</h2>
                    <p>Find the right VR Headset & Best VR Experience</p>
                    <img src={require("../dist/img/banner/vive-sub-banner.png")}/>
                </div>
                <div className="htc-u12 item-box">
                    <h2>HTC U12+</h2>
                    <p>Live on the Edge</p>
                    <img src={require("../dist/img/banner/unveil_thumbnail.png")}/>
                </div>
                <div className="vive-business item-box">
                    <h2>VIVE Business</h2>
                    <p>VR Solutions built for Business</p>
                    <img src={require("../dist/img/banner/vive-business-sub-banner.png")}/>
                </div>
            </div>
            <div className = "big-banner">
            <div className="htc-u12">
                <img src={require('../dist/img/big_banner/u12_inner_banner.jpg') }/>
            </div>
            <div className="vive-focus-3">
                <div className="parent-button">
                    <img src={require('../dist/img/big_banner/desktop.png')} />
                    <div className="play-button">
                    <i className="icon-youtube-play"></i>
                    <p>Watch Video</p>
                    </div>
                </div>
            </div>
        </div>
        <div className = "email-subscription">
            <h4>STAY UP TO DATE WITH THE LATEST ON HTC</h4>
            <input type="search" placeholder="Type your email address" class="search_input"></input>
            <div className="form-check">
                <input type="checkbox"></input>
                <label>
                    Yes, I want to receive important product updates, news and exclusive offers related to HTC products.
                </label>
            </div>
            <div className="policy-term">
                <a>Privacy Policy</a>
                <a>Terms of Use</a>
            </div>
            <button>Sign Up</button>
        </div>
      </div>
  )
  
}

export function Products(){
    return(
        <div>
            <h1>THIS IS PRODUCTS PAGE</h1>
        </div>
    )
}

export const Support = () => {
    return(
        <div>
            <h1>THIS IS SUPPORT PAGE</h1>
        </div>
    )
}
