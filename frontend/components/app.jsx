import React from 'react';
import { Route } from 'react-router-dom';

import signup_container from './session/signup_container';

export const App = () => {
  return (
    <div>
      <h1>Welcome to Stuck Overclone!</h1>
      <Route path="/signup" component={SignupContainer} />
    </div>
  )
}
