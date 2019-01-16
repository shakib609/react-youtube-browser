import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtubeApi from '../apis/youtube'
import 'bulma/css/bulma.min.css'

export default class App extends React.Component {
  state = {
    selectedVideo: null,
    videos: []
  }

  onSearchSubmit = async term => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    console.log(this.state.videos)
  }

  render () {
    const videoCount = this.state.videos.length

    return <div className='container' style={{ padding: '0 15px' }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <div className='row' style={{ display: videoCount > 0 ? 'block' : 'none' }}>
        <VideoList videos={this.state.videos} />
      </div>
    </div>
  }
}
