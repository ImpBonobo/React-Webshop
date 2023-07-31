import axios from '../../axios';
import * as actions from '../actionTypes/authenticationActionTypes';

const authenticationAction = (action, data) => {
    return {
        type: action,
        payload: data
    }
}

export const registerUser = (userData) => {
    return dispatch => {
        axios.post('signup/', userData, { withCredentials: true })
            .then((response) => {
                dispatch(authenticationAction(actions.SET_USER_DATA_SUCCEED, response.data));
            }).catch((error) => {

                let errorMessage = "Server error";

                if (error.response !== undefined) {
                    errorMessage = error.response.data;
                }
                dispatch(authenticationAction(actions.SET_USER_DATA_FAILED, errorMessage));
            });
    }
}

export const resetRegistration = () => {
    return dispatch => {
        dispatch(authenticationAction(actions.SET_USER_DATA_RESET, null));
    }
}

export const loginUser = (userData) => {
    return dispatch => {
        axios.post('login', userData, { withCredentials: true }).then((response) => {
            dispatch(authenticationAction(actions.GET_AUTHENTICATION_SUCCEED, response.data));
        }).catch((error) => {

            let errorMessage = "Server error";

            if (error.response !== undefined) {
                errorMessage = error.response.data;
            }
            dispatch(authenticationAction(actions.GET_AUTHENTICATION_FAILED, errorMessage));
        });
    }
}

export const resetLogin = () => {
    return dispatch => {
        dispatch(authenticationAction(actions.GET_AUTHENTICATION_RESET, null));
    }
}

export const getLoginStatus = () => {
    return dispatch => {
        axios.get('shop/orders/', { withCredentials: true }).then((response) => {
            dispatch(authenticationAction(actions.GET_LOGIN_STATUS_SUCCEED, null));
        }).catch((error) => {
            dispatch(authenticationAction(actions.GET_LOGIN_STATUS_FAILED, null));
        });
    }
}

export const logoutUser = () => {
    return dispatch => {
        axios.post('logout/',null ,{ withCredentials: true })
            .then((response) => {
                dispatch(authenticationAction(actions.LOGOUT_USER, null));
            }).catch((error) => {
                console.log(error)
            });
    }
}