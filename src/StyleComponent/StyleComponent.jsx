import React from 'react'
import './style.css' // css ăn toàn bộ component trong project
import style from './style.module.css' 
import './style.scss'
const StyleComponent = () => {
  return (
    <div className='container mt-5'>
        <h1 className='title'>StyleComponent </h1>
        <p className={`${style.subTitle} ${style.description} ${style ['sub-title']}`}>Sub Title</p>
        <p style={{fontSize: '20px' , fontWeight: 600, color: 'red'}}>Lê</p>
        <p className='style__title'></p>
    </div>
  )
}

export default StyleComponent
