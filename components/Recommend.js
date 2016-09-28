import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import RecommendItem from '../components/RecommendItem'
import '../styles/recommend.css'


class Recommend extends Component {
  render() {
    return (
      <div className="recommend">          
          <section className="recommend_content">
          <b>Recommend</b>
          <RecommendItem/>
          </section>
      </div>
    )
  }
}

Recommend.propTypes = {
 
}

export default Recommend
