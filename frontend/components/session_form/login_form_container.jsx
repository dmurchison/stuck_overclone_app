import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login, removeSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.login,
    formType: 'login',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch (login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  });
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
