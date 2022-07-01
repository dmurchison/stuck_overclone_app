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
      <div className='login-form-container'>
        <HeaderContainer />
        <div className='login-form'>
          <form onSubmit={this.handleSubmit}>
            <label>Email:
              <br />
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
            <br />
            <label>Password
              <br />
              <input 
                type="text"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            {this.renderErrors()}
            <div className='login-form-buttons'>
              <button className='login-form-login-button'>Log in</button>
            </div>
          </form>
        </div>
        <div className='login-form-signup-link'>
          <p>Please {this.props.link} if you don't have an account!</p>
        </div>
      </div>
    )
  }

}

export default LoginForm;

