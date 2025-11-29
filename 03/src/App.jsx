import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className="parent">
        <Card user='Kartik' age={24} pic='https://images.unsplash.com/photo-1752061159819-f290b8f48b08?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

        <Card user='Fiery' age={19} pic='https://plus.unsplash.com/premium_photo-1761947288852-933ad1a61d22?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

        <Card user='Piyush' age={21} pic='https://plus.unsplash.com/premium_photo-1762927744544-f1ef4eb5951b?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      </div>
      
    </>
  )
}

export default App