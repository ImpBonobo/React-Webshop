import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/productsReducer';
import productDetailsReducer from './reducers/productDetailsReducer';
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/ordersReducer';
import categoryReducer from './reducers/categoryReducer';
import authenticationReducer from './reducers/authenticationReducer';

const reducers = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    authentication: authenticationReducer,
    category: categoryReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;