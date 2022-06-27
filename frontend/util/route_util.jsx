import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, LoggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !LoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
);

const Protected = ({ component: Component, path, LoggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !LoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/login' />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
