import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

function SplashPage(props) {

  return (
    <div className='splashpage-container'>
      <div className='splashpage-outer-border'>
        <div className='splashpage-inner-border'>
          <p>Find the best answer to your technical question, help others answer theirs</p>
          <Link className='splashpage-signup' to='/signup'>Join the community!</Link>
        </div>
      </div>
    </div>
  );
  
}

export default SplashPage;