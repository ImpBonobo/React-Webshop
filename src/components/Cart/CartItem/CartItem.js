import React from 'react';
import './CartItem.css';

function CartItem(props) {

    return (
        <div className="article" key={props.id}>
            <div className="remove">
                <button className="main-button" onClick={() => props.remove(props.id)}><i className="fas fa-times"></i></button>
            </div>
            <ul>
                <li>
                    <div className="cart-info">
                        <img src={props.img} alt={props.name} />
                        <div>
                            <h5 className="name">{props.name}</h5>
                            <p className="price">Preis: {props.price} <span>€</span></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="amount">
                        <button className="main-button" onClick={() => props.addOneItem(props.id)}><i className="fas fa-plus"></i></button>
                        <div className="amount-input">
                            <span>{props.amount}</span>
                        </div>
                        <button className="main-button" onClick={() => props.dropOneItem(props.id)} disabled={props.amount === 1}><i className="fas fa-minus"></i></button>
                    </div>
                </li>
                <li>
                    <p>{Math.round(props.price * props.amount * 100) / 100} <span>€</span></p>
                </li>
            </ul>
        </div>
    )
}

export default CartItem;
