import React from 'react'
import SearchBar from './SearchBar'
import 'bulma/css/bulma.min.css'

export default class App extends React.Component {
  state = {
    selectedVideo: null
  }

  onSearchSubmit = term => {
    console.log(term)
  }

  render () {
    return <div className='container' style={{ padding: '0 15px' }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
  }
}
