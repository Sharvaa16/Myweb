import logo from './img/LOGO.png'
import logo1 from './img/Logo1.png'
import logo2 from './img/Logo2.png'
import { useState } from "react"
import Logo3 from './img/Logo3.png'
export const Main2=({main, setMain, main1, setMain1, main2, setMain2, main3, setMain3 })=>{

    const dar = () => {
        console.log('click');
        setMain(!main)
    }
    const dar1 = () => {
        setMain1(!main1)
    }
    const dar2 = () => {
        setMain2(!main2)
    }
    const dar3 = () => {
        setMain3(!main3)
    }

    return(
        <div className="main2">
             <img className="durs" src={logo} onClick={dar}></img>
             <img className="durs" src={logo1} onClick={dar1}></img>
             <img className="durs" src={logo2} onClick={dar2}></img>
             <img className="durs" src={Logo3} onClick={dar3}></img>
        </div>
       
    )
}