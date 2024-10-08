import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const Create = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const redirect = useNavigate()
    function Regist(data) {
        // console.log(data);
    }
    async function show() {
        const res1 = await fetch('https://66fe258469936930895735f1.mockapi.io/users');
        const data = await res1.json()
        console.log(data.users)
    
    const res2 = await axios.get('https://66fe258469936930895735f1.mockapi.io/users');
    console.log(res2)
    console.log(res2.data)
    console.log(res2.data.users)

    const res3=await axios.get('https://66fe258469936930895735f1.mockapi.io/users');
    console.log(res3.data.users);
}
    useEffect(() => {
        show()
    }, [])

    async function Regist(data) {
        const res=await axios.post('https://66fe258469936930895735f1.mockapi.io/users',data)

        if(res){
            alert('data has been inserted')
            // reset()
            redirect('/view')
        }
        else{
            alert('wrong')
        }
        
    }

    return (
        <div>
            <form action="" method="post" style={{}} onSubmit={handleSubmit(Regist)} className="col-6 mx-auto shadow my-5 p-5 border">
                <div className="mt-4">
                    <input type="text" {...register('name',
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
                    <p className="text-danger">{errors?.name?.message}</p>
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
                    <textarea type="address" {...register('address', {
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
                        className="form-control" placeholder="enter your Address" />
                    <p className="text-danger">{errors?.address?.message}</p>
                </div>
                <div className="mt-4">
                    <button className="btn btn-outline-primary">submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default Create
