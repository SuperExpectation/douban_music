import React from 'react';
import { Router, Route, Link, IndexRoute, History } from 'react-router'
import '../styles/musicItem.css'

 var MusicItem = React.createClass({
  propTypes:{
	  music: React.PropTypes.object.isRequired,
  },
  
  getDefaultProps:function(){
      return {
        music: {},
      }
  },
 	componentWillMount(){
 		
		/*
 		console.info("item param  pic_src: "+ this.props.music.image);
 		console.info("item param  title: "+ this.props.music.title);
		console.info("item param  subtitle: "+ this.props.music.subtitle);
		console.info("item param  author: "+ this.props.music.author);
		console.info("item param  pubisher: "+ this.props.music.pubisher);
		console.info("item param  price: "+ this.props.music.price);
		
		*/
 	},

 	
	render () { 
		var classMusicitem = "main_section_musicitem" + " " +this.props.css
		return (
			<div className= {classMusicitem}>
				<Link to={ {pathname:"music_detail",state:this.props.music} } className='main-section__music-info clearfix'>

				  <div className='main_section_music'>
					
					<img className='main_section_music_info_img' src={this.props.music.image}/>

				  </div>	
				  <div className='main_section_music_info_title'>{this.props.music.title}</div>			  
				</Link>        
			</div>
		)
	} 
 });
 
export default MusicItem;