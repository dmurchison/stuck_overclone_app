import * as VoteAPIUtil from "../util/vote_api_util";

export const HANDLE_VOTE = "HANDLE_VOTE";


export const handleVote = (vote) => {
  return {
    type: HANDLE_VOTE,
    vote
  };
}


// Thunk action creators
export const upVoteQuestion = (questionId) => dispatch => {
  // debugger
  return VoteAPIUtil.upVoteQuestion(questionId)
    .then((vote) => {
      // debugger
      dispatch(handleVote(vote))
    });
};

export const downVoteQuestion = (questionId) => dispatch => {
  // debugger
  return VoteAPIUtil.downVoteQuestion(questionId)
    .then((vote) => {
      // debugger
      dispatch(handleVote(vote))
    });
};
