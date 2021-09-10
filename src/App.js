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
                            <li className="products-li">
                                <NavLink to="/products" style={{ textDecoration: 'none'}}>PRODUCTS</NavLink>
                                <div className="bottom-line"></div>
                                <div className="submenu"> 
                                    <div className="sub-item-box">
                                        <img src={require('../dist/img/navbar/submenu/5g.svg')}></img>
                                        <h4>5G</h4>
                                    </div>
                                    <div className="sub-item-box">
                                        <img src={require('../dist/img/navbar/submenu/phone.svg')}></img>
                                        <h4>SMARTPHONES</h4>
                                    </div>
                                    <div className="sub-item-box">
                                        <img src={require('../dist/img/navbar/submenu/accessories.svg')}></img>
                                        <h4>ACCESSORIES</h4>
                                    </div>
                                    <div className="sub-item-box">
                                        <img src={require('../dist/img/navbar/submenu/exodus.svg')}></img>
                                        <h4>EXODUS</h4>
                                    </div>
                                    <div className="sub-item-box">
                                        <img src={require('../dist/img/navbar/submenu/vive.svg')}></img>
                                        <h4>VIVE</h4>
                                    </div>
                                </div>
                                </li>
                            <li className="support-li">
                                <NavLink to="/support" style={{ textDecoration: 'none' }}>SUPPORT</NavLink>
                                <div className="bottom-line"></div>
                            </li>
                        </ul>
                        <ul className="navbar-tool">
                            <li><i className="icon-search" /></li>
                            <li><a><i className="icon-shop" /></a></li>
                            <li><a><i className="icon-adult" /></a></li>
                            <li><a><i className="icon-vive-logo"/></a></li>
                        </ul>
                </div>
                </header>
            </NavDiv>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/products" component={Products}></Route>
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
    <main>
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
      </main>
  )
  
}

export function Products(){
    return(
        <div className="product-category">
            <div className="title">
                <h3>SMARTPHONE</h3>
                <a className="button-border">Comparison</a>
            </div>
            <div className="filter-sort">
                <div className="tag-list">
                    <a className="button-border">All Products</a>
                    <a className="button-border">HTC Desire Series</a>
                </div>
                <div className="sort-dropdown">
                    <span className="sort-according">Sort According</span>
                    <select name="sort-by" id="sort-by">
                        <option value="latest">Latest</option>
                        <option value="price-ascending">Price Ascending</option>
                        <option value="price-descending">Price Descending</option>
                    </select>
                </div>
            </div>
            <div className="item-grid">
                <div className="item-block">
                    <img src={require('../dist/img/product/flash_green.png')}></img>
                    <h4 className="item-title">HTC U20 5G</h4>
                    <div className="price-block">
                        <div className="base-price">TWD$18,990</div>
                        <div className="sale-price">TWD$13,990起</div>
                    </div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/sirocco_orange_03.png')}></img>
                    <h4 className="item-title">HTC Desire 20+</h4>
                    <div className="price-block">
                        <div className="sale-price">TWD$8,490起</div>
                    </div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/thunder_300x300.png')}></img>
                    <h4 className="item-title">HTC Desire 21 pro 5G</h4>
                    <div className="price-block">
                        <div className="base-price">TWD$12,990</div>
                        <div className="sale-price">TWD$10,990起</div>
                    </div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/bayamo_black.png')}></img>
                    <h4 className="item-title">HTC Desire 20 pro</h4>
                    <div className="price-block"></div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/htc-u12-life-purple-2v-listing.png')}></img>
                    <h4 className="item-title">HTC Desire 19s</h4>
                    <div className="price-block"></div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/br2_listing_blue.png')}></img>
                    <h4 className="item-title">HTC Desire 19+</h4>
                    <div className="price-block"></div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/htc-u19e-purple-2v-listing.png')}></img>
                    <h4 className="item-title">HTC U19e</h4>
                    <div className="price-block"></div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/mayday-black-c.png')}></img>
                    <h4 className="item-title">HTC U12+ 五月天限定版</h4>
                    <div className="price-block"></div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
                <div className="item-block">
                    <img src={require('../dist/img/product/breeze2-black-c.png')}></img>
                    <h4 className="item-title">HTC Desire 12s</h4>
                    <div className="price-block"></div>
                    <a className="button-border">Get Details</a>
                    <a className="button-border-green">Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export const Support = () => {
    return(
        <div className="support">
            <div class="section-wrapper">
                <section className="paralax-wrap">
                    <div className = "paralax-img"></div>
                </section>   
                <section className="search-banner">
                    <div className="content">
                        <div className="title-section">
                            <div className="caption">
                                <span>
                                    As HTC strives to offer customers new innovations for our Smartphones, we also continually evaluate existing apps and services based on various business and customer needs. In order to continue our focus on innovation, it is necessary from time to time to discontinue some services. As a result, starting Aug. 18, 2021, HTC Account prior to version 7.0 will no longer be supported. For later versions, please update to the latest version if you encountered problems on log-in. For customers who require additional assistance, we ask you please contact your local HTC Customer Care. We look forward to bringing our customers new innovations in the future.
                                </span>
                            </div>
                            <h2>
                                    Hello. 
                                    <br/>
                                    What can we help with?
                                </h2>
                        </div>
                    </div>
                    <div className="search-area">
                        <div className="search-container">
                            <input type="text" placeholder="Type what you're looking for" class="input-query"/>
                            <div className="button-submit">
                                <img src={require('../dist/img/search-icon.svg')}></img>
                            </div>
                        </div>
                    </div>
                    <div className="product-listing">
                        <div className="border-box">
                            <h2>Which product do you need help with?</h2>
                        </div>
                        <div className="products-flex">
                            <div className="item-box">
                                <img src={require('../dist/img/product/5g-icon.svg')}></img>
                                <span>5G</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/product/u-icon.svg')}></img>
                                <span>U</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/product/one-icon.svg')}></img>
                                <span>One</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/product/desire-icon.svg')}></img>
                                <span>Desire</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/product/accessories-icon.svg')}></img>
                                <span>Accessories</span>
                            </div>
                        </div>
                    </div>
                    <div className="topic-choose">
                        <div className="border-box">
                            <h2>What topic do you need help with?</h2>
                        </div>
                        <div className="products-flex">
                            <div className="item-box">
                                <img src={require('../dist/img/topic/back-up-n-transfer-icon.svg')}></img>
                                <span>Backup and Transfer</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/topic/applications-icon.svg')}></img>
                                <span>Applications</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/topic/h-t-c-sync-manager.svg')}></img>
                                <span>HTC Sync Manager</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/topic/online-shopping-online-shopping-help-copy-2.svg')}></img>
                                <span>Online Shopping Help</span>
                            </div>
                            <div className="item-box">
                                <img src={require('../dist/img/topic/online-shopping-issue.svg')}></img>
                                <span>Repair Status</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
