import CartItem from "./CartItem"

export default function Cart(props){
    const {quantity = 0, orders, removeOrder, increment, decrement} = props
    const totalPrice = orders.reduce((sum, el) => {
        return sum+el.price*el.quantity;
    }, 0)

    return(
        <>
        <button data-bs-toggle="modal" data-bs-target="#cart" className="btn btn-info text-light position-sticky ms-auto d-block" style={{zIndex:"5", top:"15px", borderRadius:"50%"}}>
            {quantity ? 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantity}
            </span> 
            : null}

            <i className="bi bi-cart"></i>
        </button>

        <div className="modal fade" id="cart" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {orders.length ? 
                        <div>
                            <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length ? orders.map(item => {
                                    return(
                                        <CartItem increment={increment} decrement={decrement} removeOrder={removeOrder} key={item.id} {...item} />
                                    )
                                }) : <p>Empty</p>}
                            </tbody>
                        </table>
                        <h6 className="ps-1">Total : {totalPrice} <b>$</b></h6>
                        </div>
                    :
                    <p>You haven't selected to buy any product yet</p>
                    }
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}