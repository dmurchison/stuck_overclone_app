import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createQuestion, removeQuestionErrors } from "../../actions/questions_actions";


const mapStateToProps = (state) => {
  const currentUserId = state.entities.users[state.session.id]
  return {
    session: state.session,
    formType: "Create Question",
    errors: state.errors.questions,
    question: {
      title: "",
      body: "",
      author_id: currentUserId
    }
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors())
  };
}

export const QuestionFormContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
