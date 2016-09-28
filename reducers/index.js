import { combineReducers } from 'redux'
import searchBar from './searchBar'
import musics from './musics'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  searchBar,
  routing,
  musics
})

export default rootReducer
