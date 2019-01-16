import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import App from './components/App'

dotenv.config({
  path: '../.env.local'
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
