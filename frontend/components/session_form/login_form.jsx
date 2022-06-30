import React from 'react';
import HeaderContainer from '../header/header_container';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleInput(type) {
    return(e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.processForm({ email: "demouser@email.com", password: "123456" })
  }

  renderErrors() {
    return (
      <div className='session-errors'>
        {this.props.errors.map( (error, i) => (
          <div key={`error-${i}`}>{error}</div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className='login-page'>
        <HeaderContainer />
        <div className='login-page-container'>

        </div>
      </div>
    )
  }

}

export default LoginForm;

