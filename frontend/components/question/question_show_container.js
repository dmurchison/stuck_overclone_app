import { connect } from "react-redux";
import QuestionShow from './question_show';
import {
  fetchQuestion,
  updateQuestion,
  deleteQuestion
} from '../../actions/questions_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.id],
    currentUser: state.session.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuestion: () => dispatch(fetchQuestion(ownProps.match.params.id)),
    deleteQuestion: () => dispatch(deleteQuestion(ownProps.match.params.id))
  };
}

export const QuestionShowContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
