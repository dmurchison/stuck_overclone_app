import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

function SplashPage(props) {

  const [word, setWord] = useState(0);

  const wordsWheel = [
    'developer',
    'data scientist',
    'system admin',
    'mobile developer',
    'game developer'
  ];
  

  return (
    <div className='splash-page-container'>
      <div className='splash-page-outer-border'>
        <div className='left-question-box'>
          <p>Find the best answer to your technical question, help others answer theirs</p>
          <button>Join the community</button>
        </div>
        <div>
          <Link to={'/questions'}>Home</Link>
        </div>
      </div>
    </div>
  );
  
}

export default SplashPage;