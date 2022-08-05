import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createQuestion } from "../../actions/questions_actions";

const mapStateToProps = (state) => {
  const id = state.session.id;
  return {
    session: state.session,
    currentUser: state.entities.users[id],
    formType: "Ask a public question",
    errors: state.errors.questions,
    question: {
      title: "",
      body: "",
      author_id: state.session.id
    }
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question)),
    removeErrors: () => dispatch(removeQuestionErrors())
  };
}

export const QuestionFormContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
