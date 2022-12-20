import React, { Component } from "react";
import Slider from "react-slick";
import God from './img1/god.jpg'
import Last from './img1/last of.jpg'
import Ghost from './img1/ghost.jpg'
import Uncharted from './img1/uncharted.jpg'

export default class  extends Component {


    
  render() {
    const settings = {
      infinite: true,
      centermode: true,
      centerpadding: "60px",
      autoplay: true,
      autoplayspeaad: 100,
      speed: 100,
      slidesToShow: 2,
      slidesToScroll: 1
    };



    return (
      <div className="main5">
        <Slider  className="slide"{...settings}>

                <div className="main5">
                
                <img className="img1" src={God}></img>
                </div>

                <div className="">
                <img className="img1" src={Last}></img>
                </div>

                <div className="">
                <img className="img1" src={Ghost}></img>
                </div>

                <div className="">
                <img className="img1" src={Uncharted}></img>
                </div>
        </Slider>
      </div>
    );
  }
}