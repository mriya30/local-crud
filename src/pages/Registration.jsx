import { useState } from "react";
const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    console.log("name...........");
    console.log(name);

    console.log("email...........");
    console.log(email);

    // e.target=get input tag

    function signup(e) {
        e.preventDefault()
        alert("signup")
        const user = { name, email }
        console.log(user);
    }
    return (
        <>
            <form action="" method="post" onSubmit={(e) => signup(e)} className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="userName" placeholder="enter your name" />
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" placeholder="enter your email" />
                </div>
                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                </div>
            </form>
        </>
    )
}
export default Registration