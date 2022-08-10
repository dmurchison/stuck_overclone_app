import * as VoteAPIUtil from '../util/vote_api_util';

export const HANDLE_VOTE = 'HANDLE_VOTE';

export const handleVote = (vote) => {
  return {
    type: HANDLE_VOTE,
    vote
  };
}

export const upVoteQuestion = (questionId) => dispatch => (
  VoteAPIUtil.upVoteQuestion(questionId).then((vote) => (
    dispatch(handleVote(vote))
  ))
);

export const downVoteQuestion = (questionId) => dispatch => (
  VoteAPIUtil.downVoteQuestion(questionId).then((vote) => (
    dispatch(handleVote(vote))
  ))
);
