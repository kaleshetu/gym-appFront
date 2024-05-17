import Member from "../models/Member";
import User from "../models/User";
import GymAppClient from "./GymAppClient";


export const getAllMembers = async(user:User):Promise<Member[]>=>{
    const response = await GymAppClient
        .get<Member[]>("/member/all",{
            //basic auth
            auth:{username:user.username, 
                password:user.password?user.password:""}
    });
    if(response.status===200){
        return response.data;
    }else{
        console.log(response); //for debugging
        return [];
    }
}

export const addMember= async(member:Member, user:User):Promise<number>=>{
    let response = await GymAppClient
        .post("/member/add", member, {
        auth:{username:user.username, 
            password:user.password?user.password:""}
});

    //debugging
    if(response.status!=201){
        console.log(response);
    }
    return response.status;
}
