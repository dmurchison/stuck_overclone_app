import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import moment from 'moment';


class AnswerShow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      votes: this.props.numVotes,
      currentUserVote: this.props.currentUserVote,
    }

    this.deleteButton = this.deleteButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.changeVote = this.changeVote.bind(this);
    this.votingButtons = this.votingButtons.bind(this);
  }

  // componentDidMount() {
  //   // debugger
  //   this.props.fetchAnswer(this.props.answer.id)
  // }

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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteAnswer(this.props.answer.id);
    this.setState({ state: this.state })
  }

  deleteButton() {
    // debugger
    const { answer, currentUserId }= this.props;
    return (answer.author_id === currentUserId) ? (
      <button
        className="deleteButton"
        onClick={this.handleDelete}
      >
        Delete Answer
      </button>
    ) : (null);
  }

  changeVote(vote) {
    let newUserVote;
    if (vote === 1) {
      this.props.upVoteAnswer(this.props.answer.id);
      newUserVote = 1
    } else if (vote === -1) {
      this.props.downVoteAnswer(this.props.answer.id);
      newUserVote = -1
    }
    if (vote === this.state.currentUserVote) {
      newUserVote = 0;
    }
    this.setState({
      currentUserVote: newUserVote,
    });
  }

  votingButtons() {
    let currentUserVote = 0;
    let votes = 0;
    if (this.props.currentUserVote) {
      currentUserVote = this.props.currentUserVote;
    }
    if (this.props.votes) {
      votes = this.props.votes;
    }
    return (
      <div className="voteButtons-container">
        <button className="voteButton" onClick={() => this.changeVote(1)}>
          <div className="upVote"></div>
        </button>

        <div className="totalVotes">{votes + currentUserVote}</div>

        <button className="voteButton" onClick={() => this.changeVote(-1)}>
          <div className="downVote"></div>
        </button>
      </div>
    );
  }


  render() {
    // debugger
    const { answer }= this.props;
    return (answer) ? (
      <div className='as-container'>
        <div className='as-body'>

          {this.votingButtons()}

          <div>
            <div className='reactMarkdown-container'>
              <ReactMarkdown className='reactMarkdown' children={answer.body} remarkPlugins={[remarkGfm]}/>
            </div>
            <div className="qs-other">

              <div className='calculateTimeStamp'>
                <time dateTime={answer.created_at}>Answered: {this.calculateTimeSince(answer.created_at)}</time>
                <p>By: {answer.username}</p>
              </div>

              <div className="deleteButton-container">
                {this.deleteButton()}
              </div>

            </div>
          </div>

        </div>
      </div>
    ) : (null);
  }

}

export default AnswerShow;

