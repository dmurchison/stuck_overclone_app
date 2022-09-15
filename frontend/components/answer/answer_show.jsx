import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


class AnswerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.numVotes,
      currentUserVote: this.props.currentUserVote,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.changeVote = this.changeVote.bind(this);
  }
  
  handleDelete(e) {
    e.preventDefault();
    this.props.removeAnswer(this.props.answer.id)
  }

  changeVote(vote) {
    let newUserVote;
    if (vote === 1) {
      this.props.upVoteQuestion(this.props.answer.id);
      newUserVote = 1
    } else if (vote === -1) {
      this.props.downVoteQuestion(this.props.answer.id);
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
    if (this.state.currentUserVote) {
      currentUserVote = this.state.currentUserVote;
    }
    if (this.state.votes) {
      votes = this.state.votes;
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
    const { answer }= this.props;
    return (
      <div className='as-container'>
        <div className='as-body'>
          {this.votingButtons()}
          <div>
            <div className='reactMarkdown-container'>
              <ReactMarkdown className='reactMarkdown' children={answer.body}/>
            </div>
            
          </div>
        </div>
      </div>
    );

  }

}

export default AnswerShow;

