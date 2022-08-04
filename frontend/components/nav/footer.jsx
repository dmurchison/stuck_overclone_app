import React from 'react';

export const Footer = () => {

  return (
    <footer className='footer-container'>
      <div className='footer-dev-info'>
        Developer Information:
      </div>
      <div className='footer-dev-links-container'>
        <a className='dev-link' href='https://dmurchison.github.io/portfolio_site/#/' target={'_blank'}>
          <img src="https://img.icons8.com/nolan/50/internet.png"/>    
        </a>

        <a className='dev-link' href='https://www.linkedin.com/in/duncan-murchison/'target={'_blank'}>
          <img src="https://img.icons8.com/nolan/50/linkedin-circled.png"/>
        </a>

        <a className='dev-link' href='https://github.com/dmurchison' target={'_blank'}>
          <img src="https://img.icons8.com/nolan/50/github.png"/>        
        </a>

        <a className='dev-link' href='https://angel.co/u/duncan-murchison' target={'_blank'}>
          <img src="https://img.icons8.com/nolan/50/angelist.png"/>        
        </a>
      </div>
    </footer>
  );

}

