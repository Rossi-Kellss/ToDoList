import React, { useState } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
// import ToDoSlices from '../store/slices/ToDoSlices'
import { useDispatch,useSelector } from 'react-redux'
import { addNote,checkedNote,clearNote
 } from '../store/slices/ToDoSlices'
import ShowNotes from './ShowNotes'
 

const ToDo = () => {
  const dispatch=useDispatch();
  const [value,setValue]=useState();
  const [showLists,setshowLists]=useState(false)


  const addNotee=()=>{
    setshowLists(true)
    dispatch(addNote(value));
    
    
  }
  
  return (
    <div className="container w-[60%] h-[90%] border border-gray-300 bg-gray-900 flex  flex-col rounded-lg">
        <div className="h1 text-center  p-4 font-bold text-2xl text-gray-200">ToDo's</div>
        <div className='mx-3 my-3 border border-gray-200 h-14 w-[80%] self-center relative rounded-lg' >
            <input type="text" className='h-full w-full outline-none px-5 text-l text-gray-200 font-sans  bg-transparent ' placeholder='Enter your to do' value={value} onChange={(e)=>{setValue(e.target.value)}} />

            
        </div>
        <div className="relative lists self-center  border-white w-[80%] h-[63%]  overflow-y-scroll scrollbar ">
          <AiFillPlusCircle className='absolute right-2.5 bottom-0 text-[2.9rem] text-gray-200 cursor-pointer' onClick={addNotee}/>

          <p className={`text-xl font-sans px-4 py-4 text-gray-400 text-start ${showLists?"hidden":"block"}`}>Start your day by adding tasks in list.</p>

          <ul className={`text-gray-300 px-5 py-3  flex-col gap-2 font-semibold text-[1.1rem] cursor-default ${showLists?"flex":"hidden"}`}>
            <ShowNotes/>
          </ul>
        </div>
        <div className="clearBtn self-center px-20">
          <button className='bg bg-gray-700 text-gray-200 px-3 py-2 my-3 self-center rounded-lg'>Clear all</button>
        </div>

    </div>
  )
}

export default ToDo