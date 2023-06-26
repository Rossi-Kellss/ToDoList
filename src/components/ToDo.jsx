import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'

const ToDo = () => {
  return (
    <div className="container w-[60%] h-[90%] border border-gray-300 bg-gray-900 flex  flex-col rounded-lg">
        <div className="h1 text-center  p-4 font-bold text-2xl text-gray-200">ToDo's</div>
        <div className='mx-3 my-3 border border-gray-200 h-14 w-[80%] self-center relative rounded-lg' >
            <input type="text" className='h-full w-full outline-none px-5 text-xl text-gray-200 font-sans  bg-transparent ' placeholder='Enter your toDo' />

            
        </div>
        <div className="relative lists self-center border border-white w-[80%] h-[63%] rounded-lg overflow-y-scroll  ">
          <AiFillPlusCircle className='absolute right-2.5 bottom-3 text-[2.9rem] text-gray-200 cursor-pointer'/>
          <ul className='text-gray-300 px-5 py-3 flex flex-col gap-2 font-semibold text-[1.1rem] cursor-default hidden'>
            <li className=' flex justify-between'>hello
            <input type="checkbox" className='cursor-pointer h-[1rem] w-[2rem] my-1.5 '/>

            </li>
            <hr />
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
        <div className="clearBtn self-end px-20">
          <button className='bg bg-gray-700 text-gray-200 px-3 py-2 my-3 self-center rounded-lg'>Clear all</button>
        </div>

    </div>
  )
}

export default ToDo