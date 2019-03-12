import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.scss'
import LoginPage from './pages/loginPage/index.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faFolder, fab)

const element = (
  <LoginPage />
)

ReactDOM.render(
  element,
  document.getElementById('root')
)