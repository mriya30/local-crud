import React from "react";
const Home=()=>{
    function inc(id){
        alert(id)
    }
    return(
        <div>
            <h1 className="text-white">Home page </h1>
            <button onClick={()=>inc(3)}>Click</button>
        </div>
    )
}
const About=()=>{
    return(
        <>
        <h1>About us</h1>
        </>
    )
}
export {Home,About}