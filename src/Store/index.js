import {createStore} from 'redux'
import { rootReducer } from './rootReducer'


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// redux cũ => 
// redux toolkit => mới => học sau khi học xong cái cũ 