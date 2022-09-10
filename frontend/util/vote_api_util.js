// AJAX Requests

export const upVoteQuestion = (questionId) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/upvote`,
  });
}

export const downVoteQuestion = (questionId) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/downvote`,
  });
}
