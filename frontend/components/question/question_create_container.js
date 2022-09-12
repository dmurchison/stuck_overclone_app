import { connect } from 'react-redux';
import QuestionForm from './question_form';
import { createQuestion, removeQuestionErrors } from '../../actions/questions_actions';


const mapStateToProps = (state) => {
  // debugger
  const currentUserId = state.entities.users[state.session.id];
  return {
    session: state.session,
    formType: "Ask a Public Question",
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
    action: (question) => dispatch(createQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors())
  };
}

export const QuestionCreateContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
