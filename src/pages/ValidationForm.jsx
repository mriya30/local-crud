import React from "react";
import { useForm } from "react-hook-form";

const ValidationForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()


    function Regist(data) {
        console.log(data);
    }
    // const css={
    //     backgroundColor:"black",
    //     color:"white"
    // }
    return (
        <>
            <form action="" method="post" style={{}} onSubmit={handleSubmit(Regist)} className="col-6 mx-auto shadow my-5 p-5 border">
            <h1 className="text-center text-decoration-underline fw-bold ">Validation Form</h1>
                <div className="mt-4">
                    <input type="text" {...register('username',
                        {
                            required: {
                                value: true,
                                message: "enter your username"
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
                                message: "enter your email"
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
                            message: "enter your mobile number "
                        },
                        maxLength: {
                            value: 10,
                            message: "maximum 10 number"
                        }
                    }
                    )}
                        className="form-control" placeholder="enter your Mobile Number" />
                    <p className="text-danger">{errors?.mobile?.message}</p>
                </div>
                <div className="mt-4">
                    <label className="form-control" {...register('gender', {
                        required: {
                            value: true,
                            message: "select your gender"
                        }
                    })}><input type="radio" className="form-check-input"  value="male" {...register('gender', {
                        required: {
                            value: true,
                            message: "select your gender"
                        }
                    })} /> Male
                        <input type="radio" className="form-check-input ms-2" value="female" {...register('gender', {
                        required: {
                            value: true,
                            message: "select your gender"
                        }
                    })}/> Female
                        <input type="radio" className="form-check-input ms-2" value="female" {...register('gender', {
                        required: {
                            value: true,
                            message: "select your gender"
                        }
                    })}/> Other
                    </label>
                    <p className="text-danger">{errors?.gender?.message}</p>
                </div>
                <div className="mt-3">
                    <select className="form-select" {...register('select', {
                        required: {
                            value: true,
                            message: 'Select your country',
                        },
                    })} >
                        <option value="">-- select country --</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <p className="text-danger">{errors?.select?.message}</p>

                </div>
                <div className="mt-2">
                    <label className="form-control border-0" >
                        <input type="checkbox" className="form-check-input me-2" {...register('check', {
                            required: {
                                value: true,
                                message: "You must accept the terms"
                            }
                        })} /> I accept the terms</label>
                    <p className="text-danger">{errors?.check?.message}</p>
                </div>
                <div className="mt-3">
                <textarea type="address" {...register('address', {
                        required: {
                            value: true,
                            message: "enter your address "
                        },
                        maxLength: {
                            value: 10,
                            message: "maximum 30 char"
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
        </>
    )
}

export default ValidationForm