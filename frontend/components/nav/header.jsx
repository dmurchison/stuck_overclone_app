import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    console.log(this.props.history)
  }

  buttonChange() {
    const { currentUser } = this.props;
    return (currentUser) ? (
      <div className="headerButtons">
        <form className="searchForm">
          <input className="searchBar" type="text" placeholder="Search..." />
        </form>
        <div>
          <Link className="profileLink" to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
            &nbsp;
          <Link className="buttonRight" to={"/"} onClick={this.logout}>Log out</Link>
        </div>
      </div>
    ) : (
      <div className="headerButtons">
        <Link className="buttonLeft" to="/login">Log in</Link>
          &nbsp;
        <Link className="buttonRight" to="/signup">Sign up</Link>
      </div>
    );
  }

  
  render() {
    const { currentUser } = this.props;
    return (currentUser) ? (
      <header className="header-container">
        <Link className="header-logo" to="/">
          <img className="header-icon" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/25/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"/><span className="header-logo-letters">stuck<b className="header-logo-letters-overclone">overclone</b></span>
        </Link>
        <form action="" className="searchForm">
          <input className="searchBar" type="text" placeholder="Search..." />
        </form>
        <div className="headerButtons">
          <Link className="profileLink" to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
            &nbsp;
          <Link className="buttonRight" to={"/"} onClick={this.logout}>Log out</Link>
        </div>
      </header>
    ) : (
      <header className="header-splash">
        <Link className="header-logoSplash" to="/">
          <img className="header-iconSplash" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/50/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"/><span className="header-logo-letters-splash">stuck<b className="header-logo-letters-overclone-splash">overclone</b></span>
        </Link>
        <div className="headerButtons-splash">
          <Link className="header-loginButton" to="/login">Log in</Link>
            &nbsp;
          <Link className="header-signupButton" to="/signup">Sign up</Link>
        </div>
      </header>
    );
  }

}

export default Header;
