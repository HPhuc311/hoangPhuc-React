import React, { useState } from 'react'
import BaiTapCar from './BaiTapCar'

const State = () => {
//   const isLogin = true

//  1. Mọi thứ cần thay đổi trên UI cần phải đưa vào state
//  2. Để tạo 1 state trong function component => gọi hàm (hooks) useState
//  3. useState trả về 1 mảng gồm 2 phần tử: 
//  + phần tử 0: state
//  + phần tử 1: 1 hàm setState => thay đổi giá trị của state
//  4. Khi state được thay đổi = hàm setState => component sẽ được render lại với giá trị state mới => UI được update 
//  5. Tham số truyền khi gọi hooks useState gọi là giá trị mặc định của state khi component được render lần đầu tiên 
//  6. Chỉ nên thay đổi giá trị của state thông qua hàm setState
//  7. Trong 1 component không giới hạn số lượng state được tạo bằng hook useState
//  8. tham số của useState có thể là 1 func => giá trị trả về của functions này là giá trị mặc định của state
// => func này chỉ được gọi duy nhất 1 lần khi component render lần đầu tiên

  const [isLogin, setIsLogin] = useState(true)
  const [state, setState] = useState(() => {
      return 'abc'
    })
    
    console.log("state", state);
    
    const [number, setNumber] = useState(10)

    const [fontSize, setfontSize] = useState(10)

  const handleLogin = (login) => {
    // isLogin = login
    // console.log("isLogin", isLogin);
    setIsLogin(login)
  }
  return (
    <div className='container mt-5'>
        <h1>DemoState</h1>
        {
            isLogin ? <div className='fs-3 mb-5'>Hello Phúc <button className='btn btn-danger ms-4'  
            onClick={() => {
                handleLogin(false)
            }}>Sign Out</button></div> : <button className='btn btn-success' onClick={() => {
                handleLogin(true)
            }}>Sign in</button>
        }

        <h2>Example</h2>
        <p className='fs-4 mt-4'>Number: {number}</p>
        <div>
            <button className='btn btn-outline-success' onClick={() => {
                setNumber(number + 2)
            }}> + Number </button>
            <button className='btn btn-outline-danger ms-5' onClick={() => {
                setNumber(number - 2)
            }}>- Number </button>
        </div>
        <p className='mt-5' style={{fontSize}}>Hello Word</p>
        <div className="mt-5">
            <button className='btn btn-success' onClick={() => {
                setfontSize(fontSize +2)
            }}>+ front size</button>
            <button className='btn btn-danger ms-2' onClick={() => {
                setfontSize(fontSize -2)
            }}>- front size</button>
        </div>

        <BaiTapCar/>
    </div>
  )
}

export default State