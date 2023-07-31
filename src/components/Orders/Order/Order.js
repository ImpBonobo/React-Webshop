import React from 'react'
import OrderItem from './OrderItem/OrderItem';
import './Order.css';

function Order(props) {

    let totalPrice = 0;
    let items = props.items.map((item, index) => {
        totalPrice += item.price
        
        return (
            <OrderItem
                key={index} // Nicht benötigt -> Erzeugt error bei weglassen
                id={item._id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                href={item.href}
            />
        )
    });

    return (
        <div className="order">
            <div className="order-head">
                <ul>
                    <li>
                        <div className="icon"><i className="fas fa-shopping-bag"></i></div>
                    </li>
                    <li>BestellNr. {props.id}</li>
                    <li>{props.date}</li>
                </ul>
            </div>
            <div className="order-body">
                {items}
            </div>
            <div className="order-foot">
                <h4>SUMME: {Math.round(totalPrice* 100) / 100} €</h4>
            </div>
        </div>
    )
}

export default Order;
