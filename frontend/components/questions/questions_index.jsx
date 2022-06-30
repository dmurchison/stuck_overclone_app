import React from 'react';
import HeaderContainer from '../header/header_container';

import styled from 'styled-components';
import QuestionsRow from './questions_row';


// Styling Components

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
  padding: 12px 10px;
`;

// React Components

function QuestionsIndex() {
  return (
    <main>
      <HeaderContainer />
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <AskQuestionButton>Ask&nbsp;Question</AskQuestionButton>
      </HeaderRow>
      <QuestionsRow />
      <QuestionsRow />
      <QuestionsRow />
      <QuestionsRow />
      <QuestionsRow />
    </main>
  )
}

export default QuestionsIndex;
