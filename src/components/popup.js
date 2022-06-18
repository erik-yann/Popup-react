import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

function Popup(props){

  return (props.trigger)?(
    
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-10'>

        <div className='relative w-1/2 bg-white p-[32px] rounded-lg'>

            <IoCloseSharp className='absolute top-1 right-1 text-xl text-red-500 cursor-pointer hover:scale-105' onClick={()=> props.setTrigger(false)}/> 
            {props.children} 
        
        </div>
    
    </div>

  ):""
  
}

export default Popup
