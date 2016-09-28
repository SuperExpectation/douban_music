import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
import App from './containers/App'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import './index.css'
import Root from './components/Root'
import './node_modules/bootstrap/dist/css/bootstrap.css';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
