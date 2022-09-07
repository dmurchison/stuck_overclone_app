import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, removeSessionErrors } from "../../actions/session_actions";


const mapStateToProps = ({ errors }) => {
  // debugger
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

export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
