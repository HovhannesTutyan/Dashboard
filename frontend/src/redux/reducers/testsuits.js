import { 
    GET_TESTSUITS_SUCCESS, 
    GET_TESTSUITS_FAIL 
} from "../actions/types";

const initialState = {
    TestSuits: null
};

export default function TestSuits(state=initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_TESTSUITS_SUCCESS:
            return {
                ...state,
                TestSuits: payload.TestSuits
            }
        case GET_TESTSUITS_FAIL:
            return {
                ...state,
                TestSuits: null
            }
        default:
            return state;
    }
}