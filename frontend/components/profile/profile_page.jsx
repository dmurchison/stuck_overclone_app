import React from 'react';
import { Link } from 'react-router-dom';
import QuestionRow from '../question/question_row';


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
      <div className="qi-rows">
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
      <div className="qi-container">

        <div className="qp-header">
          <h1 className="pageHeader">{currentUser.username}'s Questions</h1>
          <Link className="askButton" to={"/questions/new"}>Ask&nbsp;Question </Link>
        </div>

        <div className="pp-questionList">
          {this.getQuestionRow()}
        </div>

      </div>
    );
  }

}

export default ProfilePage;
