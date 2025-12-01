import React from 'react'
import Section1 from './Section1/Section1'
import data from '../cardData'

const App = () => {
  return (
    <div>
      <Section1 data={data} />
    </div>
  )
}

export default App