import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => (
  <ul>
    {posts.map(({title}, i) =>
      <li key={i}>{title}</li>
    )}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
