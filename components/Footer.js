import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class Footer extends Component {
  

  render() {
    return (
      <div className="Footer_Nav">          
          <ul className="Footer_Content">
            <li><Link to="/About">About me</Link></li>
            <li><Link to="/Contact">Concat us</Link></li>
            <li><Link to="/ReportError">{"What's wrong with this page?"}</Link></li>
            <li><Link to="/Jobs">Jobs</Link></li>
          </ul>
      </div>
    )
  }
}

Footer.propTypes = {
 
}

export default Footer
