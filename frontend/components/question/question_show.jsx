import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarContainer } from '../nav/navbar_container';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.changeVote = this.changeVote.bind(this);
  }

  // Not working on refresh
  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
  }

  update(field) {
    return (event) => this.setState({[field]: event.currentTarget.value});
  }

  submitAnswer() {
    this.props.submitAnswer(this.props.questionId, this.state.body);
    this.state.body = '';
  }

  changeVote(vote) {
    let newUserVote;
    if (vote === 1) {
      this.props.upVoteQuestion(this.props.question.id);
      newUserVote = 1
    } else if (vote === -1) {
      this.props.downVoteQuestion(this.props.question.id);
    };

    if (vote === this.state.currentUserVote) {
      newUserVote = 0;
    }
    
    this.setState({
      currentUserVote: newUserVote,
    });
  }

  componentDidUpdate() {
    if (this.state.votes === undefined && this.props.votes !== undefined) {
      const currentUserVote = this.props.currentUserVote ? this.props.currentUserVote : 0;
      this.setState({
        votes: this.props.votes - currentUserVote,
        currentUserVote,
      });
    }
  }

  render() {
    return (this.props.question) ? (
      <div className='question-show-container'>
        <div className='page-header-container'>
          <h1 className='question-show-title'>{this.props.question.title}</h1>
          <Link className='AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
        </div>
        <div className='question-show-md'>
          <code className='question-show-code'>{this.props.question.body}</code>
          {/* <ReactMarkdown>{this.props.question.body}</ReactMarkdown> */}
        </div>
        <NavBarContainer />
      </div>
    ) : (null);
  }

}

export default QuestionShow;
