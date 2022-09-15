import * as VoteAPIUtil from '../util/vote_api_util';

export const HANDLE_VOTE = 'HANDLE_VOTE';


export const handleVote = (vote) => {
  return {
    type: HANDLE_VOTE,
    vote
  };
}


// Thunk Action Creators
export const upVoteQuestion = (questionId) => dispatch => {
  // debugger
  return VoteAPIUtil.upVoteQuestion(questionId)
    .then((vote) => {
      // debugger
      return dispatch(handleVote(vote))
    });
};


export const downVoteQuestion = (questionId) => dispatch => {
  // debugger
  return VoteAPIUtil.downVoteQuestion(questionId)
    .then((vote) => {
      // debugger
      return dispatch(handleVote(vote))
    });
};


export const upVoteAnswer = (answerId) => dispatch => {
  // debugger
  return VoteAPIUtil.upVoteAnswer(answerId)
    .then((vote) => {
      // debugger
      return dispatch(handleVote(vote))
    });
};


export const downVoteAnswer = (answerId) => dispatch => {
  // debugger
  return VoteAPIUtil.downVoteAnswer(answerId)
    .then((vote) => {
      // debugger
      return dispatch(handleVote(vote))
    });
};


