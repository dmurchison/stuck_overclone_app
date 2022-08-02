import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionRow } from "../question/question_row";

const ProfilePage = ({currentUser}) => {

  return (
    <div className='questions-index-container'>
      <div className='questions-index-header-container'>
        <h1 className='questions-header'>{currentUser.username}'s' Questions</h1>
        <Link className='questions-index-AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
    </div>
  );

}

export default ProfilePage;
