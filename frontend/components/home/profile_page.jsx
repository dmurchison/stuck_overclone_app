import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionRow } from "../question/question_row";

export const ProfilePage = ({ currentUser }) => {

  return (
    <div className='questions-index-container'>
      <div className='page-header-container'>
        <h1 className='page-header'>{currentUser.username}'s Questions</h1>
        <Link className='AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
    </div>
  );

}

