import { Menu } from "./menu"
import { Menu1 } from "./menu1"
import { useState } from "react"


export const Header2=()=>{

    let [menuu, setMenuu] = useState(false)

    return(

        <div className="head2">
            <div className="back">
                <Menu menuu={menuu} setMenuu={setMenuu} />
                {menuu ? <Menu1/> : null }
                <h1 className="but">Mason</h1>
                
            </div>
                <div className="buttons2">
                <input className="but3" type="search" placeholder="Search"></input>
                <button className="but4" placeholder="">❤</button>
                <button className="but5"> Introdution </button>
                </div>
            </div>
    )
}