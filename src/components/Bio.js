import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        {/* <img
          src={profilePic}
          alt={`Michelle Wong swaggy swag`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(10),
            height: rhythm(10),
          }}
        /> */}
        <p>
          Written by <strong>Michelle Wong, a human burrito,</strong> who lives in Northampton, MA during the school year and good ol' SF in the summers..{' '}
          <a href="https://twitter.com/michellebunches">
            Twitta
          </a>
          <br></br>
          <a href="https://www.instagram.com/michelluritoo/">
          Insta
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
