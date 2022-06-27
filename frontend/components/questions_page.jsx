import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 1.8rem;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const AskQuestionButton = styled.button`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding 12px 10px;
`;

const QuestionRow = styled.div`
  background-color: rgba(255, 255, 255,.1);
  padding: 15px 15px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
`;

const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color: #aaa;
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
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 3px;
  background-color: #3e4a52;
  color: #9cc3db;
`;



function QuestionsPage() {
  return (
    <main>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <AskQuestionButton>Ask&nbsp;Question</AskQuestionButton>
      </HeaderRow>
        <QuestionRow>
          <QuestionStat>0<span>votes</span></QuestionStat>
          <QuestionStat>1<span>answers</span></QuestionStat>
          <QuestionStat>8<span>views</span></QuestionStat>
          <QuestionTitleArea>
            <QuestionLink>how to get to the properties of an object inside of it javascript</QuestionLink>
          </QuestionTitleArea>
        </QuestionRow>
    </main>
  )
}

export default QuestionsPage;
