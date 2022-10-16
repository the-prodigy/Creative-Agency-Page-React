import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>test - Creative Agency Page</title>
        <meta property="og:title" content="test - Creative Agency Page" />
      </Helmet>
    </div>
  )
}

export default Test
