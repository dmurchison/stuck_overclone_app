import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

function SplashPage(props) {

  return (
    <div className='splashpage-container'>
      <div className='splashpage-outer-border'>
        <div className='splashpage-inner-border'>
          <img src="https://img.icons8.com/pastel-glyph/128/FD7E14/search--v2.png"/>
          <h2 className='splashpage-inner-header'>Find the best answer to your technical question, help others answer theirs</h2>
          <Link className='splashpage-signup' to='/signup'>Join the community!</Link>
        </div>
      </div>
    </div>
  );
  
}

export default SplashPage;