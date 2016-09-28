import React, { PropTypes, Component } from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router'
import '../styles/head.css'


class HeadNav extends Component {
  handleClick(keyword) {
    if (keyword.length !== 0) {           
      this.props.searchMusic(keyword);
      //this.props.addBlogAsync(text,pic,id);
    }
  }

  render() {
    return (
      <div className="Music_Head_Nav"> 
          <div className="Head_Nav_Image">
            <Link to="/"><img src="./image/musicIcon.jpg" /></Link>
          </div>
                   
          <SearchBar className="Head_Nav_SearchBar" onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

HeadNav.propTypes = {
  searchMusic: PropTypes.func.isRequired
  //addBlogAsync: PropTypes.func.isRequired
}

export default HeadNav
