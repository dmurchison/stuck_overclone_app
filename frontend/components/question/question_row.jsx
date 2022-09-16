import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';


class QuestionRow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {};
  }

  handleRedirect() {
    this.props.removeEntity();
    this.props.history.push(`/questions/${this.props.question.id}`)
  }

  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }

  
  render() {
    // debugger
    const votes = this.props.question.votes;
    const answers = this.props.question.answers;
    const { question } = this.props;

    return (question) ? (
      <div className="qr-container">
        <div className="qr-stats">{votes ? votes.length : 0}<span className="qr-statsSpan">votes</span></div>
        <div className="qr-stats">{answers ? answers.length : 0}<span className="qr-statsSpan">answers</span></div>

        <div className="qr-title">
          <Link className="qr-titleLink" to={`/questions/${question.id}`}>{question.title}</Link>

          {/* <span className="questions-row-tags">javascript</span>
          <span className="questions-row-tags">react</span>
          <span className="questions-row-tags">component</span>
          <span className="questions-row-tags">object</span> */}

          <div className="qr-timeStamp">
            <time dateTime={question.created_at}>Originally Created: {this.calculateTimeSince(question.created_at)}</time>
            <p dateTime={question.updated_at}>Last updated {this.calculateTimeSince(question.updated_at)}</p>
          </div>
        </div>
      </div>
    ) : (null);
  }

}

export default QuestionRow;
