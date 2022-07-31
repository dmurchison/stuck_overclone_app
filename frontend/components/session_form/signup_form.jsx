import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
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
      <div className='sf-container'>

        <div className='sf-left'>

          <h1 className='sf-header'>Join the Stuck Overclone community</h1>

          <div className='sf-promo'>
            <img className='sf-logo' src="https://img.icons8.com/fluency/40/000000/ask-question.png"/>
            <div className='sf-left-text'>
              <p>Get unstuck --- ask a question</p>
            </div>
          </div>

          <div className='sf-promo'>
            <img className='sf-logo' src="https://img.icons8.com/office/40/000000/sort.png"/>
            <div className='sf-left-text'>
              <p>Unlock new priviledges like voting and commenting</p>
            </div>
          </div>


          <div className='sf-promo'>
            <img className='sf-logo' src="https://img.icons8.com/fluency/40/000000/tags.png"/>
            <p>Save your favorite tags, filters, and jobs</p>
          </div>

        </div>

        <div className='sf-right'>
          <div className='demoLogin'>
            <button className='demoLogin-btn' onClick={this.handleDemo}>Log in with Demo User</button>
          </div>

          <form className='signup-form' onSubmit={this.handleSubmit}>
            <label>Display Name:</label>
              <input 
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />

            <label>Email:</label>
              <input
                type="text" 
                value={this.state.email}
                onChange={this.handleInput('email')}
              />

            <label>Password:</label>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />

            <div className='sf-buttons'>
              {this.renderErrors()}
              <button className='sf-submit-button'>Sign up</button>
            </div>
          </form>

          <div className='sf-login-button'>
            <p>Already have an account? {this.props.link}</p>
          </div>
          
        </div>

      </div>
    );

  }
  
  
}

export default SignupForm
