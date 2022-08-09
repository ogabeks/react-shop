import {API_KEY, API_URL} from './config';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import Products from './Products';
import Cart from './Cart';
import {toast} from "react-toastify";

export default function Shop(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    const addOrder = (item) =>{
        const itemIndex = orders.findIndex(orderItem => orderItem.id === item.id)

        if(itemIndex < 0){
            const newItem = {
                ...item, 
                quantity:1
            }
            setOrders([...orders, newItem]);
        }else{
            const newOrder = orders.map((orderItem, index) => {
                if(index === itemIndex){
                    return {
                        ...orderItem, 
                        quantity:orderItem.quantity+1,
                    };
                }else{
                    return orderItem;
                }
            });
            setOrders(newOrder);
        }

        toast.success('Added successfully')

    }
    const removeOrder = (itemID) =>{
        const newOrders = orders.filter(item => item.id !== itemID);
        setOrders(newOrders);
        toast.error('Product deleted successfully')
    }
    const incrementOrder = (item) =>{
        const newOrder = orders.map(el=>{
            if(el.id === item){
                const newQuantity = el.quantity + 1
                return{
                    ...el,
                    quantity:newQuantity
                }
            }else{
                return el;
            }
        });
        setOrders(newOrder);
        toast.success('Added +1');
    }

    const decrementOrder = (item) =>{
        
        const newOrder = orders.map(el=>{
            if(el.id === item){
                const newQuantity = el.quantity - 1
                return{
                    ...el,
                    quantity:newQuantity >=1 ? newQuantity : 1
                }
            }else{
                return el;
            }
        });
        setOrders(newOrder);
        toast.error('Removed -1');
    }

    useEffect(()=>{
        fetch(API_URL, {
            headers:{
                Authorization:API_KEY,
            },
        })
        .then((response) => response.json())
        .then((data) =>{
            data.featured && setProducts(data.featured);
            setLoading(false);
        })
    }, []);

    return(
        <div className='container py-3'>
            <Cart removeOrder={removeOrder} quantity={orders.length} increment={incrementOrder} decrement={decrementOrder} orders={orders} />
            <h3>Products</h3>
            {   loading 
            ? 
            <Loader /> 
            : 
            <Products  addOrder={addOrder} products={products} />   }
        </div>
    )
}