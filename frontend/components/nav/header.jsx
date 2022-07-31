import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Header({currentUser, logout}) {

  const handleLogout = (e) => {
    e.preventDefault();
    logout().then(() => <Redirect to={'/'}/>)
  }

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
          <div className='header-buttons-div'>
            <Link className='header-profile-link' to={'/profile'}>{currentUser.username}</Link>
              &nbsp;
            <button className='header-logout-button' onClick={handleLogout}>Log out</button>
          </div>
        )}
        {!currentUser && (
          <div className='header-buttons-div'>
            <Link className='header-button-left' to='/login'>Log in</Link>
              &nbsp;
            <Link className='header-button-right' to='/signup'>Sign up</Link>
          </div>
        )}
    </header>
  );

}

export default Header;
