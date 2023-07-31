import * as actions from '../actionTypes/productDetailsActionTypes';

const productDetailsState = {
    product: {},
    loading: true
}

const productDetailsReducer = (state = productDetailsState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCT_DETAILS:
            return {
                loading: true,
                product: {}
            }
        case actions.GET_PRODUCT_DETAILS_SUCCEED:
            return {
                loading: false,
                product: action.payload
            }
        case actions.GET_PRODUCT_DETAILS_FAILED:
            console.log(action.payload);
            return {
                loading: false,
                message: action.payload
            }
        case actions.RESET_PRODUCT_DETAILS:
            return {
                product: {},
                loading: true
            }
        default:
            return state;
    }
}

export default productDetailsReducer;