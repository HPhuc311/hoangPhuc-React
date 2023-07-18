import React from 'react'

const RenderWithMap = () => {
    const products = [
        {
            name: 'Iphone 7+',
            price: 10000000,
            color: 'black',
        },
        {
            name: 'Iphone 8+',
            price: 80000000,
            color: 'pink',
        },
        {
            name: 'Iphone 10+',
            price: 120000000,
            color: 'blue',
        }
    ]
  return (
    <div className='container mt-5'>
        <h1>RenderWithMap</h1>
        <p>Danh sách sản phẩm</p>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                {/* Khi sử dụng map
                    1. Bắt buộc return ==> UI
                    2. Chỉ được phép return về 1 thẻ duy nhất (không được phép return về 2 thẻ cùng cấp)
                    3. Phải có thuộc tính key ở thẻ bao bọc ngoài cùng và giá trị của key là duy nhất 
                    4. Hạn chế sử dụng index làm giá trị của thuộc tính key => chỉ sử dụng khi mãng tĩnh
                    (không có thêm xóa sửa)
                */}
                {
                    products.map((products,index) => {
                        return <tr key={index}>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.color}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default RenderWithMap