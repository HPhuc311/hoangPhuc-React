import React from 'react'

const RenderWithCondition = () => {
  const isLogin = true
  const isShowMessage = true
  const renderLogin = () => {
    if(isLogin){
        // chỉ được phép return về 1 thẻ không được có thẻ khác cùng cấp
        return{
            
        }
    }
  }
  return (
    <div className='container'>
        <h1>RenderWithCondition</h1>
        {/* không được if,else trong {} */}
        {
            isLogin ? (
            <div>
                <p>Hello, Phuc <button className='btn btn-danger'>Sign Out</button></p>
            </div>

            ) : (
            <button className='btn btn-success'>Login</button>
            )
        }
        { isShowMessage && <p className='fs-3 mt-5'>Hello BC 47</p> }
    </div>
  )
}

export default RenderWithCondition


// state
// props 
// redux
// redux-toolkit
// react-router
// form (react-hook-form)
// lifeCycle
// useEffect, useMemo, useRef, useCallback, useID, useTransition, memo
// react-query