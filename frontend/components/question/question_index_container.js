import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/question_actions';


const mapStateToProps = (state) => {
  // debugger
  const questions = state.entities.questions;
  return {
    questions: Object.values(questions).reverse(),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
}

export const QuestionIndexContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);

