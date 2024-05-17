import React, { useState } from 'react'; 
import User from '../models/User';
import Member from '../models/Member';
import { getAllMembers } from '../remote/MemberApi';
import AppRoutes from '../routes/AppRoutes';

const LoginComponent:React.FC = ()=>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[user, setUser] = useState(new User("", "NONE"));



    return(<div>
        <input type='text' placeholder='username' onChange={(e)=>{
            setUsername(e.target.value);
        }}></input>
        <input type='text' placeholder='password' onChange={(e)=>{
            setPassword(e.target.value);
        }}></input>
        <button onClick={async()=>{
            let inputUser:User = new User(username, "", password);
            let result:Member[] = await getAllMembers(inputUser);
            //This doesn't work if there are no cars in the db. 
            if(result.length){
                setUser(inputUser);
            }}}>Login</button>
    <br></br>
    <br></br>
    <br></br>
    {//need to pass users so multiple components can comm with backend. 
    }
    <AppRoutes user={user}></AppRoutes>
    </div>);
}

export default LoginComponent;