import React from 'react';
import { Route } from 'react-router-dom';
import Greeting_container from './greeting/greeting_container';
import login_form_container from './session_form/login_form_container';

export const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Stuck Overclone!</h1>
        <Greeting_container />
      </header>

      <Route path='/login' component={login_form_container} />
    </div>
  )
}
