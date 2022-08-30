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
    this.votingButtons = this.votingButtons.bind(this);
  }

  componentDidMount() {
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

  votingButtons() {
    let currentUserVote = 0;
    let votes = 0;

    if (this.state.currentUserVote) {
      currentUserVote = this.state.currentUserVote;
    }

    if (this.state.votes) {
      votes = this.state.votes;
    }
    return (
      <div className='question-show-voting-buttons'>

        <button className='voteButton' onClick={() => this.changeVote(1)}>
          <div className='upVote'></div>
        </button>

        <div className='totalVotes'>{votes + currentUserVote}</div>

        <button className='voteButton' onClick={() => this.changeVote(-1)}>
          <div className='downVote'></div>
        </button>

      </div>
    );
  }

  render() {
    return (this.props.question) ? (
      <div className='question-show-container'>

        <div className='page-header-container'>
          <h1 className='question-show-title'>{this.props.question.title}</h1>
        </div>

        <div className='question-show-body'>
          {this.votingButtons()}
          <div>

            <div className='question-body-mds'>
              <code className='question-body-code'>{this.props.question.body}</code>
              {/* <ReactMarkdown>{this.props.question.body}</ReactMarkdown> */}
            </div>

            <div className='question-show-other'>
              {/* <div className='question-show-tags-container'>
                <span className='questions-row-tags'>javascript</span>
                <span className='questions-row-tags'>react</span>
                <span className='questions-row-tags'>component</span>
                <span className='questions-row-tags'>object</span>
              </div> */}

              <div className='question-timestamp'>
                <time dateTime={this.props.question.created_at}>Last updated {this.calculateTimeSince(this.props.question.created_at)}</time>
              </div>
            </div>

          </div>
        </div>

        {/* <div className='question-show-votes-container'>
          <button className='question-show-upVote-btn' onClick={() => this.changeVote(1)}>
            <img className={currentUserVote === 1 ? "active-vote" : ""} src="https://img.icons8.com/ios-filled/50/FD7E14/up-squared.png"/>
          </button>

          <div className='question-show-vote-score'>
            {votes + currentUserVote}
          </div>

          <button className='question-show-downVote-btn' onClick={() => this.changeVote(-1)}>
            <img className={currentUserVote === -1 ? "active-vote" : ""} src="https://img.icons8.com/ios-filled/50/FD7E14/down-squared--v1.png"/>
          </button>
        </div> */}

          
      </div>

    ) : (null);
  }

}

export default QuestionShow;
