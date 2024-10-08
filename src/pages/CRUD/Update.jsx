import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Update = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { id } = useParams()
  const redirect = useNavigate()

  async function SingleUser() {
    const res = await axios.get(`https://66fe258469936930895735f1.mockapi.io/users/${id}`)
    reset(res.data)
  }
  useEffect(() => {
    SingleUser()
  }, [])

  async function editUser(data) {
    await axios.put(`https://66fe258469936930895735f1.mockapi.io/users/${id}`,data)
    .then((res)=>{
      redirect('/view')
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <form action="" method="post" style={{}} onSubmit={handleSubmit(editUser)} className="col-6 mx-auto shadow my-5 p-5 border">
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

export default Update
