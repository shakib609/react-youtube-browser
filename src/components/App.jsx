import React from 'react'
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import youtubeApi from '../apis/youtube'
// Bulma CSS
import 'bulma/css/bulma.min.css'

export default class App extends React.Component {
  state = {
    selectedVideo: {},
    videos: []
  }

  onSearchSubmit = async term => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoClick = video => {
    this.setState({ selectedVideo: video })
  }

  render () {
    const videoCount = this.state.videos.length

    return <div className='container'>
      <div className='column'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {
          videoCount > 0 &&
          <div className='columns'>
            <VideoPlayer video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos}
              onClick={this.onVideoClick} />
          </div>
        }
      </div>
    </div>
  }
}
