import {combineReducers} from 'redux'
import users from './userReducer.js'
import example from './exampleReducer'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({users, example, router})

export default rootReducer
