import {
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAILURE,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILURE,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    LOGOUT,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAIL
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false,
}

export default function Auth (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false,
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user:payload
            }
        case USER_LOADED_FAILURE:
            return {
                ...state,
                user:null
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: localStorage.getItem('access'),
                refresh: localStorage.getItem('refresh'),
            }
        case ACTIVATION_SUCCESS:        
        case ACTIVATION_FAILURE:
        case RESET_PASSWORD_SUCCESS:
        case RESET_PASSWORD_FAIL:
        case RESET_PASSWORD_CONFIRM_SUCCESS:
        case RESET_PASSWORD_CONFIRM_FAIL:
            return {
                ...state,
            }
        case SIGNUP_SUCCESS:
        case LOGIN_FAILURE:
        case REFRESH_FAIL:
        case SIGNUP_FAILURE:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            }
        case AUTH_FAILURE:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null,
            }
        case REFRESH_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                access: localStorage.getItem('access'), 
            }

        default:
             return state;
    }
}