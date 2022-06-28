// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styling
import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';

// Components
import Header from './header';
import QuestionsIndex from './questions/questions_index';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Roboto:wght@300;700&display=swap');
  body{
    background: #2d2d2d;
    color: #fff;
    font-family: Roboto, sans-serif;
  }
`;



export const App = () => {
  return (
    <div className=''>
      <Reset />
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={QuestionsIndex} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
      </Switch>
    </div>
  )
}
