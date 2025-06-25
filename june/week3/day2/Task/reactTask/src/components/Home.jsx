import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Home.css'
export class Home extends Component {
  static propTypes = {

  }

  render() {
    return (
      <>
  
        <div className="home-container">
            <div className="home-content">
                    <div className="logo"></div>
                <h1>Nilamani Dhal</h1>
                <h3>WEB DEVLOPER</h3>
                <p>I'm a web developer skilled in HTML, CSS, JavaScript, and React.
Pursuing B.Tech in CSE with a focus on building responsive, user-friendly apps.
Passionate about solving real-world problems through clean, efficient code</p>
                <div className='cont'>CONTACT ME</div>
            </div>
        </div>

      <hr />
      </>
    )
  }
}

export default Home
