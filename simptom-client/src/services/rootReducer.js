import {combineReducers} from 'redux'
import userReducer from './Users/reducer'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer