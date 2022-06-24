import React from 'react';
import { Route } from 'react-router-dom';
import Greeting_container from './greeting/greeting_container';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Stuck Overclone!</h1>
        <Greeting_container />
      </header>

      <AuthRoute exact path='/signup' component={signup_form_container} />
      <AuthRoute exact path='/login' component={login_form_container} />
    </div>
  )
}
