// rafce
import React from 'react'

const BindingData = () => {
    const name = 'Lê Hoàng Hữu Phúc'
    const sum = (a,b) => a + b
    const student = {
        name: 'ABC',
        age: 18,
    }
  return (
    <div className='container mt-5  '>
        <h1>BindingData</h1>
        {/* đưa biến name ra UI */}
        <p className='fs-3'>NAME: {name}</p>
        <p className='fs-3'>SUM: {sum(2,3)}</p>
        <p className='fs-3'>{student.name}</p>
    </div>
  )
}

export default BindingData