import { SEARCH_MUSIC } from '../constants/ActionTypes'


const initialState = {
	keyword:" ",
}

export default function searchBar(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MUSIC:       
      return 
          keyword: action.keyword                  
     
  	default:
      return state	
  }
}
