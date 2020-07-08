import React from 'react'

const Basket =  props => 
{
    const cartItems = props.onCartItems

   return <div className="alert alert-info">
             {cartItems.length === 0 ? "Basket is empty" : <div> You have {cartItems.length} products</div>}

             <div>
                <ul>
                    {cartItems.map(item => 
                    item.count > 0 ?
                        <div>
                        <li>
                    <b>{item.id}</b>
                            <b>{item.title}</b>

                            <b>        -    {item.count}</b>
                        </li>
                        <button className = "btn btn-danger" onClick={(e) => props.onHandleRemoveFromCart(e, item.id)}>X</button>
                        </div>
                        : ""
                        )}

                                           

                </ul>

                Total : {cartItems.length === 0 ? "$0.00" :  cartItems.reduce( (a, c) => a + c.count*c.price, 0)}

                <p></p>

             </div>
       </div>
}

export default Basket