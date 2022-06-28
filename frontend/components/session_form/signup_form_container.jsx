import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup, login, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.login,
    formType: 'signup',
    navLink: <div>Already have an account? <Link to='/login'>Log in</Link></div>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (demo) => dispatch(login(demo)),
    removeSessionErrors: () => dispatch(removeSessionErrors()) 
  };
};

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);

export default SignupFormContainer
