import React from 'react';


class SignupForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    // debugger
    this.props.removeSessionErrors();
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


  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: "demouser@email.com",
      password: "password"
    };
    this.props.login(demoUser);
  }

  renderErrors() {
    return (
      <div className="session-errors">
        {this.props.errors.map( (error, i) => (
          <div key={`error-${i}`}>{error}</div>
        ))}
      </div>
    )
  }

  
  render() {
    // debugger
    return (
      <div className="sf-container">

        <div className="sf-left">
          <h1 className="sf-header">Join the Stuck Overclone community</h1>
          <div className="sf-promo">
            <img className="sf-logo" src="https://img.icons8.com/fluency/40/000000/ask-question.png"/>
            <p>Get unstuck --- ask a question</p>
          </div>

          <div className="sf-promo">
            <img className="sf-logo" src="https://img.icons8.com/office/40/000000/sort.png"/>
            <p>Unlock new priviledges like voting and commenting</p>
          </div>

          <div className="sf-promo">
            <img className="sf-logo" src="https://img.icons8.com/fluency/40/000000/tags.png"/>
            <p>Save your favorite tags, filters, and jobs</p>
          </div>
        </div>

        <div className="sf-right">
          <button className="demoLogin-btn" onClick={this.handleDemo}>Log in with Demo User</button>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <div className="errors">
              {this.renderErrors()}
            </div>
            <label className="sf-label">Display Name</label>
              <input 
                className="sf-input"
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />

            <label className="sf-label">Email</label>
              <input
                className="sf-input"
                type="text" 
                value={this.state.email}
                onChange={this.handleInput("email")}
              />

            <label className="sf-label">Password</label>
              <input 
                className="sf-input"
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            <button className="sf-submit-button">Sign up</button>
          </form>

          <div className="sf-login-link">
            <p>Already have an account? {this.props.link}</p>
          </div>
          
        </div>
      </div>
    );
  }
  
}

export default SignupForm;
