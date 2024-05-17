import { useState } from "react";
import User from "../models/User";
import MemberDumbComponent from "./MemberDumbComponent";
import { addMember, getAllMembers } from "../remote/MemberApi";
import Button from 'react-bootstrap/Button';

import { Gym } from "../models/Gym";
import Member from "../models/Member";
type Props = {user:User}
const createMember = (id: number, fullname: string, accounttype: string, age: number, gym: Gym): Member => {
    return {
        id,
        fullname,
        accounttype,
        age,
        gym
        
    };
};
const MemberSmartComponent:React.FC<Props> = (props)=>{
    const[members, setMembers] = useState<Member[]>([]);
    const[fullname, setFullname] = useState<string>("");
    const[accounttype, setAccounttype] = useState<string>("");
    const[age,setAge] = useState<number>(0);
    const [gym, setGym] = useState<Gym>({ gymName: "",address:"" });
    return(<div>
        {// ... is the spread operator. It will return
        //all the values in an array individually. 
        }
        <MemberDumbComponent members={members} />


        <button onClick={async()=>{
            let apiMembers:Member[] = await getAllMembers(props.user);
            console.log(apiMembers);
            setMembers(apiMembers);
        }}>Get Members</button>
        <br></br>
        <br></br>
        <form>
            <input type="text" onChange={(e)=>{setFullname(e.target.value);}}
                placeholder="Fullname" />
            <input type="text" onChange={(e)=>{setAccounttype(e.target.value);}}
                placeholder="Accounttype" />
            <input type="text" onChange={(e)=>{setAge(Number.parseInt(e.target.value));}}
                placeholder="Age" />
            <input type="text" onChange={(e) => setGym({ ...gym, gymName: e.target.value })}
                placeholder="Gym" />
                <input type="text" onChange={(e) => setGym({ ...gym, address: e.target.value })}
                placeholder="Address" />
        </form>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={async()=>{
        let result:number = await addMember(createMember(0,fullname,accounttype, age,gym),props.user);
        if(result===201){
            let apiCustomers:Member[] = await getAllMembers(props.user);
            setMembers(apiCustomers);
        }}}>Add Member
                
            </button>
    </div>)
}
export default MemberSmartComponent;
