import React from "react";
import { Link } from "react-router-dom";
import ContainerHOC from "../HOC/ContainerHOC";

const NavBar:React.FC<unknown> = (props)=>{
    return(<nav className="navbar  navbar-nav navbar-expand-lg">
        <Link to={"/"} style={{margin:"5mm"}}>Hello</Link>
    
        
        <Link to={"/member"} style={{margin:"5mm"}}>Members</Link>
    </nav>);
}

export default ContainerHOC(NavBar);