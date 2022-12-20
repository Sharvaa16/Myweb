import React, { Component } from "react";
import Slider from "react-slick";


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
                
                <img className="img1" src='https://wallpaperaccess.com/full/671214.jpg'></img>
                </div>

                <div className="">
                <img className="img1" src='https://wallpaperaccess.com/full/502857.jpg'></img>
                </div>

                <div className="">
                <img className="img1" src='https://wallpaperaccess.com/full/957584.jpg'></img>
                </div>

                <div className="">
                <img className="img1" src='https://wallpaperaccess.com/full/2314133.png'></img>
                </div>
        </Slider>
      </div>
    );
  }
}
