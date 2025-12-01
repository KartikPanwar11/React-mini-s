import React from 'react'

const RightCardCont = (props) => {
  return (
    <div>
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold h-12 w-12 rounded-full flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p className='text-xl leading-normal mb-10 text-gray-100 text-shadow-gray-800'>
            {props.intro}</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full'>{props.tag}</button>
          <button className='bg-blue-600 text-white font-semibold px-5 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
          </div>
          
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default RightCardCont