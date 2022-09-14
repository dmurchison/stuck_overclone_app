import { connect } from 'react-redux';
import QuestionCreate from './question_create';
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
    createQuestion: (question) => dispatch(createQuestion(question)),
    removeQuestionErrors: () => dispatch(removeQuestionErrors())
  };
}

export const QuestionCreateContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);
