import React from "react";
import "./css-src/landing.scss";

export function SubPromo() {
    return(
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
    )
}