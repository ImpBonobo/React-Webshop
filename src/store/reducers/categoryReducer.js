import * as actions from '../actionTypes/categoryActionTypes';

const categoryState = {
    category: {
        loading: true,
        categories: []
    },
    subcategory: {
        loading: true,
        subcategories: []
    }
}

const categoryReducer = (state = categoryState, action) => {
    switch (action.type) {
        case actions.GET_CATEGORIES:
            return {
                ...state,
                category: {
                    loading: true
                }
            }
        case actions.GET_CATEGORIES_SUCCEED:
            return {
                ...state,
                category: {
                    loading: false,
                    categories: action.payload
                }
            }
        case actions.GET_CATEGORIES_FAILED:
            return {
                ...state,
                category: {
                    loading: false,
                    message: action.payload
                },
            }
        case actions.GET_SUBCATEGORIES:
            return {
                ...state,
                subcategory: {
                    loading: true
                }
            }
        case actions.GET_SUBCATEGORIES_SUCCEED:
            return {
                ...state,
                subcategory: {
                    loading: false,
                    subcategories: action.payload
                }
            }
        case actions.GET_SUBCATEGORIES_FAILED:
            return {
                ...state,
                subcategory: {
                    loading: false,
                    message: action.payload
                }
            }
        default:
            return state;
    }
}

export default categoryReducer;