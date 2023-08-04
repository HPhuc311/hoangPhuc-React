import React from 'react'
import Chair from './Chair'

const Chairlist = ({ data }) => {
    console.log('data', data)
    return (
        <div>
            {
                data.map((hangGhe) => {
                    return <div key={hangGhe.hang} className='d-flex gap-3' style={{justifyContent: 'center', alignItems: 'center'}}>
                        <p  style={{
                                width: 30,
                            }}>{hangGhe.hang}</p>
                        {
                            hangGhe.danhSachGhe.map((ghe) => {
                                return <Chair key={ghe.soghe} ghe={ghe}></Chair>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Chairlist