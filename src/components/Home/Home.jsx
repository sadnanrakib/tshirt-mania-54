import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import"./Home.css"
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart]=useState([])
    const handelAddToCart = tshirt=>{
        // console.log(tshirt)
        const exsits=cart.find(ts=>ts._id===tshirt._id)
        if(exsits){
            alert('already added')
        }
        else{
            const newCart = [...cart,tshirt]
            setCart(newCart)
        }
        
    }

    const removeCart = tshirt=>{
        const remaining = cart.filter(ts=>ts._id!==tshirt._id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tshirts.map(tshirt=><Tshirt key={tshirt._id} tshirt={tshirt} handelAddToCart={handelAddToCart}></Tshirt>)
            }
            </div>
           <div className="cart-container">
            <Cart cart={cart} removeCart={removeCart}></Cart>
           </div>
           
        </div>
    );
};

export default Home;