import { connect } from "react-redux";
import { fetchQuestions } from "../../actions/questions_actions";
import QuestionsIndex from './questions_index';


const mapStateToProps = (state) => {
  if (!state.entities || !state.entities.questions || !state.entities.users) {
    return {};
  }

  let questions = [];
  Object.keys(state.entities.questions).forEach((questionId) => {
    const question = state.entities.questions[questionId];
    if (question) questions.push(question);
  });
  
  return {
    questions: Object.values(state.entities.questions)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
}

export const QuestionsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

