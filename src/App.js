import React from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import LandingScreen from './pages/landing'
import ProfileSetupOfferer from './pages/profileSetupOfferer'
import ProfileSetupSeeker from './pages/profileSetupSeeker'
import Register from './pages/register'
import Chat from './pages/chat';
import ConfirmationScreen from './pages/confirmation'
import RoleSelection from './pages/roleSelection'
import SearchScreen from './pages/search'
import Login from './pages/login'
import store from './stores/authStore'
import FlatDetails from './pages/flatDetails';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {hasToken} = store();
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingScreen}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/chat" component={Chat}/>
        <Route
          exact
          path="/confirmation/:token"
          component={ConfirmationScreen}
        />
        <ProtectedRoute
          exact
          path="/setupofferer"
          Comp={ProfileSetupOfferer}
          isAuth={hasToken()}
        />
        <ProtectedRoute
          exact
          path="/setupseeker"
          Comp={ProfileSetupSeeker}
          isAuth={hasToken()}
        />
        <ProtectedRoute
          exact
          path="/roleselection"
          Comp={RoleSelection}
          isAuth={hasToken()}
        />
        <ProtectedRoute
          exact
          path="/flat"
          component={FlatDetails}
          isAuth={hasToken()}
        />
        <ProtectedRoute
          exact
          path="/search"
          Comp={SearchScreen}
          isAuth={hasToken()}
        />
      </BrowserRouter>
    )
  }
}

const ProtectedRoute = ({isAuth, Comp, ...others}) => (
  <Route
    {...others}
    render={props => (isAuth ? <Comp {...props} /> : <Redirect to="/login"/>)}
  />
);
