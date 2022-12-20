

export const Menu=({menuu, setMenuu})=>{

    console.log(menuu);
    const cl =()=>{
        setMenuu(!menuu)
    }
    
    return(
        <div>
            <button className="but6" onClick={cl}>Meenu</button>
        </div>
    )
}