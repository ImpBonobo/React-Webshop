import axios from '../../axios';
import * as actions from '../actionTypes/productsActionTypes';

const storeProducts = (action, data) => {
    return {
        type: action,
        payload: data
    }
}

export const getProducts = () => {
    return dispatch => {
        dispatch(storeProducts(actions.GET_PRODUCTS, null));
        axios.get('shop/articles').then((response) => {
            dispatch(storeProducts(actions.GET_PRODUCTS_SUCCEED, response.data));
        }).catch((error) => {

            let errorMessage = "Server error";

            if (error.response !== undefined) {
                errorMessage = error.response.data;
            }
            dispatch(storeProducts(actions.GET_PRODUCTS_FAILED, errorMessage));
        });
    }
}

export const filterCategory = (categoryId, categoryName) => {
    return dispatch => {
        dispatch(storeProducts(actions.FILTER_PRODUCTS_ON_CATEGORY,
            {
                categoryId: categoryId,
                categoryName: categoryName
            }
        ));
    }
}

export const filterSubcategory = (categoryId, subcategoryId, categoryName) => {
    return dispatch => {
        dispatch(storeProducts(actions.FILTER_PRODUCTS_ON_SUBCATEGORY,
            {
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                categoryName: categoryName
            }
        ));
    }
}