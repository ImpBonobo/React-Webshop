import * as actions from '../actionTypes/cartActionTypes';

const cartState = {
    cart: []
}

const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            const itemFound = state.cart.find((item) => item._id === action.payload._id);
            if (itemFound) {
                state.cart.map(item => {
                    if (item._id === action.payload._id) {
                        item.amount = item.amount + 1;
                    }
                    return {
                        item
                    };
                });
                return {
                    ...state
                };
            } else {
                return {
                    ...state, cart: [...state.cart, action.payload]
                }
            }
        case actions.ADD_ONE_ITEM_TO_CART:
            state.cart.map(item => {
                if (item._id === action.payload) {
                    item.amount = item.amount + 1;
                }
                return {
                    item
                };
            });
            return {
                ...state
            };
        case actions.DROP_ONE_ITEM_FROM_CART:
            state.cart.map(item => {
                if (item._id === action.payload && item.amount !== 1) {
                    item.amount = item.amount - 1;
                }
                return {
                    item
                };
            });
            return {
                ...state
            };
        case actions.REMOVE_FROM_CART:
            let filteredCart = state.cart.filter(cartItem => {
                return cartItem._id !== action.payload;
            });
            return {
                ...state, cart: filteredCart
            };
        case actions.RESET_CART:
            return {
                cart: []
            }
        default:
            return state;
    }
}

export default cartReducer;