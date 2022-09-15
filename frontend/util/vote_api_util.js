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

export const upVoteAnswer = (answerId) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/answers/${answerId}/upvote`,
  });
}

export const downVoteAnswer = (answerId) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: `/api/answers/${answerId}/downvote`,
  })
}

