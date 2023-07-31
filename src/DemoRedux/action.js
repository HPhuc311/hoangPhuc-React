import { DECREASE_NUMBER, INCREASER_NUMBER } from "./actionType"

export const demoReduxActions = {
    increaseNumber: (payload) => {
        return {
            type: INCREASER_NUMBER,
            payload,
        }
    },

    decreaseNumber: (payload) => {
        return {
            type: DECREASE_NUMBER,
            payload,
        }
    }
}

demoReduxActions.increaseNumber()

