import React from 'react';
import styled from 'styled-components';


// Styling Components

const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 7px;
  span {
    font-size: .7rem;
    display: block;
    font-weight: 300px;
    margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 7px;
  border-radius: 4px;
  font-size: .9rem;
`;

const StyledQuestionRow = styled.div`
  background-color: rgba(255, 255, 255,.05);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;

const AuthorTimeStamp = styled.div`
  display: inline-block;
  color: #aaa;
  font-size: .8rem;
  padding: 10px 0;
`;

const UserLink = styled.a`
  color: #3ca4ff;
`;


// React Components

const QuestionsRow = () => {
  return (
    <div className='questions-row-question-row'>
      <div className='questions-row-question-stats'>0<span>votes</span></div>
      <div className='questions-row-question-stats'>1<span>answers</span></div>
      <div className='questions-row-question-stats'>8<span>views</span></div>
      <div className='questions-row-question-title'>
        <a className='questions-row-question-link'>how to get to the properties of an object inside of it javascript</a>
        <span className='questions-row-question-tag'>javascript</span>
        <span className='questions-row-question-tag'>object</span>
        <div className='questions-row-author-timestamp'>
          asked 53 seconds ago <a className='questions-page-author-link'>SirHackALot</a>
        </div>
      </div>
    </div>
  )
}

export default QuestionsRow;
