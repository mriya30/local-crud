import React,{useState} from 'react'


const LocalStorage = () => {
    const [name,setName]=useState("")

    function save(e){
        e.preventDefault()
        localStorage.setItem('username',name)
    }
    function removeEle(){
        alert("hello")
        // localStorage.removeItem('username')
        localStorage.clear()
    }
  return (
    <div>
           <form action="" method="post" onSubmit={(e) => save(e)} className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="userName" placeholder="enter your name" />
                </div>
                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                    <button className="btn btn-danger ms-2" onClick={removeEle}>remove</button>
                </div>
            </form>
    </div>
  )
}

export default LocalStorage
