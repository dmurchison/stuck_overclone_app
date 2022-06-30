import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    const {currentUser} = this.props;
    return (
      <header className='header-container'>
          <Link className="header-logo" to="/">
            <FontAwesomeIcon icon={faStackOverflow} size='2x' />
            <span className='logo-letters'>stuck<b>overclone</b></span>
          </Link>
          <form action="" className='search-form'>
            <input className='search-bar' type="text" placeholder='Search...' />
          </form>
          {currentUser && (
            <div>
              <Link className='profile-link' to={'/profile'}>Username</Link>
            </div>
          )}
          {!currentUser && (
            <nav className='headerButtons-nav'>
              <Link className='headerButtons-login' to='/login'>Log in</Link>
                &nbsp;
              <Link className='headerButtons-signup' to='/signup'>Sign up</Link>
            </nav>
          )}
      </header>
    )
  }

}

export default Header;
