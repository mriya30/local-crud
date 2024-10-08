import React, { useState } from "react";
const SignUp = () => {
    const [user, setUser] = useState({})
    function input(e) {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name);
        console.log(value);

        const newUser = { [name]: value }
        console.log(newUser);

        // setUser({...user,[name]:value})
        setUser({ ...user, ...newUser })
    }
    function Regist(e) {
        e.preventDefault();
        console.log(user);
    }
    return (
        <>
        
            <form action="" method="post" onSubmit={(e) => Regist(e)} className="col-4 mx-auto shadow my-5 p-5 border rounded-3">
            <h1 className="text-center text-decoration-underline text-light">Sign Up Form</h1>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="userName" placeholder="Enter Your Name" />
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="email" placeholder="Enter Your Email" />
                </div>
                <div className="mt-4">
                    <input type="password" onChange={(e) => input(e)} className="form-control" name="password" placeholder="Enter Your Password " />
                </div>
                <div className="mt-4">
                    <input type="number" onChange={(e) => input(e)} className="form-control" name="mobile" placeholder="Enter Your Mobile Number" />
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="form-control">Gender :&nbsp;
                <input type="radio" onChange={(e) => input(e)}  name="gender" value="male"/> Male
                 &nbsp;<input type="radio" onChange={(e) => input(e)} name="gender" value="female"/> Female
                </label>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <button className="btn btn-outline-light text-center ">submit</button>
                </div>
            </form>
        </>
    )
}

export default SignUp