import img from '../img/ghost3.jpg'
import { Ghost } from "../com/ghost"
import img1 from '../img/ghost1.jpg'
import img2 from '../img/ghost2.png'

export const PS5=({ps2, setPs2})=>{
    const click2=()=>{
        setPs2(!ps2)
    }

    return(
        <div className='ao'>
                <button className='jja'onClick={click2}>X</button>
         <div className="ps3">
                <div className="gow">
                
                <div className='pur2'>
                    <h1 className="ug2">Ghost of Tsushima: Legends</h1>
                    <p className="ug3">Sony Interactive Entertaiment</p>
                    <p className="ug4">Avaible PS4</p>
                </div>
                <Ghost/>
                </div>
                
                <div className="pur">
                    <div className="hha">
                        <img className="imga" src={img1}></img>
                        <h1 className="ug3">Ghost of Tsushima: Legends</h1>
                        <h2  className="ug3">$19.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img}></img>
                        <h1 className="ug3">Ghost of Tsushima DIRECTOR’S CUT</h1>
                        <h2 className="ug3">$59.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img2}></img>
                        <h1 className="ug3">Ghost of Tsushima Bonus Content</h1>
                        <h2 className="ug3">Free</h2>
                    </div>
                </div>
                

            
            </div>
        </div>
    )
}