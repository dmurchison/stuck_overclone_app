import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import QuestionRow from './question_row';

const QuestionsIndex = ({questions, users}) => {

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <div className='questions-index-container'>
      <div className='questions-index-header-container'>
        <h1 className='questions-header'>Top Questions</h1>
        <Link className='questions-index-AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
      <div className='questions-index-rows'>
        <QuestionRow />
        <QuestionRow />
        <QuestionRow />
      </div>
    </div>
  );

}

export default QuestionsIndex;
