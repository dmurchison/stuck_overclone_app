import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import QuestionRow from './question_row';

function QuestionsIndex(props) {

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <div className='questions-index-container'>
      <div className='questions-index-header-container'>
        <h1 className='questions-index-header'>Top Questions</h1>
        <Link className='questions-index-AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
    </div>
  );

}

export default QuestionsIndex;
