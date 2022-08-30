import { connect } from 'react-redux';
import QuestionRow from './question_row';
import { removeEntity } from '../../actions/questions_actions';
import { getAuthors } from '../../reducers/selectors_reducer';

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
      question.votes += question[key].numVotes;
      delete question[key];
    }
  });



  
  console.log(authors);
  return {
    ...question,
    authors
  };

}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEntity: () => dispatch(removeEntity())
  }
}

export const QuestionRowContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionRow);
