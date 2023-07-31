import axios from '../../axios';
import * as actions from '../actionTypes/productDetailsActionTypes';

const productDetailAction = (action, data) => {
    return {
        type: action,
        payload: data
    }
}

export const getProductDetails = (id) => {
    return dispatch => {
        dispatch(productDetailAction(actions.GET_PRODUCT_DETAILS, null));
        axios.get(`shop/article/${id}`).then((response) => {
            dispatch(productDetailAction(actions.GET_PRODUCT_DETAILS_SUCCEED, response.data));
        }).catch((error) => {
            let errorMessage = "Server error";

            if (error.response !== undefined) {
                errorMessage = error.response.data.errorMessage;
            }
            dispatch(productDetailAction(actions.GET_PRODUCT_DETAILS_FAILED, errorMessage));
        });
    }
}

export const removeProductDetails = () => {
    return dispatch => {
        dispatch(productDetailAction(actions.RESET_PRODUCT_DETAILS, null));
    }
};