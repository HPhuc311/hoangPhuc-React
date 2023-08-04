import {createStore} from 'redux'
import { rootReducer } from './rootReducer'
import {configureStore} from '@reduxjs/toolkit'

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


// Redux mới
export const store = configureStore({
    reducer: rootReducer,
    devTools: true, //extension redux dev tool
})

// redux cũ => 
// redux toolkit => mới => học sau khi học xong cái cũ 