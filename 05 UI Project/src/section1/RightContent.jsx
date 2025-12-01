import React from 'react'
import RightCardCont from './RightCardCont'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap gap-5 overflow-x-auto rounded-4xl w-3/4 p-6'>
        {props.data.map(function(elem,idx){
            return <RightCardCont key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })} 
    </div>
  )
}

export default RightContent