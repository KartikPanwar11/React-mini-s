import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const pageContent = (props) => {
  return (
    <div className='text-black h-[90vh] px-16 pb-16 pt-6 gap-10 flex items-center justify-between'>
        <LeftContent/>
        <RightContent data={props.data}/>
    </div>
  )
}

export default pageContent