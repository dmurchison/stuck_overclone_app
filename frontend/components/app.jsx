// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styling
import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';

// Components
import QuestionsIndexContainer from './questions/questions_index_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


export const App = () => {
  return (
    <div className='main'>
      <Reset />
      <Switch>
        <Route exact path='/' component={QuestionsIndexContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
      </Switch>
    </div>
  )
}
