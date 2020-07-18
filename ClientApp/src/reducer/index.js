import { combineReducers } from 'redux'
import {userdetail} from './userdetail' 
//index page used so that you dont have to manually call all reducers made
const reducers = combineReducers({
    userdetail
})

export default reducers 