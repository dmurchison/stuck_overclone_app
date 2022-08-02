import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login, removeSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Log in",
    link: <Link to="/signup">Sign up</Link>
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch (login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
  };
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
