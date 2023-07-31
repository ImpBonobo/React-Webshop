import React, { useEffect, useRef } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authenticationActions from '../../store/actions/authenticationActions';
import './Navbar.css';

function Navbar(props) {

    const authenticationRef = useRef(null);
    const productsRef = useRef(null);
    const orderRef = useRef(null);
    const cartRef = useRef(null);
    const currentPath = useLocation().pathname;
    let authentication = null;
    let totalCartItems = 0;
    
    props.cartState.cart.forEach(cartItem =>
        totalCartItems += cartItem.amount
    );

    useEffect(() => {

        let authenticationClass = null;
        let productsClass = null;
        let ordersClass = null;
        let cartClass = null;

        if (currentPath === '/login' || currentPath === '/register') {
            authenticationClass = 'active';
        } else if (currentPath === '/' || currentPath === '/products' || matchPath(currentPath, { path: '/product/:id' })) {
            productsClass = 'active';
        } else if (currentPath === '/orders') {
            ordersClass = 'active';
        } else if (currentPath === '/cart') {
            cartClass = 'active';
        }

        authenticationRef.current.className = authenticationClass
        productsRef.current.className = productsClass
        orderRef.current.className = ordersClass
        cartRef.current.className = cartClass

    }, [currentPath]);

    if(props.authenticationState.authenticationStatus) {
        authentication = <Link to="/" ref={authenticationRef} onClick={props.logoutUser}>Logout</Link>
    } else {
        authentication = <Link to="/login" ref={authenticationRef}>Login</Link>
    }
    
    return (
        <div className="header">

            <div className="navbar container align-items">
                <div className="logo">
                    <Link to="/products">Shop</Link>
                </div>
                <input type="checkbox" id="nav-check" />
                <label htmlFor="nav-check" className="nav-toggler">
                    <span><i className="fas fa-bars"></i></span>
                </label>
                <nav className="navigation">
                    <ul>
                        <li>
                            {authentication}
                        </li>
                        <li>
                            <Link to="/products" ref={productsRef}>Produkte</Link>
                        </li>
                        <li>
                            <Link to="/orders" ref={orderRef}>Bestellungen</Link>
                        </li>
                        <li>
                            <Link to="/cart" ref={cartRef}><i className="fas fa-shopping-cart"></i><span>{totalCartItems}</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartState: state.cart,
        authenticationState: state.authentication
    }
}

const mapActionToProps = (dispatch) => {
    return {
        logoutUser: () => { dispatch(authenticationActions.logoutUser()) }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Navbar);
