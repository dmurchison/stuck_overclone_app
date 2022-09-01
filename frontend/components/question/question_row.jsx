import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


class QuestionRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.question.author_id
    }
    // this.getAuthors = this.getAuthors.bind(this);
  }

  handleRedirect() {
    this.props.removeEntity();
    this.props.history.push(`/questions/${this.props.id}`)
  }

  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }

  // getAuthors() {
  //   const { authors } = this.props;
  //   return (
  //     <div>
  //       {authors.map((author) => (
  //         <p>{author.username}</p>
  //       ))}
  //     </div>
  //   );
  // }

  render() {
    const { question } = this.props;
    return (
      <div className='questions-row-container'>

        <div className='questions-row-stats'>1<span className='questions-row-stats-span'>votes</span></div>
        {/* <div className='questions-row-stats'>{numVotes}<span className='questions-row-stats-span'>votes</span></div> */}
        <div className='questions-row-stats'>2<span className='questions-row-stats-span'>answers</span></div>
        {/* <div className='questions-row-stats'>{numAnswers}<span className='questions-row-stats-span'>answers</span></div> */}

        <div className='questions-row-title'>
          <Link className='question-title-link' to={`/questions/${question.id}`}>{question.title}</Link>

          {/* <span className='questions-row-tags'>javascript</span>
          <span className='questions-row-tags'>react</span>
          <span className='questions-row-tags'>component</span>
          <span className='questions-row-tags'>object</span> */}

          <div className='question-timestamp'>
            <p dateTime={this.props.question.updated_at}>Last updated {this.calculateTimeSince(this.props.question.updated_at)}</p>
          </div>
        </div>
      </div>
    );
  }

}

export default QuestionRow;
