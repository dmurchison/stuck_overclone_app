import React from 'react';
import { Link } from 'react-router-dom';
import QuestionRow from './question_row';


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionRow = this.getQuestionRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  getQuestionRow() {
    const { questions } = this.props;
    return (
      <ul className="questions-index-rows">
        {questions.map((question) => (
          <QuestionRow key={question.id} question={question} />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="questions-index-container">

        <div className="page-header-container">
          <h1 className="page-header">All Questions</h1>
          <Link className="AskQuestion-btn" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

        <div>
          {this.getQuestionRow()}
        </div>
        
      </div>
    );
  }

}

export default QuestionsIndex;

