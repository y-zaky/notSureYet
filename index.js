import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import throttle from 'lodash/throttle'

import store from './store'
import {loadState, saveState} from './localstorage'

store.subscribe(throttle( () => {
  saveState(store.getState()) 
},1000))

// main app
import App from './containers/App'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))

