import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createQuestion } from "../../actions/questions_actions";

const mapStateToProps = (state) => {
  const id = state.session.id;
  return {
    formType: "Ask a public question",
    errors: state.errors.questions,
    currentUser: state.entities.users[id]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors())
  };
}

const QuestionFormContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

export default QuestionFormContainer;
