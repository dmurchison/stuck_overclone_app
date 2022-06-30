import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createQuestion } from "../../actions/questions_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Ask a public question",
    errors: state.errors.questions,
    question: {
      title: "",
      body: "",
      author_id: state.session.id
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (question) => dispatch(createQuestion(question)),
    removeErrors: () => dispatch(removeQuestionErrors())
  }
};

const QuestionFormContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

export default QuestionFormContainer;
