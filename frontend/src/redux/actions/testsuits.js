import axios from 'axios';
import {
    GET_TESTSUITS_SUCCESS,
    GET_TESTSUITS_FAIL
} from './types';

export const get_testsuits = () => async dispatch => {
    const config = {
        headers: {
            'Accept':'application/json',
            'Authorization':`JWT ${localStorage.getItem('access')}`,
            'Content-Type':'application/json',
        }
    };

    try{
        const res  = await axios.get(`http://127.0.0.1:8000/api/test-suit/suits`, config);
        if (res.status === 200){
            dispatch({
                type: GET_TESTSUITS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_TESTSUITS_FAIL,
            })
        }
    } catch(err){
        dispatch({
            type: GET_TESTSUITS_FAIL,
            payload: err.response.data
        })
    }
}