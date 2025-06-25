import React, { Component } from 'react'
import './Service.css'

export class Service extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
          <div className="service-container">
            <p>SERVICES</p>
            <div className="service-content">
            <div class="content">
    <h2>Frontend Design</h2>
    <p>Modern, responsive, and pixel-perfect interfaces using HTML, CSS, JS & React.</p>
  </div>
  <div class="content">
    <h2>Backend Development</h2>
    <p>Robust server-side logic with Node.js, Express & secure APIs.</p>
  </div>
  <div class="content">
    <h2>UI/UX Optimization</h2>
    <p>Creating user-friendly designs that are fast, clean, and intuitive.</p>
  </div>
            </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Service
