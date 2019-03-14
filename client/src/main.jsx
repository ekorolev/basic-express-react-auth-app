import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.jsx'

library.add(faFolder, fab)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)