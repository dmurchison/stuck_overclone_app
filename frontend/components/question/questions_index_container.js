import { connect } from "react-redux";
import QuestionsIndex from "./questions_index";
import { fetchQuestions } from "../../actions/questions_actions";


const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.entities.questions).reverse(),
    authors: Object.values(state.entities.users)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
}

export const QuestionsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionsIndex);

