import Product from "./Product"

export default function Products(props){
    const {products = [], addOrder} = props
    if(!products.length) {
        <div className="text-danger">Nothing found</div>
    }

    return(
        <div className="row d-flex align-items-stretch">
            {products.map((item) => (
                <Product  key={item.id} {...item} addOrder={addOrder}/>
            ))}
        </div>
    );
} 