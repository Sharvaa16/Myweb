import React, { Component } from "react";
import Slider from "react-slick";
import { Play } from "../Comp/Play";
import img1 from '../img/pa.jpg'

export default class  extends Component {


    
  render() {
    const settings = {
      infinite: true,
      centermode: true,
      centerpadding: "60px",
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1
    };



    return (
      <div className="main5">
        <Slider className="slide" {...settings}>


               

        </Slider>
      </div>
    );
  }
}
