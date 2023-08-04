import React from 'react'
import Chairlist from './Chairlist'
import Result from './Result'
import data from './data.json'

const BTMoiveBooking = () => {
  return (
    <div className='container'>
        <h1>BTMoiveBooking(redux toolkit)</h1>
        <div className="row">
            <div className="col-8">
                <div className="p-2 fs-4 bg-dark text-white text-center mb-3">Screen</div>
                <Chairlist data={data}></Chairlist>
            </div>
            <div className="col-4">
                <Result></Result>
            </div>
        </div>
    </div>
  )
}

export default BTMoiveBooking