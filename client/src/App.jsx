import React from 'react'
import AppLayout from './layouts/appLayout.jsx'
import LoginPage from './pages/loginPage/index.jsx'
import AboutPage from './pages/aboutPage.jsx'
import ProfilePage from './pages/profilePage.jsx'
import PrivateRoute from './components/privateRoute.jsx'
import { HashRouter, Route } from 'react-router-dom'

class App extends React.Component {
 render() {
  return (
    <HashRouter>
      <AppLayout>
        <Route path="/about" component={AboutPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
      </AppLayout>
    </HashRouter>
  )
 }
}

export default App