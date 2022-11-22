import { combineReducers } from "redux";
import Auth from "./auth";
import TestSuits from "./testsuits";
import Cases from "./testcases";

export default combineReducers({
    Auth,
    TestSuits,
    Cases,
});