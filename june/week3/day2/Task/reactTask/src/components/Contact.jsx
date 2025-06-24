import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Contact.css'

export class Contact extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='Mcontact'>
        <div class="contact-container">
    <h2>CONTACT ME</h2>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
      </div>
    )
  }
}

export default Contact
