import img from '../img/good.jpg'
import { God } from "../com/god"

export const PS1=({ps, setPs})=>{
    const click=()=>{
        setPs(!ps)
    }

    return(
        <div>
            <button className='jja'onClick={click}>X</button>
         <div className="ps1">
                <div className="gow" >
                
                <div className='pur2'>
                    <h1 className="ug2">God of War Ragnarök</h1>
                    <p className="ug3">Sony Interactive Entertaiment</p>
                    <p className="ug4">Avaible on PS5 PS4</p>
                </div>
                <God/>
                </div>
                
                <div className="pur">
                    <div className="hha">
                        <img className="imga" src={img}></img>
                        <h1 className="ug3">Standart Edition</h1>
                        <h2  className="ug3">$59.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img}></img>
                        <h1 className="ug3">Standart Edition</h1>
                        <h2 className="ug3">$69.99</h2>
                    </div>
                    <div className="hha">
                        <img className="imga" src={img}></img>
                        <h1 className="ug3">Digital Deluxe Edition</h1>
                        <h2 className="ug3">$79.99</h2>
                    </div>
                </div>

            
            </div>
        </div>
    )
}