import { connect } from 'react-redux';
import AnswerShow from './answer_show';
import { deleteAnswer } from '../../actions/answer_actions';
import { upVoteAnswer, downVoteAnswer } from '../../actions/vote_actions';


const mapStateToProps = (state, ownProps) => {
  const answer = ownProps.answer;
  const author = state.entities.users[answer.authorId];
  let votes = 0;
  let currentUserVote = 0;

  if (answer.votes && Object.keys(answer.votes).length > 0) {
    Object.keys(answer.votes).forEach((vote) => {
      let currentVote = answer.votes[vote];
      votes += currentVote.numVotes;

      if (currentVote.userId === state.session.userId) {
        currentUserVote = currentVote.numVotes
      }
    });
  }
  let returnValue = {
    answer,
    author,
    votes,
    currentUserVote,
    currentUserId: state.session.id
  };
  return returnValue;
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    upVoteAnswer: (answerId) => dispatch(upVoteAnswer(answerId)),
    downVoteAnswer: (answerId) => dispatch(downVoteAnswer(answerId))
  };
}

export const AnswerShowContainer = connect(mapStateToProps, mapDispatchToProps)(AnswerShow);

