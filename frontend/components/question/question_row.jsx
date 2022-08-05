import React from 'react';


class QuestionRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.props.history.push(`/questions/${this.props.id}`)
  }


  render() {
    return (
      <div className='questions-row-container'>

        <div className='questions-row-stats'>0<span className='questions-row-stats-span'>votes</span></div>
        {/* <div className='questions-row-stats'>{numVotes}<span className='questions-row-stats-span'>votes</span></div> */}
        <div className='questions-row-stats'>2<span className='questions-row-stats-span'>answers</span></div>
        {/* <div className='questions-row-stats'>{numAnswers}<span className='questions-row-stats-span'>answers</span></div> */}
        <div className='questions-row-stats'>0<span className='questions-row-stats-span'>views</span></div>

        <div className='questions-row-title'>

          <a className='question-title-link' onClick={() => this.handleRedirect()}>
            {this.props.question.title}
          </a>

          <span className='questions-row-tag'>javascript</span>
          <span className='questions-row-tag'>react</span>
          <span className='questions-row-tag'>component</span>
          <span className='questions-row-tag'>object</span>

          <div className='questions-row-author-timestamp'>
            {this.props.question.timestamp} <a className='questions-row-author-link'>{this.props.question.author_id.username}</a>
          </div>

        </div>
      </div>
    )
  }

}

export default QuestionRow;
