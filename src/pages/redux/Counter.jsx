import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state)
    console.log(count)
  return (
    <div className='container my-5 text-center'>
        <h1 className='text-light'>{count}</h1>
        <button className='btn btn-success' onClick={()=>dispatch({type:'inc'})}>+</button>
        <button className='btn btn-danger ms-3 pe-3' onClick={()=>dispatch({type:'dec'})}>-</button>
      
    </div>
  )
}

export default Counter
