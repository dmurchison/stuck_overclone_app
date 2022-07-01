import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from '../header/header_container';
import QuestionsRow from './questions_row';

import styled from 'styled-components';


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

class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    const {currentUser} = this.props
    return (
      <div className='questions-index-container'>
        <HeaderContainer />
        <div className='questions-index-header-container'>
          <h1 className='questions-index-header'>Top Questions</h1>
          <Link className='questions-index-AskQuestion-btn' to='/questions/new'>Ask&nbsp;Question</Link>
        </div>
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
        <QuestionsRow />
      </div>
    )
  }


}

export default QuestionsIndex;
