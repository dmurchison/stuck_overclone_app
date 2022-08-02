import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionRow } from "../question/question_row";

function ProfilePage(props) {

  return (
    <div className='questions-index-container'>
      <div className='questions-index-header-container'>
        <h1 className='questions-index-header'>Your Questions</h1>
        <Link className='questions-index-AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
    </div>
  );

}

export default ProfilePage;
