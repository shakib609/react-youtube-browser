import React from 'react'
import PropTypes from 'prop-types'

export default class VideoPlayer extends React.Component {
  render () {
    return <div className='column'>
      <div className='box'>
        <iframe
          src={'https://www.youtube.com/embed/' + this.props.videoId}
          style={{ width: '100%', height: '320px' }}
          title={this.props.videoId}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          frameBorder='0'
          allowFullScreen />
      </div>
    </div>
  }
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired
}
