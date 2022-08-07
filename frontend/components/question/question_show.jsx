import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarContainer } from '../nav/navbar_container';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion();
  }


  render() {
    return this.props.question ? (
      <div className='question-show-container'>
        <div className='page-header-container'>
          <h1 className='question-show-title'>{this.props.question.title}</h1>
          <Link className='AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
        </div>
        <div className='question-show-md'>
          <code className='question-show-code'>{this.props.question.body}</code>
          {/* <ReactMarkdown children={this.state.body} plugins={[remarkGfm]} /> */}
        </div>
        <NavBarContainer />
      </div>
    ) : (null);
  }

}

export default QuestionShow;
