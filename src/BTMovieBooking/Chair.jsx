import React from 'react'
import './style.scss'

const Chair = (props) => {
    const {ghe} = props
  return (
    <div key={ghe.soghe} className='Chair mt-3'>{ghe.soGhe}</div>
  )
}

export default Chair