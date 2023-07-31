import * as actions from '../actionTypes/cartActionTypes';

const cartAction = (action, data) => {
    return {
        type: action,
        payload: data
    }
}

export const addToCart = (data) => {
    return dispatch => {
        dispatch(cartAction(actions.ADD_TO_CART, ((data) = { ...data, amount: 1 })));
    }
}

export const addOneItem = (id) => {
    return dispatch => {
        dispatch(cartAction(actions.ADD_ONE_ITEM_TO_CART, id));
    }
}

export const dropOneItem = (id) => {
    return dispatch => {
        dispatch(cartAction(actions.DROP_ONE_ITEM_FROM_CART, id));
    }
}

export const removeFromCart = (id) => {
    return dispatch => {
        dispatch(cartAction(actions.REMOVE_FROM_CART, id));
    }
}

export const resetCart = () => {
    return dispatch => {
        dispatch(cartAction(actions.RESET_CART, null));
    }
}