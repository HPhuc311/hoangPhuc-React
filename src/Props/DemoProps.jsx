import React from 'react'
import Header from './Header'

const DemoProps = () => {
  return (
    <div className='container mt-5'>
        <h1>DemoProps</h1>
        <Header bg ='yellow'/>
        <Header bg ='red'/>
        <Header/>
        <Header/>
    </div>
  )
}

export default DemoProps