import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from '../header/header_container';
import QuestionsRow from './questions_row';

class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.askQuestionButton = this.askQuestionButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  askQuestionButton() {
    this.props.history.push(`questions/new`)
  }

  render() {
    const {currentUser} = this.props
    return (
      <div className='questions-index-container'>
        <HeaderContainer />
        <div className='questions-index-header-container'>
          <h1 className='questions-index-header'>Top Questions</h1>
          <div className='questions-index-AskQuestion-btn' onClick={this.askQuestionButton}>Ask&nbsp;Question</div>
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
