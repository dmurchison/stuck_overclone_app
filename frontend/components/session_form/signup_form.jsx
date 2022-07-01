import React from 'react';
import { IconContext } from 'react-icons';
import { FcQuestions } from 'react-icons/fc';
import { BsArrowDownUp } from 'react-icons/bs'
import { FcFinePrint } from 'react-icons/fc'

import HeaderContainer from '../header/header_container';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      email: "",
      password: ""
    };
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
    this.props.processForm(user);
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({ email: "demouser@email.com", password: '123456' })
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
      <div className='signup-form-container'>
        <HeaderContainer />
          <div className='singup-form-left'>
            <h1 className='signup-form-header'>Join the Stuck Overclone community</h1>

            <div className='signup-form-promo'>
              <IconContext.Provider value={{className: 'signup-form-logo'}}>
                <FcQuestions />
              </IconContext.Provider>
              <p>Get unstuck --- ask a question</p>
            </div>
            <br />
            <div className='signup-form-promo'>
              <IconContext.Provider value={{className: 'signup-form-logo'}}>
                <BsArrowDownUp />
              </IconContext.Provider>
              <p>Unlock new priviledges like voting and commenting</p>
            </div>
            <br />
            <div className='signup-form-promo'>
              <IconContext.Provider value={{className: 'signup-form-logo'}}>
                <FcFinePrint />
              </IconContext.Provider>
              <p>Save your favorite tags, filters, and jobs</p>
            </div>
            <br />
            <div className='signup-form-promo'>
              <IconContext.Provider value={{className: 'signup-form-logo'}}>
                <BsArrowDownUp />
              </IconContext.Provider>
              <p>Earn reputation and badges</p>
            </div>

          </div>
          <br />
          <br />
          <div className='signup-form'>
            <form onSubmit={this.handleSubmit}>
              <label>Display Name:
                <br />
                <input 
                  type="text"
                  value={this.state.display_name}
                  onChange={this.handleInput('display_name')}
                />
              </label>
              <br />
              <label>Email:
                <br />
                <input
                  type="text" 
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
              </label>
              <br />
              <label>Password:
                <br />
                <input 
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
              </label>
              <div className='signup-form-buttons'>
                {this.renderErrors()}
                <button className='signup-form-submit-button'>Sign up</button>
              </div>
            </form>
          </div>
        <div className='signup-form-login-button'>
          <p>If you already have an account, please click here: {this.props.link}</p>
        </div>
      </div>
    )
  }
  
  
}

export default SignupForm
