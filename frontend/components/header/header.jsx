import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {currentUser} = this.props;
    return (
      <header className='header-container'>
          <Link className="header-logo" to="/">
            <FontAwesomeIcon className='header-fa-icon' icon={faStackOverflow} size='2x' />
            <span className='header-logo-letters'>stuck<b className='header-logo-letters-overclone'>overclone</b></span>
          </Link>
          <form action="" className='header-search-form'>
            <input className='header-search-bar' type="text" placeholder='Search...' />
          </form>
          {currentUser && (
            <div>
              <Link className='header-profile-link' to={'/profile'}>Username</Link>
            </div>
          )}
          {!currentUser && (
            <div className='header-buttons-div'>
              <Link className='header-button-LogIn' to='/login'>Log in</Link>
                &nbsp;
              <Link className='header-button-SignUp' to='/signup'>Sign up</Link>
            </div>
          )}
      </header>
    )
  }

}

export default Header;