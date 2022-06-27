// Libraries
import React from 'react';
import { Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';

// Components
import Header from './header';
import QuestionsPage from './questions/questions_page';
import QuestionRow from './questions/question_row';
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
      <QuestionsPage />
      <AuthRoute exact path='/signup' component={signup_form_container} />
      <AuthRoute exact path='/login' component={login_form_container} />
    </div>
  )
}
