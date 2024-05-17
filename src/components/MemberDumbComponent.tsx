
import React from "react";
import Member from "../models/Member";

type Props = {members:Member[]}

const MemberDumbComponent:React.FC<Props> = (props)=>{

    return(<table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Fullname</th>
                <th>Account Type</th>
                <th>Age</th>
                <th>Gym</th>
            </tr>
        </thead>
        <tbody>
            {props.members.map((member:Member)=>{
                return(<tr>
                    <td>{member.id}</td>
                    <td>{member.fullname}</td>
                    <td>{member.accounttype}</td>
                    <td>{member.age}</td>
                    <td>{member.gym?member.gym.gymName:"unknown"}</td>
                    <td>{member.gym?member.gym.address:"unknown"}</td>
                </tr>
            )})}
        </tbody>
    </table>);
} 
export default MemberDumbComponent;
