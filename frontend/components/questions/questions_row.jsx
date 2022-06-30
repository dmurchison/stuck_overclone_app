import React from 'react';

const QuestionsRow = () => {
  return (
    <div className='questions-row-container'>
      <div className='questions-row-stats'>0<span className='questions-row-stats-span'>votes</span></div>
      <div className='questions-row-stats'>1<span className='questions-row-stats-span'>answers</span></div>
      <div className='questions-row-stats'>8<span className='questions-row-stats-span'>views</span></div>
      <div className='questions-row-title'>
        <a className='questions-row-question-link'>how to get to the properties of an object inside of it javascript</a>
        <span className='questions-row-tag'>javascript</span>
        <span className='questions-row-tag'>object</span>
        <div className='questions-row-author-timestamp'>
          asked 53 seconds ago <a className='questions-row-author-link'>SirHackALot</a>
        </div>
      </div>
    </div>
  )
}

export default QuestionsRow;
