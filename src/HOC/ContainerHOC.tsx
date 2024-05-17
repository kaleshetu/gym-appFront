
import React from "react";

const ContainerHOC = (Component:React.ComponentType)=>{
    return(props:any)=>{
        return(
            <div className="container-fluid">
                <Component {...props} />
            </div>
        )
    }
}

export default ContainerHOC;
