
import { Last1 } from "../com/last"
import img1 from '../img/last1.jpg'


export const PS6=({ps3, setPs3})=>{
    const click3=()=>{
        setPs3(!ps3)
    }

    return(
        <div className='ao'>
                <button className='jja'onClick={click3}>X</button>
         <div className="ps5">
                <div className="gow">
                
                <div className='pur2'>
                    <h1 className="ug2">The Last of Us Part II</h1>
                    <p className="ug3">Sony Interactive Entertaiment</p>
                    <p className="ug4">PS4</p>
                </div>
                <Last1/>
                </div>
                
                <div className="pur3">
                    <div className="hha">
                        <img className="imga" src={img1}></img>
                        <h1 className="ug3">The Last of Us Part II</h1>
                        <h2  className="ug3">$39.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img1}></img>
                        <h1 className="ug3">The Last of Us Part II Digital Deluxe Edition</h1>
                        <h2 className="ug3">$49.99</h2>
                    </div>
                </div>

            
            </div>
        </div>
    )
}