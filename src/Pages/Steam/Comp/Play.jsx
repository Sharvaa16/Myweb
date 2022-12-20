import React from "react";
import vid from './vid.webm'

export const Play=()=>{
    return(
        <div>
            <video src={vid} autoPlay loop muted/>
        </div>
    )
}