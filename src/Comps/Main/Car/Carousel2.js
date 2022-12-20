import React, { Component } from "react";
import Slider from "react-slick";
import Luka from './img1/luka.jpg'
import Bio from './img1/bio.jpg'
import Mid from './img1/mid.jpg'
import Wwe from './img1/wwe.jpg'
export default class  extends Component {


    
  render() {
    const settings = {
      infinite: true,
      centermode: true,
      centerpadding: "60px",
      autoplay: true,
      autoplayspeaad: 500,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1
    };



    return (
      <div className="main5">
        <Slider  className="slide" {...settings}>

                <div className="main5">
                
                <img className="img1" src={Luka}></img>
                </div>

                <div className="">
                <img className="img1" src={Wwe}></img>
                </div>

                <div className="">
                <img className="img1" src={Bio}></img>
                </div>

                <div className="">
                <img className="img1" src={Mid}></img>
                </div>
        </Slider>
      </div>
    );
  }
}