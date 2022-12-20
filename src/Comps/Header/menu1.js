import { Nav } from "../Cont/Nav"
import { Link } from "react-router-dom";
export const Menu1=()=>{
    return(
        <div className="but10">
            <Link to='/home'><h1>Home</h1></Link>
            <Link to='/steam'><h1>Steam</h1></Link>
            <Link to='/ps'><h1>Play Station</h1></Link>
            <Link to='/ubi'><h1>Ubisoft.Assassin's Creed</h1></Link>
        </div>
    )
}