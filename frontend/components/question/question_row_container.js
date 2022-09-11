import { connect } from 'react-redux';
import QuestionRow from './question_row';
import { removeEntity } from '../../actions/questions_actions';
import { fetchUser } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  let question = ownProps.question;
  delete ownProps.question;

  if (!question) {
    return {};
  }

  question.user = state.entities.users[question.author_id];
  delete question.author_id;

  question.votes = 0;
  Object.keys(question).forEach((key) => {
    if (typeof question[key] === "object" && question[key].votableId) {
      question.votes += question[key].numVotes;
      delete question[key];
    }
  });

  return {
    ...question,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEntity: () => dispatch(removeEntity()),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
}

export const QuestionRowContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionRow);
