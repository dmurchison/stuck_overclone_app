import { connect } from 'react-redux';
import QuestionEdit from './question_edit';
import { fetchQuestion, updateQuestion, removeQuestionErrors, removeQuestion } from '../../actions/questions_actions';


const mapStateToProps = (state, ownProps) => {
  const question = state.entities.questions[ownProps.match.params.questionId];
  const currentUserId = state.entities.users[state.session.id];
  return {
    formType: "Edit Question",
    errors: state.errors.questions,
    currentUserId: currentUserId,
    question: question,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    removeQuestion: (question) => dispatch(removeQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors)
  };
}

export const QuestionEditContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
