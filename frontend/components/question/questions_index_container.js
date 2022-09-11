import { connect } from 'react-redux';
import QuestionsIndex from './questions_index';
import { fetchQuestions } from '../../actions/questions_actions';


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

export const QuestionsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

