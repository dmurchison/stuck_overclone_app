import { connect } from 'react-redux';
import QuestionEdit from './question_edit';
import { fetchQuestion, updateQuestion, removeQuestionErrors, deleteQuestion } from '../../actions/question_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  const question = state.entities.questions[ownProps.match.params.questionId];
  const currentUserId = state.entities.users[state.session.id];
  return {
    formType: "Update",
    errors: state.errors.questions,
    question: question,
    currentUser: currentUserId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors)
  };
}

export const QuestionEditContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
