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
  padding 15px 10px;
`;

const QuestionsRow = styled.div`
  background-color: 255, 255, 255,.1;
  
`;


function QuestionsPage() {
  return (
    <main>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <AskQuestionButton>Ask&nbsp;Question</AskQuestionButton>
      </HeaderRow>
    </main>
  )
}

export default QuestionsPage;
