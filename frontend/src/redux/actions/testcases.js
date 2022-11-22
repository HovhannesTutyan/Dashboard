import axios from "axios";
import {
    GET_TEST_CASES_SUCCESS,
    GET_TEST_CASES_FAIL,
    GET_TEST_CASE_SUCCESS,
    GET_TEST_CASE_FALE,
    GET_TEST_CASES_BY_SUIT_SUCCESS,
    GET_TEST_CASES_BY_SUIT_FAIL,
    SEARCH_CASES_SUCCESS,
    SEARCH_CASES_FAIL
} from './types';

export const get_cases = () => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`,
            'Content-Type':'application/json',
        }
    };

    try{
        const res = await axios.get('http://127.0.0.1:8000/api/test-case/cases', config);
        if (res.status === 200) {
            dispatch({
                type: GET_TEST_CASES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch ({
                type: GET_TEST_CASES_FAIL,
                payload: res.data
            })
        }
    } catch (err){
        dispatch({
            type: GET_TEST_CASES_FAIL,
        });
    }
}

export const get_case = (caseId) => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`,
            'Content-Type':'application/json',
        }
    };

    try {
        const res = await axios.get(`https://127.0.0.1:8000/api/test-case/case/${caseId}`, config)
        if (res.status === 200) {
            dispatch ({
                type: GET_TEST_CASE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch ({
                type: GET_TEST_CASE_FALE,
                payload: res.data
            })
        }
    } catch (err) {
        dispatch ({
            type: GET_TEST_CASE_FALE
        });
    }
}

export const get_case_by_suit = (suitId) => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`,
            'Content-Type':'application/json',
        }
    };

    try {
        const res = await axios.get(`https://127.0.0.1:8000/api/test-suit/suit/${suitId}`, config)
        if (res.status === 200) {
            dispatch ({
                type: GET_TEST_CASES_BY_SUIT_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch ({
                type: GET_TEST_CASES_BY_SUIT_FAIL,
                payload: res.data
            })
        }
    } catch (err) {
        dispatch ({
            type: GET_TEST_CASES_BY_SUIT_FAIL,
        })
    }
}

export const get_case_by_search = (search, testsuit_id) => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`,
            'Content-Type':'application/json',
        }
    };

    const body = JSON.stringify ({
        search, 
        testsuit_id
    });

    try {
        const res = await axios.post(`https://127.0.0.1:8000/api/test-case/search`, body, config);
        if (res.status === 200){
            dispatch ({
                type: SEARCH_CASES_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch ({
                type: SEARCH_CASES_FAIL,
                payload: res.data
            })
        }
    } catch (err) {
        dispatch ({
            type: SEARCH_CASES_FAIL
        })
    }
}