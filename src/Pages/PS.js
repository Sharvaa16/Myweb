
import { Footer } from "../Comps/Footer/footer"
import { PS1 } from "./PlayS/com/PS1"
import { PS2 } from "./PlayS/com/PS2"
import { useState } from "react"
import { PS3 } from "./PlayS/com/PS3"
import { PS4 } from "./PlayS/com/PS4"
import { PS5 } from "./PlayS/com/PS5"
import { PS6 } from "./PlayS/com/PS6"


export const PS=()=>{

    let[ps, setPs] = useState(true)
    let[ps1, setPs1] = useState(true)
    let[ps2, setPs2] = useState(true)
    let[ps3, setPs3] = useState(true)

    return(
        <> 
        <div>
        <PS3 ps={ps} setPs={setPs} ps1={ps1} setPs1={setPs1} ps2={ps2} setPs2={setPs2} ps3={ps3} setPs3={setPs3}/>
        {ps ? <PS2/> : <PS1   ps={ps} setPs={setPs}/>}
        {ps1 ? null: <PS4 ps1={ps1} setPs1={setPs1}/>}
        {ps2 ? null: <PS5 ps2={ps2} setPs2={setPs2}/>}
        {ps3 ? null: <PS6 ps3={ps3} setPs3={setPs3}/>}
        </div>
        <Footer/>
        </>
    )
}
