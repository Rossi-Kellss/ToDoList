import React from 'react'
import { useSelector } from 'react-redux'

const ShowNotes = () => {
    const data=useSelector((state)=>{
        return state.note

    })
    
  return (
    <>
    {data.map((data,index)=>{
        
        return(<><li className=' flex justify-between 'key={index}>{data}
        <input type="checkbox" className='cursor-pointer h-[1rem] w-[2rem] my-1.5 '/>
        </li>
        <hr/></>)

    })}
    </>
    
  )
}

export default ShowNotes

