import React from 'react'
import PropTypes from 'prop-types'

export default class VideoCard extends React.Component {
  render () {
    const { snippet } = this.props.video
    const thumbnailUrl = snippet.thumbnails.medium.url
    const { title, description, channelTitle } = snippet

    return <div className='row'>
      <div className='column is-12' style={{ paddingBottom: 0 }}>
        <img src={thumbnailUrl} alt={description} />
      </div>
      <div className='column is-12' style={{ paddingTop: 0, paddingBottom: 0 }}>
        <h6><b>{title}</b></h6>
        <p>{channelTitle}</p>
      </div>
    </div>
  }
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired
}
