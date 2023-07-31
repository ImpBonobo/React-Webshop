import axios from '../../axios';
import * as actions from '../actionTypes/ordersActionTypes';

const ordersAction = (action, data) => {
    return {
        type: action,
        payload: data
    }
}

export const storeOrder = (data) => {
    return dispatch => {
        dispatch(ordersAction(actions.ADD_TO_ORDERS, null));
        axios.post('shop/order/', data, { withCredentials: true }).then((response) => {
            dispatch(ordersAction(actions.ADD_TO_ORDERS_SUCCEED, response.data));
        }).catch((error) => {

            let errorMessage = "Server error";

            if (error.response !== undefined) {
                errorMessage = error.response.data;
            }
            dispatch(ordersAction(actions.ADD_TO_ORDERS_FAILED, errorMessage));

        });
    }
}

export const getOrders = () => {
    return dispatch => {
        dispatch(ordersAction(actions.GET_ORDERS, null));
        axios.get('shop/orders/', { withCredentials: true }).then((response) => {
            dispatch(ordersAction(actions.GET_ORDERS_SUCCEED, response.data));
        }).catch((error) => {

            let errorMessage = "Server error";

            if (error.response !== undefined) {
                errorMessage = error.response.data;
            }
            dispatch(ordersAction(actions.GET_ORDERS_FAILED, errorMessage));
        });
    }
}

