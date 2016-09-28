import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, History } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { DropdownButton, MenuItem,Button, Dropdown  } from 'react-bootstrap'


class SearchBar extends Component {
	constructor(props, context) {
		super(props, context);
	}



	handleSearchClick(){
    var search_content = this.refs.search_content.value.trim();  
    this.props.onClick(search_content);
  }

    render() {
	    return (
	      <div className="head_search">            
            <input className="seach_field" type="text" placeholder="Search Music, Singer" ref="search_content" />
            <button className="search_btn" onClick={this.handleSearchClick.bind(this)} type="button"><img src="./image/button/search_button.png" /></button>
        </div>
	    )
  }

}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,  
}

export default SearchBar