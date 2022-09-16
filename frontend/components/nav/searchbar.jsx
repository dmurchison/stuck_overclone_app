import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionRow } from '../question/question_row';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      indexed: false
    }
  }

  componentDidMount() {
    if (this.props.searchTerm) {
      this.props.searchQuestions(this.props.searchTerm)
        .then(() => {
          this.setState({ questions: this.props.questions, indexed: true })
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm && this.props.searchTerm !== prevProps.searchTerm) {
      this.props.searchQuestions(this.props.searchTerm)
        .then(() => {
          this.setState({ questions: this.props.questions, indexed: true })
        });
    }
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
    const { questions } = this.props;
    if (!this.state.indexed) {
      return null;
    }
    return (!this.state.questions.length) ? (
      <div className="qi-container">

        <div className="qp-header">
          <h1 className="pageHeader">No Questions Match Your Search</h1>
          <Link className="askButton" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

      </div>
    ) : (
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

export default SearchBar

