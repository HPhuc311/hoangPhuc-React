import { DECREASE_NUMBER, INCREASER_NUMBER } from "../../DemoRedux/actionType";

const initialState = {
    number: 100,
    age: 18,
    generate: "Nam"
}

export const demoReduxReducer = (state = initialState, action) => {
    // console.log("action", action);
    switch(action.type){
        case INCREASER_NUMBER:{
            state.number += action.payload
            return  {...state}
        }
        case DECREASE_NUMBER:{
            state.number += action.payload
            return {...state}
        }
        default:
            return state
    }
}