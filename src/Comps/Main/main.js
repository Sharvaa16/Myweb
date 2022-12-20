import { Main1 } from "./main1"
import { Main2 } from "./main2"
import { Main3 } from "./main3"
import { Main4 } from "./main4"
import { useState } from "react"
import { Main5 } from "./main31"

export const Main=()=>{

    let [main, setMain] = useState(true)
    let [main1, setMain1] = useState(true)
    let [main2, setMain2] = useState(true)
    let [main3, setMain3] = useState(true)

    return(
        
        <main>
            <Main2 main={main} main1={main1} setMain={setMain} setMain1={setMain1}  main2={main2} setMain2={setMain2}  main3={main3} setMain3={setMain3}  />
            <Main1  main={main}/>
            <Main3 main1={main1}/>
            {main2 ? null : <Main5/>}
            {main3 ? null : <Main4/>}
            
        </main>
    )
}