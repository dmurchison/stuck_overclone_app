import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


// Customized Frontend Routes
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />  
    ) : ( 
      <Redirect to="/login" /> 
    )
  )} />
);

const Splash = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      null
    )
  )} />
);

const Home = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      null
    )
  )} />
);


// Checking session status
const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
);


// Export all of the routes
export const AuthRoute = connect(mapStateToProps)(Auth);
export const ProtectedRoute = connect(mapStateToProps)(Protected);
export const SplashRoute = connect(mapStateToProps)(Splash);
export const HomeRoute = connect(mapStateToProps)(Home);

