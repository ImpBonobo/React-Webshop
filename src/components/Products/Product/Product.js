import React from 'react';
import { Link } from "react-router-dom";
import './Product.css';

function Product(props) {

    let addToCartHandler = () => {
        let cartData = {
            _id: props._id,
            name: props.name,
            href: props.href,
            price: props.price,
        }

        props.addToCart(cartData);
    }

    return (
        <div className="product" key={props._id}>
            <Link to={`/product/${props._id}`}>
                <div className="product-header">
                    <img src={props.href}
                        alt={props.name} />
                </div>
            </Link>
            <div className="product-footer">
                <ul>
                    <li>
                        <h3>{props.name}</h3>
                    </li>
                    <li>
                        {props.price} <span>€</span>
                    </li>
                    <li>
                        <button className="main-button" onClick={addToCartHandler}><i className="fas fa-plus"></i></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product;
