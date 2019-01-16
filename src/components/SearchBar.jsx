import React from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onFormSubmit = event => {
    event.preventDefault()
    const { term } = this.state
    if (term.length === 0) {
      return null
    }
    this.props.onSubmit(term)
  }

  render () {
    return <div className='box' style={{ marginTop: '30px' }}>
      <form onSubmit={this.onFormSubmit}>
        <label className='label'>Search Video</label>
        <input
          className='input'
          type='text'
          placeholder='Search Youtube Videos'
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })} />
      </form>
    </div>
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
