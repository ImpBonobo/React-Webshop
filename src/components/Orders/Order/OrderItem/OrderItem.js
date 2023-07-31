import React from 'react';
import './OrderItems.css';

function OrderItem(props) {

    return (
        <div className="item" key={props.id}>
            <ul>
                <li><img src={props.href} alt={props.name} />
                </li>
                <li>{props.name}</li>
                <li>Anzahl: {props.quantity}</li>
                <li>Preis: {Math.round(props.price * 100) / 100} €</li>
            </ul>
        </div>
    )
}

export default OrderItem;
