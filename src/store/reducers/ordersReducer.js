import * as actions from '../actionTypes/ordersActionTypes';

const ordersState = {
    orders: []
}

const ordersReducer = (state = ordersState, action) => {
    switch (action.type) {
        case actions.ADD_TO_ORDERS:
            return {
                ...state,
                status: false
            }
        case actions.ADD_TO_ORDERS_SUCCEED:
            return {
                ...state,
                status: true,
                message: action.payload
            }
        case actions.ADD_TO_ORDERS_FAILED:
            return {
                status: false,
                message: action.payload
            }
        case actions.GET_ORDERS:
            return {
                loading: true,
                orders: []
            }
        case actions.GET_ORDERS_SUCCEED:
            return {
                loading: false,
                orders: action.payload
            }
        case actions.GET_ORDERS_FAILED:
            return {
                loading: false,
                orders: [],
                message: action.payload
            }
        default:
            return state;
    }
}

export default ordersReducer;