// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styling
import { Reset } from 'styled-reset';

// Components
import Footer from './stag/footer';
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
          <AuthRoute exact path='/' component={QuestionsIndexContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <ProtectedRoute exact path='/' component={QuestionsIndexContainer}/>
          <ProtectedRoute exact path='/questions/' component={QuestionsIndexContainer} />
          <ProtectedRoute path='/questions/new' component={QuestionFormContainer} />
        </Switch>
      <Footer />
    </div>
  )
}
