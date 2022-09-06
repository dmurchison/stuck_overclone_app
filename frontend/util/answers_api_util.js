
// AJAX Requests
export const fetchAnswers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/answers'
  });
}

export const fetchAnswer = (answerId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/answers/${answerId}`
  });
}

export const createAnswer = (questionId, body) => {
  const answer = { questionId, body }
  return $.ajax({
    method: 'POST',
    url: `/api/questions/${questionId}/answers`,
    data: { answer }
  });
}

export const updateAnswer = answer => {
  return $.ajax({
    method: 'PATCH',
    url: `api/answers/${answer.id}`,
    data: { answer }
  });
}

export const deleteAnswer = answerId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/answers/${answerId}`
  });
}
