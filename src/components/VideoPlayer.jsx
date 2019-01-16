import React from 'react'
import PropTypes from 'prop-types'

export default class VideoPlayer extends React.Component {
  render () {
    const videoId = this.props.video.id.videoId
    const { title, description, channelTitle } = this.props.video.snippet

    return <div className='column'>
      <div className='box'>
        <iframe
          src={'https://www.youtube.com/embed/' + videoId}
          style={{ width: '100%', height: '320px' }}
          title={videoId}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          frameBorder='0'
          allowFullScreen />
        <h1 className='is-size-4'><b>{title}</b></h1>
        <h5 className='is-size-6'><b>{channelTitle}</b></h5>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  }
}

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
}
