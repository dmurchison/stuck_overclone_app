import React from 'react';
import { withRouer } from 'react-router-dom';


class QuestionsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRedirect() {
    this.props.clearEntity();
    this.props.history.push('questions' + this.props.id);
  }

  



  render() {
    const { title, body, numVotes, numAnswers, numUpVotes } = this.props;
    return (
      <div className='questions-row-container'>
        <div className='questions-row-stats'>0<span className='questions-row-stats-span'>votes</span></div>
        {/* <div className='questions-row-stats'>{numVotes}<span className='questions-row-stats-span'>votes</span></div> */}
        <div className='questions-row-stats'>2<span className='questions-row-stats-span'>answers</span></div>
        {/* <div className='questions-row-stats'>{numAnswers}<span className='questions-row-stats-span'>answers</span></div> */}
        <div className='questions-row-stats'>5<span className='questions-row-stats-span'>views</span></div>
        <div className='questions-row-title'>
          <a className='questions-row-question-link'>how to build a react component</a>
          {/* <a className='questions-row-question-link'>{title}</a> */}
          <span className='questions-row-tag'>javascript</span>
          <span className='questions-row-tag'>react</span>
          <span className='questions-row-tag'>component</span>
          <span className='questions-row-tag'>object</span>
          <div className='questions-row-author-timestamp'>
            asked 53 seconds ago <a className='questions-row-author-link'>SirHackALot</a>
          </div>
        </div>
      </div>
    )
  }


}

export default QuestionsRow;
