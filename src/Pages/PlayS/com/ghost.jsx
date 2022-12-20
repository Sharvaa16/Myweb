import ghost from './ghost.mp4'
import React from 'react'

export const Ghost=()=>{
    return(
        <div>
        <video className='gow1' src={ghost} controls loop />
        </div>
    )
}