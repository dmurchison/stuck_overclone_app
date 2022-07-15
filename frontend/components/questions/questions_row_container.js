import { connect } from 'react-redux';
import QuestionsRow from './questions_row';
import { clearEntity } from '../../actions/entity_actions';

const mapStateToProps = (state, ownProps) => {
  let question = ownProps.question;
  delete ownProps.question;
  if (!question) {
    return {};
  }

  question.user = state.entities.users[question.author_id];
  delete question.author_id;

  question.votes = 0;
  Object.keys(question).forEach((key) => {
    if (typeof question[key] === "object" && question[key].votableId) {
      question.votes += question[key].value;
      delete question[key];
    }
  });

  return {
    ...question
  };
}

const mapDispatchToProps = dispatch => ({
  clearEntity: () => dispatch(clearEntity())
})

const QuestionsRowContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);
export default QuestionsRowContainer;