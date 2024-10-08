import React, { useEffect, useInsertionEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const LocalData = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [user, setUser] = useState([])
    const [editIndex, setIndex] = useState(null)

    // get data form localStorage
    useEffect(() => {
        const data = localStorage.getItem('userList')
        if (data) {
            setUser(JSON.parse(data))
        }

    }, [])

    // insert data into localStorage
    useEffect(() => {
        if (user?.length > 0) {
            localStorage.setItem('userList', JSON.stringify(user))
        }

    }, [user])

    function Regist(data) {
        // console.log(data);
        if(editIndex==null){
            setUser([...user, data])
        }else{
            const UpdateUser=[...user];
            UpdateUser[editIndex]=data;
            setUser(UpdateUser)
        }
        reset()
    }

    console.log("data...........");
    console.log(user);

    function trash(user_index) {
        if (confirm("do you want to delete this item..???")) {
            const filterData = user.filter((_, index) => {
                return user_index != index
            })
            console.log(filterData);
            setUser(filterData)
        }
    }
    function update(index){
        // console.log(user[index]);
        reset(user[index])
        setIndex(index)
    }
    return (
        <>
            <form action="" method="post" style={{backgroundColor:'black'}} onSubmit={handleSubmit(Regist)} className="col-6 mx-auto shadow my-5 p-5 border">
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
                    <input type="number" {...register('mobile', {
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
                    {
                    editIndex==null?
                    <button className="btn btn-outline-primary">Submit</button>
                    :
                    <button className="btn btn-outline-warning">Update</button>
                    }       
                </div>
            </form>
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
                            user.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td><button className='btn btn-danger' onClick={()=>trash(index)}><i class="fa-solid fa-trash"></i></button>
                                        <button className='btn btn-warning ms-3' onClick={()=>update(index)}><i class="fa-solid fa-pen-to-square"></i></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </>
    )
}

export default LocalData
