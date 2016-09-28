import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class RecommendItem extends Component {
  

  render() {
    return (
      <div className="recommendItem">          
            <a href="https://music.douban.com/subject/26433399/" >
			  <div className='recommend_music'>
				<i className="fa fa-play-circle-o fa-lg"></i>
				<p className='recommend_music_title'>还是要幸福  -田馥甄</p>
				<p className='recommend_music_content'>如果过去和今天都是未来的垫脚石,为了不让未来成为继续摇晃的过去,还是要把今天过得更幸福</p>
			  </div>	
			  
			</a> 
			<a href="https://music.douban.com/subject/26316328/">
			  <div className='recommend_music'>
				<i className="fa fa-play-circle-o fa-lg"></i>
				<p className='recommend_music_title'>Fight Song  -Rachel Platten</p>
				<p className='recommend_music_content'>Motivates</p>
			  </div>				  
			</a>   
			<a href="https://music.douban.com/subject/10571644/" >
			  <div className='recommend_music'>
				<i className="fa fa-play-circle-o fa-lg"></i>
				<p className='recommend_music_title'>忽然之间  -莫文蔚</p>
				<p className='recommend_music_content'>想你是安慰还是悲哀</p>
			  </div>				  
			</a>  
			<a href="https://music.douban.com/subject/11580293/">
			  <div className='recommend_music'>
				<i className="fa fa-play-circle-o fa-lg"></i>
				<p className='recommend_music_title'>My Love  -田馥甄</p>
				<p className='recommend_music_content'>一分钟都不想将就</p>
			  </div>				  
			</a>    
			<a href="https://music.douban.com/subject/5385619/" >
			  <div className='recommend_music'>
				<i className="fa fa-play-circle-o fa-lg"></i>
				<p className='recommend_music_title'>情歌没有告诉你  -梁静茹</p>
				<p className='recommend_music_content'>非常非常的治愈</p>
			  </div>				  
			</a>     
      </div>
    )
  }
}

RecommendItem.propTypes = {
 
}

export default RecommendItem
