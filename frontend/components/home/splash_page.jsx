import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const SplashPage = (props) => {
  return (
    <div className="splashpage-container">
      <div className="splashpage-innerBorder">
        <img src="https://img.icons8.com/pastel-glyph/128/FD7E14/search--v2.png"/>
        <h2 className="splashpage-innerHeader">Find the best answer to your technical question, help others answer theirs</h2>
        <Link className="splashpage-signup" to="/signup">Join the community!</Link>
      </div>

      <div className="splashpage-bottom">
        <h2 className="splashpage-bottomTxt">Every Coder Has A Tab Open To Stuck Overclone</h2>
      </div>
    </div>
  );
  
}

