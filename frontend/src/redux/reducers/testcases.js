import {
    GET_TEST_CASES_BY_SUIT_SUCCESS,
    GET_TEST_CASES_BY_SUIT_FAIL,
    GET_TEST_CASES_SUCCESS,
    GET_TEST_CASES_FAIL,
    GET_TEST_CASE_SUCCESS,
    GET_TEST_CASE_FALE,
    SEARCH_CASES_SUCCESS,
    SEARCH_CASES_FAIL
} from '../actions/types';

const initialState = {
    cases: null,
    case_bysuit: null,
    case: null,
    case_bysearch: null
};

export default function Cases(state=initialState, action) {
    const { type, payload } = action;

    switch(type){
        case GET_TEST_CASES_SUCCESS: 
            return {
                ...state,
                cases: payload.test_cases
            }
        case GET_TEST_CASES_FAIL:
            return {
                ...state,
                cases: null
            }
        case GET_TEST_CASES_BY_SUIT_SUCCESS:
            return {
                ...state,
                case_bysuit: payload.test_suit_cases
            }
        case GET_TEST_CASES_BY_SUIT_FAIL:
            return {
                ...state,
                case_bysuit: null
            }
        case GET_TEST_CASE_SUCCESS:
            return {
                ...state, 
                case: payload.test_case
            }
        case GET_TEST_CASE_FALE:
            return {
                ...state,
                case: null
            }
        case SEARCH_CASES_SUCCESS:
            return {
                ...state, 
                case_bysearch: payload.search_cases
            }
        case SEARCH_CASES_FAIL:
            return {
                ...state,
                case_bysearch: null
            }
        default:
            return state
    }
}