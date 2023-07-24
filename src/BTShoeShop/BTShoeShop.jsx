import React, { useState } from 'react'
import prdList from './data.json'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

const BTShoeShop = () => {
    console.log({ prdList })
    const [productDetail, setProductDetail] = useState(prdList[0])

    const [carts, setCarts] = useState([])

    const handleProductDetail = (product) => {
        setProductDetail(product)
    }

    const handleCarts = (product) => {
        console.log("product", product);
        // setCarts()
    }

    return (
        <div className="container mt-5">
            <div className='d-flex justify-content-between'>
            <h1>BTShoeShop</h1>
            <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#cart">Cart</button>
            </div>
            
            <ProductList prdList={prdList} handleProductDetail={handleProductDetail} handleCarts={handleCarts} />
            {/* Modal detail */}
            <ProductDetail productDetail={productDetail} />
            {/* Modal Cart */}
            <Cart carts={carts}/>
        </div>
    )
}

export default BTShoeShop
