import React, {Component} from 'react';
import "./css-src/nav.scss";
import "./css-src/fontello/css/fontello.css";


export function App() {
    return (
        <nav className="header">
          <header>
            <div className="container">
            <ul className="navbar-menu">
              <li><a><img src={require('../dist/img/navbar/logo.png')} class="logo-htc"/></a></li>
              <li><a>Products</a></li>
              <li><a>Support</a></li>
            </ul>
            <ul className="navbar-tool">
              <li><a><i className="icon-search" /></a></li>
              <li><a><i className="icon-shop" /></a></li>
              <li><a><i className="icon-adult" /></a></li>
              <li><a><img src={require('../dist/img/navbar/vive.png')} className="logo-vive"></img></a></li>
            </ul>
          </div>
          </header>
        </nav>
        
      )
}



