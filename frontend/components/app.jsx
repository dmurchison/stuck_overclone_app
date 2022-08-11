// React
import React from 'react';
import { ReactDOM } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Containers
import { HeaderContainer } from './nav/header_container';
import { SignupFormContainer } from './session_form/signup_form_container';
import { LoginFormContainer } from './session_form/login_form_container';
import { QuestionFormContainer } from './question/question_form_container';
import { ProfilePageContainer } from './home/profile_page_container';
import { QuestionShowContainer } from './question/question_show_container';
import { QuestionsIndexContainer } from './question/questions_index_container';

// Components
import { SplashPage } from './home/splash_page';
import { Footer } from './nav/footer';

import { AuthRoute, ProtectedRoute, SplashRoute, HomeRoute } from '../util/route_util';


export const App = () => {

  return (
    <>
      <HeaderContainer />
        <Switch>
          <SplashRoute exact path='/' component={SplashPage} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
        <Switch>
          <HomeRoute exact path='/' component={QuestionsIndexContainer} />
          <ProtectedRoute exact path='/questions/new' component={QuestionFormContainer} />
          <ProtectedRoute exact path='/users/:id' component={ProfilePageContainer} />
          <ProtectedRoute exact path='/questions/:id' component={QuestionShowContainer} />
        </Switch>
      <Footer />
    </>
  );

}
