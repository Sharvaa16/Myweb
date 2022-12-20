import React, { Component } from "react";
import Slider from "react-slick";
import Dota from '../img/Dota2.jpg'
import Hero from '../img/hero.jpg'
import apex from '../img/apex.jpg'
import braw from '../img/braw.jpg'
import cs from '../img/CS.jpg'
import path from '../img/path.jpg'
import pubg from '../img/pubg.jpg'
import sims from '../img/sims.jpg'
import team from '../img/team.jpg'
import war from '../img/war.jpg'
import world from '../img/world.jpg'
import yu from '../img/yu.jpg'

export default class extends Component {


    
  render() {
    const settings = {
      infinite: true,
      centermode: true,
      centerpadding: "0px",
      autoplay: true,
      autoplayspeed: 1000,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 2,
      cssEase: "linear",
    };



    return (
   
        <Slider className="slide" {...settings}>

                <div className="ste">
                <img className="img2" src={Dota}></img>
                <div className="ste1">
                <h2 className="ug1">Dota 2</h2>
                <p className="ug1">Release Date : Jul,10, 2013</p>
                <h4 className="ug">1893470 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 1 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={Hero}></img>
                <div className="ste1">
                <h2 className="ug1">PROJECT: PLAYTIME</h2>
                <p  className="ug1">Release Date : Dec 12, 2022</p>
                <h4 className="ug">6869 User reviews</h4>
                <h3  className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked # in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={apex}></img>
                <div className="ste1">
                <h2 className="ug1"> Apex Legends</h2>
                <p className="ug1">Release Date : Nov 5, 2020</p>
                <h4 className="ug">548882 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 7 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={braw}></img>
                <div className="ste1">
                <h2 className="ug1">Brawlhalla</h2>
                <p className="ug1">Release Date : Oct 18, 2017</p>
                <h4 className="ug">307507 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked # in top sellers</h4>
                </div>
                </div>
                <div className="ste">
                <img className="img2" src={cs}></img>
                <div className="ste1">
                <h2 className="ug1">Counter Strike: Global Offensive</h2>
                <p className="ug1">Release Date : Aug 22, 2012</p>
                <h4 className="ug">6798649 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 3 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={path}></img>
                <div className="ste1">
                <h2 className="ug1">Path of Exile</h2>
                <p className="ug1">Release Date : Oct 24, 2013</p>
                <h4 className="ug">194438 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 35 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={pubg}></img>
                <div className="ste1">
                <h2 className="ug1">PUBG: Battlegrounds</h2>
                <p className="ug1">Release Date : Dec 21, 2017</p>
                <h4 className="ug">2115199 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 8 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={sims}></img>
                <div className="ste1">
                <h2 className="ug1">The Sims 4</h2>
                <p className="ug1">Release Date : Jul 19, 2020</p>
                <h4 className="ug">78411 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 37 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={team}></img>
                <div className="ste1">
                <h2 className="ug1">Team Fortress 2</h2>
                <p className="ug1">Release Date : Oct 10, 2007</p>
                <h4 className="ug">922379 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 47 in top sellers</h4>
                </div>
                </div>

                <div className="ste">
                <img className="img2" src={war}></img>
                <div className="ste1">
                <h2 className="ug1">War Thunder</h2>
                <p className="ug1">Release Date : Aug 15, 2013</p>
                <h4 className="ug">353127 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 25 in top sellers</h4>
                </div>
                </div>
                <div className="ste">
                <img className="img2" src={world}></img>
                <div className="ste1">
                <h2 className="ug1">World of Warships</h2>
                <p className="ug1">Release Date : Nov 15, 2017</p>
                <h4 className="ug">113306 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 33 in top sellers</h4>
                </div>
                </div>
                <div className="ste">
                <img className="img2" src={yu}></img>
                <div className="ste1">
                <h2 className="ug1">Yu-Gi-Oh! Master Duel</h2>
                <p className="ug1">Release Date : Jan,19, 2022</p>
                <h4 className="ug">53076 User reviews</h4>
                <h3 className="ug1">Why this game is relevant to you</h3>
                <h4 className="ug1">Ranked 41 in top sellers</h4>
                </div>
                </div>
        </Slider>
    );
  }
}