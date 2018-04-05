import { applyMiddleware, createStore, compose } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middleware = applyMiddleware(thunk)

export default createStore(rootReducer, composeWithDevTools(middleware))