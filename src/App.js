import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import LandingScreen from './pages/landing'
import ProfileSetupOfferer from './pages/profileSetupOfferer'
import ProfileSetupSeeker from './pages/profileSetupSeeker'
import Register from './pages/register'
import Chat from './pages/chat'
import ConfirmationScreen from './pages/confirmation'
import RoleSelection from './pages/roleSelection'
import Schedule from './pages/schedule'
import SearchScreen from './pages/search'
import Login from './pages/login'
import store from './stores/authStore'
import FlatDetails from './pages/flatDetails'
import MyFlat from './pages/myFlat'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { hasToken } = store()
    return (
      <BrowserRouter>
        <Route exact path="/" render={props => <LandingScreen {...props} />} />
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route
          exact
          path="/confirmation/:token"
          render={props => <ConfirmationScreen {...props} />}
        />
        <ProtectedRoute
          exact
          path="/chat"
          Comp={Chat}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/chat/:id"
          Comp={Chat}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/setupofferer"
          Comp={ProfileSetupOfferer}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/setupseeker"
          Comp={ProfileSetupSeeker}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/roleselection"
          Comp={RoleSelection}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/my-flat"
          Comp={MyFlat}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/flat/:id"
          Comp={FlatDetails}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/search"
          Comp={SearchScreen}
          isAuth={() => hasToken()}
        />
        <ProtectedRoute
          exact
          path="/flat"
          Comp={FlatDetails}
          isAuth={() => hasToken()}
        />

        <ProtectedRoute
          exact
          path="/schedule/:id"
          Comp={Schedule}
          isAuth={hasToken()}
        />
      </BrowserRouter>
    )
  }
}

const ProtectedRoute = ({ isAuth, Comp, ...others }) => (
  <Route
    {...others}
    render={props =>
      isAuth() ? <Comp {...props} /> : <Redirect to="/login" />
    }
  />
)
