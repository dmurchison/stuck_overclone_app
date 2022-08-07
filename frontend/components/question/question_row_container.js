import { connect } from 'react-redux';
import QuestionRow from './question_row';
import { removeEntity } from '../../actions/questions_actions';

const mapStateToProps = (state, ownProps) => {
  let question = ownProps.question;
  delete ownProps.question;
  if (!question) {
    return {};
  }
  
  question.user = state.entities.users[question.author_id];
  delete question.author_id;
  
  return {
    ...question,
    author: question.user
  };

}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEntity: () => dispatch(removeEntity())
  }
}

export const QuestionRowContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionRow);
