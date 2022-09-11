import { connect } from 'react-redux';
import QuestionEdit from './question_edit';
import { fetchQuestion, updateQuestion, removeQuestionErrors, deleteQuestion } from '../../actions/questions_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  const currentUser = state.entities.users[state.session.id];
  return {
    formType: "Edit Question",
    errors: state.errors.questions,
    question: state.entities.questions[ownProps.match.params.questionId],
    currentUser: currentUser
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
