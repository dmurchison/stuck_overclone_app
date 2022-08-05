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

// Components
import { SplashPage } from './home/splash_page';
import { QuestionsIndex } from './question/questions_index';
import { Footer } from './nav/footer';

import { AuthRoute, ProtectedRoute, SplashRoute, HomeRoute } from '../util/route_util';


export const App = () => {

  return (
    <>
      <HeaderContainer/>
        <Switch>
          <SplashRoute exact path='/' component={SplashPage} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
        <Switch>
          <HomeRoute exact path='/' component={QuestionsIndex} />
          <ProtectedRoute exact path='/questions/new' component={QuestionFormContainer} />
          <ProtectedRoute exact path='/users/:id' component={ProfilePageContainer} />
        </Switch>
      <Footer />
    </>
  );

}
