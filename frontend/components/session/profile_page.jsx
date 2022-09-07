import React from "react";
import { Link } from "react-router-dom";
import QuestionRow from "../question/question_row";


class ProfilePage extends React.Component {
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
    const { usersQuestions } = this.props;
    return (
      <div className="questions-index-rows">
        {usersQuestions.map((question) => (
          <QuestionRow key={question.id} question={question} />
        ))}
      </div>
    );
  }

  render() {
    // debugger
    const { currentUser } = this.props;
    return (
      <div className="questions-index-container">

        <div className="page-header-container">
          <h1 className="page-header">{currentUser.username}'s Questions</h1>
          <Link className="AskQuestion-btn" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

        <div className="users-page-questions-list">
          {this.getQuestionRow()}
        </div>

      </div>
    );
  }

}

export default ProfilePage;
