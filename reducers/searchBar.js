import { SEARCH_MUSIC, REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionTypes'


export default function searchBar(state = {
  fetchSuccess: false, 	
  items: []
}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts,
        fetchSuccess: true,
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
	    fetchSuccess: false,
    })
    default:
      return state
  }
}

