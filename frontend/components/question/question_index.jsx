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
    return (
      <ul className="qi-rows">
        {this.props.questions.map((question, i) => (
          <QuestionRow key={`question${i}`} question={question} />
        ))}
      </ul>
    );
  }

  
  render() {
    // debugger
    return (this.props.questions) ? (
      <div className="qi-container">

        <div className="qp-header">
          <h1 className="pageHeader">All Questions</h1>
          <Link className="askButton" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

        <div>
          {this.getQuestionRow()}
        </div>
        
      </div>
    ) : (null);
  }

}

export default QuestionIndex;

