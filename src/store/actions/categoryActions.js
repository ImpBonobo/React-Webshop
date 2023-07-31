import axios from '../../axios';
import * as actions from '../actionTypes/categoryActionTypes';

const storeCategories = (action, data) => {
    return {
        type: action,
        payload: data
    }
}

export const getCategories = () => {
    return dispatch => {
        dispatch(storeCategories(actions.GET_CATEGORIES, null));
        axios.get('shop/categories/').then((response) => {
            dispatch(storeCategories(actions.GET_CATEGORIES_SUCCEED, response.data));
        }).catch((error) => {
            
            let errorMessage = "Server error";

            if (error.response !== undefined) {
                errorMessage = error.response.data;
            }
            dispatch(storeCategories(actions.GET_CATEGORIES_FAILED, errorMessage));
        });
    }
}
    
export const getSubcategories = () => {
    return dispatch => {
        dispatch(storeCategories(actions.GET_SUBCATEGORIES, null));
        axios.get('shop/subcategories/').then((response) => {
            dispatch(storeCategories(actions.GET_SUBCATEGORIES_SUCCEED, response.data));
        }).catch((error) => {
            dispatch(storeCategories(actions.GET_SUBCATEGORIES_FAILED, null));
        });
    }
}