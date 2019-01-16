import React from 'react'
import PropTypes from 'prop-types'
import VideoCard from './VideoCard'

export default class VideoList extends React.Component {
  render () {
    const searchResults = this.props.videos.map(video => {
      return <div onClick={e => console.log(video.id.videoId)} key={video.id.videoId}>
        <VideoCard
          video={video} />
      </div>
    })
    return <div className='box column is-4' style={{ marginBottom: '30px' }}>
      <h3 className='has-text-centered'><b>Search Results</b></h3>
      {searchResults}
    </div>
  }
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
}
