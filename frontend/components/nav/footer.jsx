import React from 'react';


export const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-devLinks">
        <a className="devLink" href="https://dmurchison.github.io/portfolio_site/#/" target={"_blank"}>
          <img src="https://img.icons8.com/nolan/50/internet.png"/>    
        </a>

        <a className="devLink" href="https://www.linkedin.com/in/duncan-murchison/"target={"_blank"}>
          <img src="https://img.icons8.com/nolan/50/linkedin-circled.png"/>
        </a>

        <a className="devLink" href="https://github.com/dmurchison" target={"_blank"}>
          <img src="https://img.icons8.com/nolan/50/github.png"/>        
        </a>

        <a className="devLink" href="https://angel.co/u/duncan-murchison" target={"_blank"}>
          <img src="https://img.icons8.com/nolan/50/angelist.png"/>        
        </a>
      </div>

    </footer>
  );

}

