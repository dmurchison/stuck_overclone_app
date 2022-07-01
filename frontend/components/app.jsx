// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styling
import { Reset } from 'styled-reset';

// Components
import Footer from './footer/footer';
import QuestionsIndexContainer from './questions/questions_index_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import QuestionFormContainer from './questions/question_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


export const App = () => {
  return (
    <div className='main'>
      <Reset />
      <Switch>
        <Route exact path='/' component={QuestionsIndexContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <Route exact path='/questions' component={QuestionsIndexContainer} />
        {/* <ProtectedRoute path='/questions/new' component={QuestionFormContainer} /> */}
      </Switch>
      <Footer />
    </div>
  )
}
