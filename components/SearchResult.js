import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchMusic } from '../action'
import MusicList from '../components/MusicList'
import Pager from 'react-pager' ;


var show_page = 4;
function loadData(props, index, number) {  
  var keyword = props.location.search
  var keyword = keyword.replace("?",'')
  //console.info("tmp:" + keyword)
  props.searchMusic(keyword, index, number)
  
}

class SearchResult extends Component {
  constructor(props) {
    super(props)  
    this.state = { index: 0, number: 80 };
  }

  componentWillMount() {  
    loadData(this.props, this.state.index, this.state.number) 
  }

  
  
  componentWillReceiveProps(nextProps) {  	
    if (nextProps.location.search !== this.props.location.search) {
      loadData(nextProps, this.state.index, this.state.number)
    }

  }
  
  handlePaginatorChange(pageset) {
      console.log('now：%s', pageset)
      this.setState({index:pageset})

      loadData(this.props, pageset, this.state.number) 
      //console.log("my object: %o",this.state.music_arr);
      //console.info("state.current: "+this.state.current);
      /*
      this.setState({
                  music_arr:this.props.musics.data.musics.slice(start,end),
              });
      */
  }
  
  render() {
    const data  = this.props
    const page_total = Math.ceil(this.props.musics.data.total/this.state.number)
    console.info("page_total: " + page_total + " data_total: "+ this.props.musics.data.total + " number: "+ this.state.number)
    return (
      <div>
        <MusicList dataList={data}/>     
        <Pager total={page_total}
                       current={this.state.index} 
                       visiblePages={5}                      
                       onPageChanged={this.handlePaginatorChange.bind(this)}/>
      </div>
    )
  }
}

SearchResult.propTypes = {
  
}

function mapStateToProps(state) {
  return {
    keyword: state.keyword,
    musics: state.musics
  }
}

export default connect(mapStateToProps, {
  searchMusic,
})(SearchResult)