import { CombinedState, combineReducers } from "redux";
import { demoReduxReducer } from "./demoRedux/reducer";

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer
})