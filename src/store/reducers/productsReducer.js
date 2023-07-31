import * as actions from '../actionTypes/productsActionTypes';

const productsState = {
    products: [],
    loading: true,
    displayedProducts: [],
    displayedCategory: 'Keine Produkte'
}

const productsReducer = (state = productsState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCTS:
            return {
                ...state,
                loading: true,
                products: []
            }
        case actions.GET_PRODUCTS_SUCCEED:
            return {
                ...state,
                loading: false,
                displayedCategory: 'Alle Produkte',
                products: action.payload,
                displayedProducts: action.payload
            }
        case actions.GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case actions.FILTER_PRODUCTS_ON_CATEGORY:
            let filteredProducts = null;

            if (action.payload.categoryId === null) {
                filteredProducts = state.products
            } else {
                filteredProducts = state.products.filter((product) =>
                    product.categoryId === action.payload.categoryId
                )
            }
            return {
                ...state,
                displayedProducts: filteredProducts,
                displayedCategory: action.payload.categoryName
            }
        case actions.FILTER_PRODUCTS_ON_SUBCATEGORY:
            let filteredCategory = state.products.filter((product) =>
                product.categoryId === action.payload.categoryId
            )

            let filteredSubcategory = filteredCategory.filter((product) =>
                product.subcategory === action.payload.subcategoryId
            )
            return {
                ...state,
                displayedProducts: filteredSubcategory,
                displayedCategory: action.payload.categoryName
            }
        default:
            return state;
    }
}

export default productsReducer;