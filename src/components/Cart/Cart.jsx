import React from 'react';

const Cart = ({cart,removeCart}) => {
    return (
        <div>
            <h3>This is a cart</h3>
            <h5>order quantity:{cart.length}</h5>
            {
                cart.map(tshirt=><p key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>removeCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;