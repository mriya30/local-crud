import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { deleteUser } from "../userSlice";
import { NavLink } from "react-router-dom";

const ViewRedux = () => {
    const {userlist}=useSelector((state)=>state)
    console.log(userlist);
    const dispatch=useDispatch()
    function trash(id){
        dispatch(deleteUser(id))
    }
  return (
    <div>
      <div className="container">
                <table className="table table-hover table-striped table-success">
                    <thead className="table-dark">
                        <tr>
                            <th>s.no</th>
                            <th>username</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userlist.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td><button className='btn btn-danger' onClick={()=>trash(item.id)}><i class="fa-solid fa-trash"></i></button>
                                        <NavLink className='btn btn-warning ms-3' to={`/updateRedux/${item.id}`}><i class="fa-solid fa-pen-to-square"></i></NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default ViewRedux
