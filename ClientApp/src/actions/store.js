import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from "../reducer";

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)//,// if you have redux dev tools you can use the bottom tool
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store