import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  updateSearch(e) {
    this.setState({
      searchTerm: e.target.value.substr(0, 100)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search/q=${this.state.searchTerm}`);
    this.setState({ searchTerm: "" });
  }

  logout() {
    this.props.logout();
  }


  render() {
    const { currentUser, session } = this.props;
    return (session && currentUser) ? (
      <header className="header-container">
        <Link className="header-logo" to="/">
          <img 
            className="header-icon" 
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/25/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
          />
          <span className="header-logo-letters">stuck<b className="header-logo-letters-overclone">overclone</b></span>
        </Link>
        <form className="searchForm" action="" onSubmit={this.handleSubmit}>
          <input 
            className="searchBar" 
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="Search..." 
          />
        </form>
        <div className="headerButtons">
          <Link className="profileLink" to={`/users/${session.id}`}>{currentUser.username}</Link>
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

export default withRouter(Header);
