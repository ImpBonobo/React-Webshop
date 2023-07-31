import * as actions from '../actionTypes/authenticationActionTypes';

const authenticationState = {
    register: {},
    login: {},
    authenticationStatus: false
}

const authenticationReducer = (state = authenticationState, action) => {
    switch (action.type) {
        case actions.GET_AUTHENTICATION_SUCCEED:
            return {
                ...state,
                authenticationStatus: true,
                login: {
                    status: true,
                    message: action.payload
                }
            }
        case actions.GET_AUTHENTICATION_FAILED:
            return {
                ...state,
                authenticationStatus: false,
                login: {
                    status: false,
                    message: action.payload
                }
            }
        case actions.GET_AUTHENTICATION_RESET:
            return {
                ...state,
                login: {}
            }
        case actions.SET_USER_DATA_SUCCEED:
            return {
                ...state,
                authenticationStatus: true,
                register: {
                    status: true,
                    message: action.payload
                }
            }
        case actions.SET_USER_DATA_FAILED:
            return {
                ...state,
                authenticationStatus: false,
                register: {
                    status: false,
                    message: action.payload
                }
            }
        case actions.SET_USER_DATA_RESET:
            return {
                ...state,
                register: {}
            }
        case actions.GET_LOGIN_STATUS_SUCCEED:
            return {
                ...state,
                authenticationStatus: true
            }
        case actions.GET_LOGIN_STATUS_FAILED:
            return {
                ...state,
                authenticationStatus: false
            }
        case actions.LOGOUT_USER:
            return {
                ...state,
                authenticationStatus: false
            }
        default:
            return state;
    }
}

export default authenticationReducer;