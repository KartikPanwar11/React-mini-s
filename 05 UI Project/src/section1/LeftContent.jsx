import React from 'react'
import HeroText from './hero/HeroText'
import Arrow from './hero/Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/4 gap-10 flex flex-col justify-between'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent