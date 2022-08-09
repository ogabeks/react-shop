export default function Product (props){
    const {id, name, description, price, full_background, addOrder} = props
    return(
        <div className="col-sm-3 p-3 d-flex align-items-stretch">
            <div className="card">
                <img className="card-img-top" src={full_background ? full_background : "some"} alt={name}/>
                <div className="card-body d-flex justify-content-between flex-column">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h5>${price}</h5>
                    <button onClick={() => addOrder({id, name, price}) } className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    )
}