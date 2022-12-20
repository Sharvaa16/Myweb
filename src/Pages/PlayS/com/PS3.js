import icon from '../img/icon.png'
import img1 from '../img/good.jpg'
import icon1 from '../img/god7.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/last.png'



export const PS3=({ps, setPs, ps1, setPs1, ps2, setPs2, ps3, setPs3})=>{

    const click=()=>{
        setPs(!ps)
    }
    const click1=()=>{
        setPs1(!ps1)
    }
    const click2=()=>{
        setPs2(!ps2)
    }
    const click3=()=>{
        setPs3(!ps3)
    }
    return(
        <>
            <div className="pur1">
                <div className='ap'>
                    <img className="ic" src={icon} onClick={click}/>
                    <img className='ic1' src={icon1} onClick={click1}/>
                </div>
                <div className='ap'>
                    <img className='ic2' src={icon2} onClick={click2}/>
                    <img className='ic3' src={icon3} onClick={click3}/></div>
            </div>
            
            {/* <button className='ug5' onClick={click1}>X</button> */}
        </>
    )
}