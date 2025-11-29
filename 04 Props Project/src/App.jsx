import React from 'react'
import Card from './components/Card'
import jobListings from '../jobs'

const App = () => {
  return (
    <div className='parent'>
      {jobListings.map(function(obj){
        return <Card company={obj.companyName}
                      logo={obj.brandLogo}
                      posted={obj.postedOn}
                      position={obj.position}
                      tag1={obj.tag1} 
                      tag2={obj.tag2}
                      price={obj.packagePerHour}
                      location={obj.location}
                      />
      })}
    </div>
  )
}

export default App