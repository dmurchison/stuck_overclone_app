import React from 'react';
import { Link } from 'react-router-dom';
import QuestionRow from './question_row';


class QuestionIndex extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.getQuestionRow = this.getQuestionRow.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchQuestions();
  }

  getQuestionRow() {
    const { questions } = this.props;
    return (
      <ul className="qi-rows">
        {questions.map((question) => (
          <QuestionRow key={question.id} question={question} />
        ))}
      </ul>
    );
  }

  
  render() {
    // debugger
    return (
      <div className="qi-container">

        <div className="qp-header">
          <h1 className="pageHeader">All Questions</h1>
          <Link className="askButton" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

        <div>
          {this.getQuestionRow()}
        </div>
        
      </div>
    );
  }

}

export default QuestionIndex;

