import React from 'react';

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
      <div className='lf-container'>
        <div className='demoLogin'>
          <button className='demoLogin-btn' onClick={this.handleDemo}>Log in with Demo User</button>
        </div>
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
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            {this.renderErrors()}
            <div className='lf-buttons'>
              <button className='login-form-login-button'>Log in</button>
            </div>
          </form>
        </div>
        <div className='lf-signup-link'>
          <p>Don't have an account? {this.props.link}</p>
        </div>
      </div>
    );
  }

}

export default LoginForm;

