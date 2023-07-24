import React from 'react'

const Cart = ({carts}) => {
  console.log("carts", carts);
  return (
   <div className="modal fade" id="cart" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <table className='table'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                                {carts.map((cart, index) => {
                                    return (
                                        <tr key={cart.id}>
                                            <td>{index + 1}</td>
                                            <td>{cart.name}</td>
                                            <td>
                                                <img
                                                    style={{
                                                        width: 80,
                                                        height: 80,
                                                    }}
                                                    className="img-fluid"
                                                    src={cart.image}
                                                    alt="..."
                                                />
                                            </td>
                                            <td>{cart.price}</td>
                                            <td>1</td>
                                            <td>100</td>
                                            <td>
                                                <button className="btn btn-outline-success">
                                                    +
                                                </button>
                                                <span className="mx-3">1</span>
                                                <button className="btn btn-outline-danger">
                                                    -
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">X</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart