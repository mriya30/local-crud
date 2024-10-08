import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
const SingleUser = () => {
    const [users,setUsers]=useState({})
    const {userId}=useParams()
    console.log(userId)

    async function show() {
        const res=await axios.get(`https://66fe258469936930895735f1.mockapi.io/users/${userId}`)
        console.log(res.data)
        setUsers(res.data)
    }
    useEffect(()=>{
        show()
    },[])
  return (
    <div className='text-light'>
      <h1>Single User</h1>
      <div className='col-6 mx-auto p-5 my-5 border'>
        <ul>
            <li>{users.name}</li>
            <li>{users.email}</li>
            <li>{users.address}</li>

        </ul>
      </div>
    </div>
  )
}

export default SingleUser
