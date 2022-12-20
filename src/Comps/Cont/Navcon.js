import { Nav } from "./Nav";
import { Outlet } from "react-router-dom";

export const Navcon=()=>{
    return(
        <>
        <Nav/>
        <Outlet/>
        </>
    );
}