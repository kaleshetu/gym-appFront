import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../models/User";
import MemberSmartComponent from "../components/MemberSmartComponent";

type Props = {user:User}

const AppRoutes:React.FC<Props> = (props)=>{
    return(<Routes>
        <Route element={<h3>Hello Gym Router!!!</h3>} path="/" />
        
        <Route path="/member" element={<MemberSmartComponent user={props.user}/>} />
        
    </Routes>);
}

export default AppRoutes;