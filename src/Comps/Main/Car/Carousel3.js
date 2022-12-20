import React, { Component } from "react";
import Slider from "react-slick";
import Far from './img1/far.png'
import Per from './img1/per.jpg'
import Wat from './img1/wat.jpg'
import Ass from './img1/ass.jpg'

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
        <Slider className="slide" {...settings}>

                <div className="main5">
                
                <img className="img1" src={Ass}></img>
                </div>

                <div className="">
                <img className="img1" src={Wat}></img>
                </div>

                <div className="">
                <img className="img1" src={Far}></img>
                </div>

                <div className="">
                <img className="img1" src={Per}></img>
                </div>
        </Slider>
      </div>
    );
  }
}