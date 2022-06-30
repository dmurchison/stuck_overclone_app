import React from 'react';
import { IconContext } from 'react-icons';
import { FcQuestions } from 'react-icons/fc';

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
      <div className='signup-page'>
        <HeaderContainer />
        <div className='signup-container'>
          <div className='singup-page-text'>
            <h1 className='signup-page-header'>Join the Stuck Overclone community</h1>
            <div className='signup-page-promo'>
              <IconContext.Provider value={{className: 'signup-page-logo'}}>
                <FcQuestions />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
}

export default SignupForm
