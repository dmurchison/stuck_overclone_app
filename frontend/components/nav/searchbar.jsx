import React from 'react';
import { Link } from 'react-router-dom';
import QuestionRow from '../question/question_row';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm
    }
    this.getQuestionRow = this.getQuestionRow
  }

  componentDidMount() {
    this.props.removeQuestionSearch();
    this.props.searchQuestions(this.props.searchTerm);
  }

  componentDidUpdate() {
    if (this.state.searchTerm !== this.props.match.params.searchTerm) {
      this.setState({
          searchTerm: this.props.searchTerm
      });
      this.props.removeQuestionSearch();
      this.props.searchQuestions(this.props.searchTerm);
    } 
  }

  getQuestionRow() {
    const { questions } = this.props;
    return (
      <ul className="qi-rows">
        {questions.map((question, i) => (
          <QuestionRow key={`question${i}`} question={question} />
        ))}
      </ul>
    );
  }


  render() {
    const { questions } = this.props;
    return (questions.length) ? (
      <div className="qi-container">

        <div className="qp-header">
          <h1 className="pageHeader">Search Results</h1>
          <Link className="askButton" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

        <div>
          {this.getQuestionRow()}
        </div>

      </div>
    ) : (
      <div className="qp-header">
        <h1 className="pageHeader">No Matching Results</h1>
        <Link className="askButton" to={"/"}>Back&nbsp;Home</Link>
      </div>
    );
  }

}

export default SearchBar;

