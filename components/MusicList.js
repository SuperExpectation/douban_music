import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, IndexRoute, History } from 'react-router'
import MusicItem from '../components/MusicItem'


 //var MusicList = React.createClass({
 class MusicList extends Component {   
 	
	render () { 
		var musicItem = [];		
		var musicArr = []
		const isEmpty = (this.props.dataList.musics.data.count === 0 || this.props.dataList.musics.data.musics ===undefined)
		//console.info("length:" +this.props.dataList.total)

		if(!isEmpty){
			musicArr = this.props.dataList.musics.data.musics
			//console.info("child param  state: "+ musicArr[0].id)
			this.props.dataList.musics.data.musics.forEach(function(musicObj,index){
				//console.info(index)
				var css = ""
				
				if(index % 4 == 0){
					css = "main_section_musicitem_first"
				}
				if(index %4 == 3){
					css = "main_section_musicitem_last"
				}
				musicItem.push(
					
					
						<MusicItem key={index} music={musicObj} css={css}/>	
					
					
				)
			})
		}

		return (
			<div className='main-section_music'>
				{isEmpty
		          ?  <h2>Empty.</h2> 
		          : <div >
		              {musicItem}
		            </div>
			    }
				
			</div>
		)
	} 
 }

export default MusicList;
