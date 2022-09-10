import { connect } from "react-redux";
import QuestionEdit from "./question_edit";
import { fetchQuestion, updateQuestion, removeQuestionErrors, removeQuestion } from "../../actions/questions_actions";


const mapStateToProps = (state, ownProps) => {
  // debugger
  const question = state.entities.questions[ownProps.match.params.id];
  const currentUserId = state.entities.users[state.session.id];
  return {
    formType: "Edit Question",
    question: question,
    errors: state.errors.questions,
    currentUserId: currentUserId
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    removeQuestion: (questionId) => dispatch(removeQuestion(questionId)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors)
  };
}

export const QuestionEditContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
