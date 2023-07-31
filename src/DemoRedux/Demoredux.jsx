import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREASER_NUMBER, DECREASE_NUMBER } from './actionType'
import { demoReduxActions } from './action'

const Demoredux = () => {
    // Lấy giá trị từ store redux
    const { number } = useSelector((state) => state.demoRedux)

    // Thay đổi giá trị trên store của redux
    // B1 tạo 1 biến dispatch để gửi lên store 1 action 
    // acion là 1 object gồm 2 thuộc tính:
    //  + type: string (HẰNG SỐ) ex: 'ABC'
    //  + payload: number, string, boolean, obj, array, function, undefined, null
    //  => khi giá trị của store thay đổi => component nào đang lấy giá trị đó về sẽ bị render lại 
    const dispatch = useDispatch()

  return (
    <div className='container mt-5'>
        <h1>Demoredux</h1>
        <p className='mt-3'>NUmber: {number}</p>
        <div className="mt-3">
          <button className='btn btn-success' onClick={() => {
            dispatch(demoReduxActions.increaseNumber(1))
          }}>+ Number</button>
          <button className='btn btn-danger ms-3' onClick={() => {
            dispatch(demoReduxActions.decreaseNumber(-1))
          }}>- Number</button>
        </div>
    </div>
  )
}

export default Demoredux