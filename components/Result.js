import React from 'react';
import { Router, Route, Link, IndexRoute, History } from 'react-router'
import MusicList from './MusicList';
var Pager = require( 'react-pager' );


 var show_page = 4;

 function searchToObject(search) {
    var pairs = search.substring(1).split("&"),
        obj = {}, pair;

    for (var i in pairs) {
        if (pairs[i] === "") continue;
        pair = pairs[i].split("=");
        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return obj;
 }

 var Result = React.createClass({
 	getInitialState: function() {
        return {
            state_data: this.props.location.state.state,
            book_arr:this.props.location.state.state.books.slice(0,show_page),
            total_page: (this.props.location.state.state.books.length/show_page),
            current: 0,
        };
    },
    
    handlePaginatorChange(pageset) {
        console.log('now：%s', pageset);
        var start = pageset*show_page;
        var end = start + show_page;
        this.state.book_arr = this.props.location.state.state.books.slice(start,end);
        this.state.current = pageset;
        console.log("my object: %o",this.state.book_arr);
        console.info("state.current: "+this.state.current);
        this.setState({
                    book_arr:this.props.location.state.state.books.slice(start,end),
                });
    },

	render () { 
		return (
			<div>
			<h3>This is Result page:</h3>   			
            <MusicList data={this.state.book_arr}/>
            <Pager total={this.state.total_page}
                       current={this.state.current}
                       visiblePages={5}
                       onPageChanged={this.handlePaginatorChange}/>
			</div>
		)
	} 
 });
 
export default Result;