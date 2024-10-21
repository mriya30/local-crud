import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../userSlice'



const UpdateRedux = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm()
    const {id}=useParams()
    const redirect=useNavigate()
    console.log(id)

    const {userlist}=useSelector((state)=>state)
    useEffect(()=>{
        const SingleUser=userlist.find((user)=>{
            return user.id==id
        })
        console.log(SingleUser)
        reset(SingleUser)
    },[])
    const dispatch=useDispatch()
    function Regist(data){
        console.log("data.....")
        console.log(data)

        dispatch(editUser(data))
        redirect('/ViewRedux')
    }
  return (
    <div>
      <form action="" method="post" style={{}} onSubmit={handleSubmit(Regist)} className="col-6 mx-auto shadow my-5 p-5 border">
                <div className="mt-4">
                    <input type="text" {...register('username',
                        {
                            required: { 
                                value: true,
                                message: "enter username"
                            },
                            minLength: {
                                value: 5,
                                message: "minimum 5 character"
                            },
                            maxLength: {
                                value: 15,
                                message: "maximum 15 character"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'error message'  
                        },
                    }
                    )}
                        className="form-control" placeholder="enter your name" />
                    <p className="text-danger">{errors?.username?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="text" {...register('email',
                             {
                                required: {
                                    value: true,
                                    message: "enter email"
                                }
                            }
                    )}
                     className="form-control" placeholder="enter your email" />
                     <p className="text-danger">{errors?.email?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="number" {...register('mobile',     {
                            required: {
                                value: true,
                                message: "enter mobile number "
                            },
                            maxLength: {
                                value: 10,
                                message: "maximum 10 number"
                            },
                        }
                        )}
                         className="form-control" placeholder="enter your Mobile Number" />
                         <p className="text-danger">{errors?.mobile?.message}</p>
                </div>
                <div className="mt-4">
                    <button className="btn btn-outline-warning">Update</button>
                </div>
            </form>
    </div>
  )
}

export default UpdateRedux
