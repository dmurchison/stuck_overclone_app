// React
import React from 'react';
import { ReactDOM } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import HeaderContainer from './nav/header_container';
import QuestionsIndexContainer from './question/questions_index_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import QuestionFormContainer from './question/question_form_container';

// Components
import SplashPage from './home/splash_page';
import Footer from './nav/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


export const App = () => {
  return (
    <div className='main'>
      <HeaderContainer/>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/questions' component={QuestionsIndexContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <ProtectedRoute exact path='/questions/new' component={QuestionFormContainer} />
        </Switch>
      <Footer />
    </div>
  )
}
