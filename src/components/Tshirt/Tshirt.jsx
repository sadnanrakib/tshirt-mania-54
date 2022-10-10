import React from 'react';
import"./Tshirt.css"

const Tshirt = ({tshirt,handelAddToCart}) => {
    const{picture,name,price,gender}= tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" ></img>
            <h3>{name}</h3>
            <h4>Price:${price}</h4>
            <h4>Gender:{gender}</h4>
            <button onClick={()=>handelAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;