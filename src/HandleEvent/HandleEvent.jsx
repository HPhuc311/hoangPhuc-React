import React from 'react'

function HandleEvent() {
  const loger = () => {
    alert('Hello World')
  }
  const showMessage = (message) =>{
    alert(message)
  }
//   Mọi event trong react đều trả về 1 tham số event
  return (
    <div className='container mt-5'>
        <h1>HandleEvent</h1>
        {/* Hàm không có tham số*/}
        <button className='btn btn-outline-success mt-3' onClick={loger}>Loger</button>
        {/* Hàm có tham số */}
        <button className='btn btn-outline-info mt-3 ms-3' onClick={() => {showMessage('Hello CyberSoft')}}> Show message</button>
        {/* Hàm không định nghĩa hàm trước đó */}
        <button className='btn btn-outline-danger mt-3 ms-3' onClick={(event) => {
            console.log("event", event.currentTarget);
            // alert('Show message 1')
        }}>
            <span>Show message 1</span>
        </button>
    </div>
                
  )
}

export default HandleEvent