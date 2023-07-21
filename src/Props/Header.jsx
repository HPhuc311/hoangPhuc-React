import React from 'react'

const Header = (props) => {
  console.log("props", props);
//   props thay đổi thì component render lại
//  không thể thay đổi giá trị của props
  return (
    <div>
        <h1 
        className='text-center text-white p-3 fs-3' 
        style={{
            background: props.bg,
        }}>HEADER</h1>
        {/* <p>name: {props.name}</p> */}
    </div>
  )
}

export default Header