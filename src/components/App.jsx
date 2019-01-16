import React from 'react'
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import youtubeApi from '../apis/youtube'
// Bulma CSS
import 'bulma/css/bulma.min.css'

export default class App extends React.Component {
  state = {
    selectedVideoId: {},
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
      selectedVideoId: response.data.items[0]
    })
  }

  render () {
    const videoCount = this.state.videos.length

    return <div className='container'>
      <div className='column'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {
          videoCount > 0 &&
          <div className='columns'>
            <VideoList videos={this.state.videos} />
            <VideoPlayer video={this.state.selectedVideoId} />
          </div>
        }
      </div>
    </div>
  }
}
