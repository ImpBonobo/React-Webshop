import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../store/actions/cartActions';
import * as ordersActions from '../../store/actions/ordersActions';
import CartItem from './CartItem/CartItem';
import './Cart.css';

function Cart(props) {

   let cartItems = null;
   let totalPrice = 0;
   let data = [];

   const checkoutHandler = (event) => {
      props.storeOrder(data);
      props.resetCart();
   }

   if (props.cartState.cart.length !== 0) {
      cartItems = props.cartState.cart.map((cartItem, index) => {
         totalPrice += cartItem.price * cartItem.amount
         data.push({
            quantity: cartItem.amount,
            articleId: cartItem._id,
            price: Math.round(cartItem.price * cartItem.amount * 100) / 100
         });

         return (
            <CartItem
               key={index} // Nicht benötigt -> Erzeugt error bei weglassen
               id={cartItem._id}
               name={cartItem.name}
               img={cartItem.href}
               price={cartItem.price}
               amount={cartItem.amount}
               remove={props.removeFromCart}
               addOneItem={props.addOneItem}
               dropOneItem={props.dropOneItem}
            />
         )
      }
      );
   }

   return (
      <div className="container cart">

         <div className="cart-head">
            <ul>
               <li>
                  Info
               </li>
               <li>
                  Menge
               </li>
               <li>
                  Preis
               </li>
            </ul>
         </div>

         <div className="cart-body">
            <div className="article-container">

               {cartItems}

            </div>
         </div>

         <div className="cart-footer">
            <div className="total-price">
               <h3>SUMME: {Math.round(totalPrice * 100) / 100} <span>€</span></h3>
            </div>
            <div>
               <button disabled={data.length === 0 || !props.authenticationState.authenticationStatus} className="checkout" onClick={checkoutHandler}>Checkout</button>
            </div>
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
      removeFromCart: (id) => { dispatch(cartActions.removeFromCart(id)) },
      addOneItem: (id) => { dispatch(cartActions.addOneItem(id)) },
      dropOneItem: (id) => { dispatch(cartActions.dropOneItem(id)) },
      resetCart: () => { dispatch(cartActions.resetCart()) },
      storeOrder: (data) => { dispatch(ordersActions.storeOrder(data)) }
   }
}

export default connect(mapStateToProps, mapActionToProps)(Cart);
