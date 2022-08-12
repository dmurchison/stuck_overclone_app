import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    console.log(this.props.history)
  }

  buttonChange() {
    return this.props.currentUser ? (
      <div className='header-buttons-div'>
        <Link className='header-profile-link' to={`/users/${this.props.currentUser.id}`}>{this.props.currentUser.username}</Link>
          &nbsp;
        <Link className='header-button-right' to={'/'} onClick={this.logout}>Log out</Link>
      </div>
    ) : (
      <div className='header-buttons-div'>
        <Link className='header-button-left' to='/login'>Log in</Link>
          &nbsp;
        <Link className='header-button-right' to='/signup'>Sign up</Link>
      </div>
    );
  }

  render() {
    return (
      <header className='header-container'>
          <Link className="header-logo" to="/">
            <img className='header-icon' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/25/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"/>          <span className='header-logo-letters'>stuck<b className='header-logo-letters-overclone'>overclone</b></span>
          </Link>
          <form action="" className='header-search-form'>
            <input className='header-search-bar' type="text" placeholder='Search...' />
          </form>
          {this.buttonChange()}
      </header>
    );
  }

}

export default Header;