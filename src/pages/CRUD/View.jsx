import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const View = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [selectCity, setCity] = useState('')
    const [sorted, setSorted] = useState('')

    async function show() {
        const res = await axios.get('https://66fe258469936930895735f1.mockapi.io/users')
        setUsers(res.data)
    }
    useEffect(() => {
        show()
    }, [])

    console.log("user..................")
    console.log(users)

    async function trash(id) {

        if (confirm("do you want to delete this item??"))
            await axios.delete(`https://66fe258469936930895735f1.mockapi.io/users/${id}`)
        show()
    }
    const cities = users.map((user) => {
        return user.address
    })
    console.log("cities")
    console.log(selectCity)

    const uniqueCity = new Set(cities)
    console.log(uniqueCity)

    const finalCity = [...uniqueCity]

    const filterData = users
        .filter((user) => {
            const searched = search.toUpperCase();
            const username = user.name.toUpperCase()
            return username.includes(searched)
        })
        .filter((user) => {
            return user.address.includes(selectCity)
        })
        .sort((a, b) => {
            if (sorted == 'asc') {
                return a.email.localeCompare(b.eamil)
            }
            else if (sorted == 'desc') {
                return b.email.localeCompare(a.email)
            }
        })
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 my-4">
                        <input type="search" onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='enter name' />
                    </div>
                    <div className="col-lg-4 my-4">
                        <select className='form-select' onChange={(e) => { setCity(e.target.value) }}>
                            <option disabled>--select city--</option>
                            {
                                finalCity.map((city) => {
                                    return (
                                        <option>{city}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-lg-4 my-4">
                        <select className='form-select' onChange={(e) => { setSorted(e.target.value) }}>
                            <option value="" disabled>--select sorting--</option>
                            <option value="asc">A-Z</option>
                            <option value="desc">Z-A</option>
                        </select>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead className="table-dark ">
                            <tr>
                                <th>S.no</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData.length > 0 ?
                                    filterData.map((user, index) => {
                                        console.log(user)
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.mobile}</td>
                                                <td>{user.address}</td>
                                                <td>
                                                    <NavLink to={`/SingleUser/${user.id}`} className="btn btn-warning mx-2">
                                                        <i className='fa-regular fa-eye '></i>
                                                    </NavLink>

                                                    <button onClick={() => trash(user.id)} className='btn btn-danger'>
                                                        <i className='fa-solid fa-trash'></i>
                                                    </button>
                                                    <NavLink to={`/update/${user.id}`} className="btn btn-info mx-2">
                                                        <i className='fa-solid fa-pen '></i></NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan={6} className='text-center fw-bold'>No Data</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}

export default View
