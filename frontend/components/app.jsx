// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styling
import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';

// Components
import Header from './header';
import QuestionsPage from './questions/questions_page';
import NewQuestionPage from './questions/new_question_page';

import Greeting_container from './greeting/greeting_container';
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';
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
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={QuestionsPage} />
        <AuthRoute path='/signup' component={signup_form_container} />
        <AuthRoute path='/login' component={login_form_container} />
        <ProtectedRoute path='/ask' component={NewQuestionPage} />
      </Switch>
    </div>
  )
}
