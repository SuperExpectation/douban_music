import { RECEIVE_MUSIC_POSTS, RECEIVE_MUSIC_ERR } from '../constants/ActionTypes'



export default function musics(state = {
	isFetching:false,
	data:[]
}, action) {
  switch (action.type) {
    
    
    case RECEIVE_MUSIC_POSTS:   
       //console.info("im in RECEIVE_MUSIC_POSTS")        
       return Object.assign({}, state, {  
         isFetching:(action.posts.count >0),      
         data: action.posts,
       })
    case RECEIVE_MUSIC_ERR:   
       //console.info("im in RECEIVE_MUSIC_ERR")        
       return Object.assign({}, state, {  
         isFetching:false,       
         data: [],
       })

    default:
      return state;
  }
  
}
