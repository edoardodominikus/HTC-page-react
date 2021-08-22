import React from "react";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./css-src/hero.scss";

export default function SimpleSlider() {
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
  return (
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
  );
}