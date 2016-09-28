import React from 'react';
import {Route} from 'react-router';
import App from '../containers/App';
import About from '../components/About'
import Contact from '../components/Contact'
import ReportError from '../components/ReportError'
import Jobs from '../components/Jobs'
import SearchResult from '../components/SearchResult'
import MusicDetail from '../components/MusicDetail'


export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="reportError" component={ReportError} />
    <Route path="jobs" component={Jobs} />
    <Route path="/result" component={SearchResult} />
    <Route path="/music_detail" component={MusicDetail} />
  </Route>
);
