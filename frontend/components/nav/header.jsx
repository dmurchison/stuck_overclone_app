import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Header = ({currentUser, logout}) => {

  const handleLogout = (e) => {
    e.preventDefault();
    logout().then(() => <Redirect to={'/'}/>)
  }

  const buttonChange = () => {
    return (currentUser) ? (
      <div className='header-buttons-div'>
        <Link className='header-profile-link' to={'/profile'}>{currentUser.username}</Link>
          &nbsp;
        <Link className='header-logout' to={'/'} onClick={handleLogout}>Log out</Link>
      </div>
    ) : (
      <div className='header-buttons-div'>
        <Link className='header-button-left' to='/login'>Log in</Link>
          &nbsp;
        <Link className='header-button-right' to='/signup'>Sign up</Link>
      </div>
    )
  }

  return (
    <header className='header-container'>
        <Link className="header-logo" to="/">
          <img className='header-icon' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/25/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"/>          <span className='header-logo-letters'>stuck<b className='header-logo-letters-overclone'>overclone</b></span>
        </Link>
        <form action="" className='header-search-form'>
          <input className='header-search-bar' type="text" placeholder='Search...' />
        </form>
        {buttonChange()}
    </header>
  );

}

export default Header;
