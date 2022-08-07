import React from 'react';
import { Link } from 'react-router-dom';


class QuestionRow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { question } = this.props;
    return (
      <div className='questions-row-container'>

        <div className='questions-row-stats'>0<span className='questions-row-stats-span'>votes</span></div>
        {/* <div className='questions-row-stats'>{numVotes}<span className='questions-row-stats-span'>votes</span></div> */}
        <div className='questions-row-stats'>2<span className='questions-row-stats-span'>answers</span></div>
        {/* <div className='questions-row-stats'>{numAnswers}<span className='questions-row-stats-span'>answers</span></div> */}
        <div className='questions-row-stats'>0<span className='questions-row-stats-span'>views</span></div>

        <div className='questions-row-title'>

          <Link className='question-title-link' to={`/questions/${question.id}`}>
            {question.title}
          </Link>

          <span className='questions-row-tag'>javascript</span>
          <span className='questions-row-tag'>react</span>
          <span className='questions-row-tag'>component</span>
          <span className='questions-row-tag'>object</span>

          <div className='questions-row-author-timestamp'>
            {question.timestamp} <a className='questions-row-author-link'>{question.author_id}</a>
          </div>

        </div>
      </div>
    );
  }

}

export default QuestionRow;
