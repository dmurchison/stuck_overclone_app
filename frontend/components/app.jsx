// React
import React from 'react';
import { ReactDOM } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import HeaderContainer from './header/header_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import QuestionFormContainer from './questions/question_form_container';

import Footer from './stag/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


export const App = () => {
  return (
    <div className='main'>
      <HeaderContainer/>
        <Switch>
          <Route exact path='/' component={QuestionsIndexContainer} />
          <Route exact path='/questions' component={QuestionsIndexContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <ProtectedRoute exact path='/questions/new' component={QuestionFormContainer} />
        </Switch>
      <Footer />
    </div>
  )
}
