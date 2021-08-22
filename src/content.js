import React from "react";
import "./css-src/content.scss";

export function Banner() {
    return(
        <div className = "big-banner">
            <div className="htc-u12">
                <img src={require('../dist/img/big_banner/u12_inner_banner.jpg')}/>
            </div>
            <div className="vive-focus-3">
                <img src={require('../dist/img/big_banner/desktop.png')} />
                <div className="play-button">
                    <i className="icon-youtube-play"></i>
                    <p>Watch Video</p>
                </div>
            </div>
        </div>
    )
}

export function StayTuned() {
    return(
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
    )
}