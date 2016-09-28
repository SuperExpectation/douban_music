import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HeadNav from '../components/HeadNav'
import Footer from '../components/Footer'
import CarouselCom from '../components/CarouselCom'
import Recommend from '../components/Recommend'
import * as Actions from '../action'
import { browserHistory, Link } from 'react-router'
import '../styles/searchbar.css'
import '../styles/footer.css'
import '../styles/center.css'
import '../styles/font-awesome.css'

class App extends Component {
  handleSearch(nextValue) {
    //console.info("search_content = " + nextValue);
    //browserHistory.push(`/${nextValue}`)
    browserHistory.push(
          {
            pathname: "/result",
            search:"?"+nextValue,            
          }
      )
  }
  render() {
    const { searchBar, actions, children } = this.props    
    return ( 
    <div className="wrapper">     
      <div className="header">
      <HeadNav searchMusic={this.handleSearch} /> 
      </div>
      <div>
      
      </div>
      <div className="main_content">       
        { children
              ? children
              :        
              <div>
                <div className="Music_Type_Nav">          
                  <ul className="Music_Type_Content">                    
                    <li><a href="https://music.douban.com/artists/genre_page/6/">Pop</a>
                        <img className="Music_Type_Img" src="../image/carousel/ljrIcon.jpg" />
                        <div className='Music_Type_Singer_Mask'><i className="fa fa-play-circle-o fa-lg"></i><p>梁静茹</p></div>
                    </li>
                    <li><a href="https://music.douban.com/artists/genre_page/8/">Rock</a>
                        <img className="Music_Type_Img" src="../image/carousel/KellyClarksonIcon.jpg" />
                        <div className='Music_Type_Singer_Mask'><i className="fa fa-play-circle-o fa-lg"></i><p>KellyClarkson</p></div>
                    </li>
                    <li><a href="https://music.douban.com/artists/genre_page/3/">Electronic</a>
                        <img className="Music_Type_Img" src="../image/carousel/RihannaIcon.jpg" />
                        <div className='Music_Type_Singer_Mask'><i className="fa fa-play-circle-o fa-lg"></i><p>Rihanna</p></div>
                    </li>
                    <li><a href="https://music.douban.com/artists/genre_page/7/">RAP</a>
                        <img className="Music_Type_Img" src="../image/carousel/jay-zIcon.jpg" />
                        <div className='Music_Type_Singer_Mask'><i className="fa fa-play-circle-o fa-lg"></i><p>Jay-z</p></div>
                    </li>
                    <li><a href="https://music.douban.com/artists/genre_page/4/">Ballad</a>
                        <img className="Music_Type_Img" src="../image/carousel/lijianIcon.jpg" />
                        <div className='Music_Type_Singer_Mask'><i className="fa fa-play-circle-o fa-lg"></i><p>李健</p></div>
                    </li>
                  </ul>
                </div>          
                <div className="main_carousel">
                  <CarouselCom/>
                </div>
                <div className="main_recommend">
                <Recommend/>
                </div>
              </div> 
        } 
        
      </div>
      <div className="footer">
      <Footer/>
      </div>
    </div>  
    )
  }
}


App.propTypes = {
  searchBar: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.node,
  musics: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    searchBar: state.searchBar,
    musics: state.musics
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
