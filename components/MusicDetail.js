import React from 'react';
import { Router, Route, Link, IndexRoute, History } from 'react-router'
import '../styles/musicDetail.css'


 var MusicDtail = React.createClass({
  
	render () { 
		var musicDetail = this.props.location.state
		var tagArr =  []
		var tracksArr = []
		var publisher = []
		var tagStr, pubdate, rate;
		var tracklist = []
		var trackStr = ""
		musicDetail.tags.forEach(function(tag,index){
				//console.info("name: "+tag.name )
				tagArr.push(tag.name)
			})
		
		tagStr = tagArr.join(", ")
		
		tracksArr = musicDetail.attrs.tracks
		if(tracksArr){
			//console.log(typeof tracksArr)
			if(tracksArr.length > 1){				
				tracksArr.forEach(function(track,index){
					tracklist.push(<li className='musicDetail_trackName'>{track}</li>)
				})
			}else{
				tracksArr.forEach(function(track,index){
					trackStr = trackStr.concat(track) 				
					console.info(track)
					})
				//console.info(trackStr)
				tracksArr = []
				tracksArr = trackStr.split("\n")
				if(tracksArr.length ==1){
					tracksArr = trackStr.split("\r")
				}
				if(tracksArr.length ==1){
					tracksArr = trackStr.split("/")
				}
				if(tracksArr.length ==1){
					tracksArr = trackStr.split(",")
				}
				//console.info(tracksArr.length)
				
				tracksArr.forEach(function(track,index){
					
					tracklist.push(<li className='musicDetail_trackName'>{track}</li>)
					console.info(track)
					})
			}	
		}	
		pubdate = musicDetail.attrs.pubdate
		publisher = musicDetail.attrs.publisher
		rate = musicDetail.rating.average
		return (
			<div className='main_section_musicDetail'>
			      
				  <div className='musicDetail_main'>
					
					<img className='detail_music_info_img' src={musicDetail.image}/>
					<div className='detail_book_info_title'>
						<h1>Title: </h1>
						<h3>{musicDetail.title}</h3>
					</div>	
				  </div>	
				  
				  	
				  <div className='musicDetail_tableTab'>Info</div>
				  <table className='musicDetail_trackInfo_table'>	  
		          { (tagStr ) &&
		          	<tr>
		          	<td>Tag:</td>
		          	<td>{tagStr}</td>                 	
                 	</tr>
	              ||
	              	<tr/>
	              }
	              
	              
	              { (pubdate ) &&                 	
                 	<tr>
		          	<td>Publish date:</td>
		          	<td>{pubdate}</td>                 	
                 	</tr>
	              ||
	              	<tr/>
	              }
				  
	              { (publisher ) &&                 	
                 	<tr>
		          	<td>Publisher:</td>
		          	<td>{publisher}</td>                 	
                 	</tr>
	              ||
	              	<tr/>
	              }
	              
	              { (rate ) &&                 	
                 	<tr>
		          	<td>Rating:</td>
		          	<td>{rate}</td>                 	
                 	</tr>
	              ||
	              	<tr/>
	              }
	              </table>	  
				  
	              { (tracksArr ) &&
                 	(
                 	<div className='musicDetail_trackList'>		                 	
	                 	<div>	
	                 		<div className='musicDetail_trackTab'>tracks:</div>
	                 		<div className='musicDetail_trackContent'>
		                 		<ul>
		                 			{tracklist}
		                 		</ul>
	                 		</div>
	                 	</div>	                 	
                 	</div>
                 	)
	              ||
	              	<span/>
	              }   
			</div>
		)
	} 
 });
 
export default MusicDtail;