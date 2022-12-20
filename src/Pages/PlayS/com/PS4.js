import img from '../img/god5.jpg'
import { God1 } from "../com/god1"
import img1 from '../img/god4.jpg'
import img2 from '../img/god8.png'

export const PS4=({ps1, setPs1})=>{
    const click1=()=>{
        setPs1(!ps1)
    }

    return(
        <div className='ao'>
                <button className='jja'onClick={click1}>X</button>
         <div className="ps2">
                <div className="gow">
                
                <div className='pur2'>
                    <h1 className="ug2">God of War 4</h1>
                    <p className="ug3">Sony Interactive Entertaiment</p>
                    <p className="ug4">Avaible on PC PS4</p>
                </div>
                <God1/>
                </div>
                
                <div className="pur">
                    <div className="hha">
                        <img className="imga" src={img1}></img>
                        <h1 className="ug3">Standart Edition</h1>
                        <h2  className="ug3">$19.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img}></img>
                        <h1 className="ug3">Standart Edition</h1>
                        <h2 className="ug3">$19.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img2}></img>
                        <h1 className="ug3">Digital Deluxe Edition</h1>
                        <h2 className="ug3">$29.99</h2>
                    </div>
                </div>

            
            </div>
        </div>
    )
}