import React from "react";
import "./css-src/footer.scss";

export function Footer() {
    return(
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
    )
}
