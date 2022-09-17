import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/question_actions';


// const mapStateToProps = (state) => {
//   if (!state.entities || !state.entities.questions || !state.entities.users) {
//     return {};
//   }

//   let questions = [];
//   Object.keys(state.entities.questions).forEach((questionId) => {
//     const question = state.entities.questions[questionId];
//     if (question) questions.push(question);
//   });

//   return {
//     questions: Object.values(state.entities.questions).reverse()
//   };
// }

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.entities.questions).reverse(),
    users: state.entities.users,
    session: state.session
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
}

export const QuestionIndexContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);

