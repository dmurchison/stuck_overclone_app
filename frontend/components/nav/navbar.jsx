import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = ({currentUser}) => {
  return (
    <div className='navbar-container'>
      <ul className='navbar-list'>
        <li><Link className='navbar-link' to={'/'}>Home</Link></li>
        <li><Link className='navbar-link' to={`/users/${currentUser.id}`}>Profile Page</Link></li>
      </ul>
    </div>
  );
}
