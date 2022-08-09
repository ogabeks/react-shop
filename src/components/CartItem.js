export default function CartItem(props){
    const {id, name, price, quantity, removeOrder, increment, decrement} = props
    return(
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price * quantity} <b>$</b></td>
            <td>
                <div className="btn-group me-2">
                    <button className="btn btn-outline-dark" onClick={() => increment(id)}>
                        <i className="bi bi-plus"></i>
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => decrement(id)}>
                        <i className="bi bi-dash"></i>
                    </button>
                </div>
                <button className="btn btn-outline-danger" onClick={() => removeOrder(id)}>
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    )
}