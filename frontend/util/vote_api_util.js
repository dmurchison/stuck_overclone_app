
// AJAX Requests
export const upVoteQuestion = (questionId) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/upvote`,
  });
}

export const downVoteQuestion = (questionId) => {
  return $.ajax({
    method: "POST",
    url: `/api/questions/${questionId}/downvote`,
  });
}
