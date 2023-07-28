import React from 'react'
import { useSelector } from 'react-redux'

const Demoredux = () => {
    // Lấy giá trị từ store redux
    const { number } = useSelector((state) => state.demoRedux)

  return (
    <div className='container mt-5'>
        <h1>Demoredux</h1>
        <p className='mt-3'>NUmber: {number}</p>
    </div>
  )
}

export default Demoredux