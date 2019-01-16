import React from 'react'
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import youtubeApi from '../apis/youtube'
// Bulma CSS
import 'bulma/css/bulma.min.css'

export default class App extends React.Component {
  state = {
    selectedVideoId: '',
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
      selectedVideoId: response.data.items[0].id.videoId
    })
  }

  render () {
    const videoCount = this.state.videos.length

    return <div className='container'>
      <div className='column'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className='columns' style={{ display: videoCount > 0 ? 'flex' : 'none' }}>
          <VideoList videos={this.state.videos} />
          <VideoPlayer videoId={this.state.selectedVideoId} />
        </div>
      </div>
    </div>
  }
}
