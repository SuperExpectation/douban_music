import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'
import $ from 'jquery';

export function searchMusic(keyword, index, count) {
  return dispatch => {                 
    //console.info("action keyword:" + keyword)
    var myurl = "https://api.douban.com/v2/music/search?q=keyword&count=number&start=index";
    $.ajax({
      
      url:myurl.replace("keyword",keyword).replace("index",index).replace("number",count),     
      dataType: 'jsonp',
      type: 'GET',
 
      success: function(data) {
        //alert(username);
        //console.debug(data);
        //console.debug(data);
        //console.info("search:"+ data.musics[2].id);
        //this.setState({data: data});
        dispatch(receivePosts(keyword, data))
        
      }.bind(this),
      error: function(xhr, status, err) {
        return {
          type: types.RECEIVE_MUSIC_ERR,
        }
        console.error(this.props.myurl, status, err.toString());
      }.bind(this)
    }) 
  }


/*
  return dispatch => {
    dispatch(requestPosts(keyword))
    return fetch(`https://api.douban.com/v2/book/search?q=${keyword}`)
      .then(response => response.jsonp())
      .then(jsonp => dispatch(receivePosts(keyword, jsonp)))
  }
*/    
  
}

function requestPosts(keyword) {
  return {
    type: types.REQUEST_POSTS,
    keyword
  }
}

function receivePosts(keyword, data) {
  //console.info("receivePosts" + data.musics[5].title);
  return {
    type: types.RECEIVE_MUSIC_POSTS,
    keyword,
    posts: data,  
  }
}


