import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return(e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = Object.assign({}, this.state);
    this.props.login(user)
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: "demouser@email.com",
      password: "123456"
    };
    this.props.login(demoUser);
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
      <div className='login-page-container'>
        <Link className="lf-logo" to="/">
          <img className='lf-icon' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"/>
        </Link>
        <div className='demoLogin'>
          <button className='demoLogin-btn' onClick={this.handleDemo}>Log in with Demo User</button>
        </div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <label>Email</label>
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          <label>Password</label>
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          {this.renderErrors()}
          <div className='lf-buttons'>
            <button className='login-form-login-button' type='submit'>Log in</button>
          </div>
        </form>
        <div className='lf-signup-link'>
          <p>Don't have an account? {this.props.link}</p>
        </div>
      </div>
    );
  }

}

export default LoginForm;

