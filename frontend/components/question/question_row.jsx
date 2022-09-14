import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


class QuestionRow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {};
  }

  handleRedirect() {
    this.props.removeEntity();
    this.props.history.push(`/questions/${this.props.id}`)
  }

  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }

  
  render() {
    // debugger
    const { question } = this.props;
    return (
      <div className="question-row-container">

        <div className="question-row-stats">1<span className="question-row-stats-span">votes</span></div>
        {/* <div className="questions-row-stats">{numVotes}<span className="questions-row-stats-span">votes</span></div> */}
        <div className="question-row-stats">2<span className="question-row-stats-span">answers</span></div>
        {/* <div className="questions-row-stats">{numAnswers}<span className="questions-row-stats-span">answers</span></div> */}

        <div className="question-row-title">
          <Link className="question-title-link" to={`/questions/${question.id}`}>{question.title}</Link>

          {/* <span className="questions-row-tags">javascript</span>
          <span className="questions-row-tags">react</span>
          <span className="questions-row-tags">component</span>
          <span className="questions-row-tags">object</span> */}

          <div className="question-timestamp">
            <p dateTime={question.updated_at}>Last updated {this.calculateTimeSince(question.updated_at)}</p>
          </div>
        </div>
      </div>
    );
  }

}

export default QuestionRow;
