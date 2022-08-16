import React from 'react';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import moment from 'moment';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.changeVote = this.changeVote.bind(this);
  }

  componentWillMount() {
    this.props.fetchQuestion(this.props.questionId);
  }

  componentWillUnmount() {
    this.props.removeEntity();
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
      newUserVote = -1
    }

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

  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }

  render() {
    let currentUserVote = 0;
    let votes = 0;

    if (this.state.currentUserVote) {
      currentUserVote = this.state.currentUserVote;
    }

    if (this.state.votes) {
      votes = this.state.votes;
    }

    return (this.props.question) ? (
      <div className='question-show-container'>

        <div className='page-header-container'>
          <h1 className='question-show-title'>{this.props.question.title}</h1>
          <Link className='AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
        </div>

        <div className='question-show-timestamp'>
          <time dateTime={this.props.question.created_at}>{this.calculateTimeSince(this.props.question.created_at)}</time>
        </div>

        <div className='question-show-votes-container'>
          <button className='question-show-upVote-btn' onClick={() => this.changeVote(1)}>
            <img className={currentUserVote === 1 ? "active-vote" : ""} src="https://img.icons8.com/ios-filled/50/FD7E14/up-squared.png"/>
          </button>

          <div className='question-show-vote-score'>
            {votes + currentUserVote}
          </div>

          <button className='question-show-downVote-btn' onClick={() => this.changeVote(-1)}>
            <img className={currentUserVote === -1 ? "active-vote" : ""} src="https://img.icons8.com/ios-filled/50/FD7E14/down-squared--v1.png"/>
          </button>
        </div>

        <div className='question-show-md'>
          <code className='question-show-code'>{this.props.question.body}</code>
          {/* <ReactMarkdown>{this.props.question.body}</ReactMarkdown> */}
        </div>
          
      </div>

    ) : (null);
  }

}

export default QuestionShow;
