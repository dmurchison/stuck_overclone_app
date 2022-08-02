import { connect } from "react-redux";
import QuestionsIndex from './questions_index';
import { fetchQuestions } from "../../actions/questions_actions";

const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.entities.questions).reverse(),
    users: state.entities.users,
    session: state.session
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions())
  };
}

const QuestionsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

export default QuestionsIndexContainer;
