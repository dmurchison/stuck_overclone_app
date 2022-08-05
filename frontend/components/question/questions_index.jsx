import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionRow } from './question_row';


export const QuestionsIndex = () => {

  return (
    <div className='questions-index-container'>
      <div className='page-header-container'>
        <h1 className='page-header'>Top Questions</h1>
        <Link className='AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
      <div className='questions-index-rows'>
        <QuestionRow />
        <QuestionRow />
        <QuestionRow />
      </div>
    </div>
  );

}

