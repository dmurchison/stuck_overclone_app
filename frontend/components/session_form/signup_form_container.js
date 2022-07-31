import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup, login, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    link: <Link className='signup-form-login-button' to='/login'>Log in</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()) 
  };
};

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

export default SignupFormContainer;
