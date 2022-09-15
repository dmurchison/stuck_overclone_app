import * as AnswerAPIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const REMOVE_ANSWER_ERRORS = 'REMOVE_ANSWER_ERRORS';

export const receiveAnswers = (payload) => {
  return {
    type: RECEIVE_ANSWERS,
    answers: payload.answers,
    users: payload.users,
  };
}

export const receiveAnswer = (payload) => {
  return {
    type: RECEIVE_ANSWER,
    answer: payload.answer,
    user: payload.user,
  };
}

export const removeAnswer = (payload) => {
  return {
    type: REMOVE_ANSWER,
    answer: payload.answer,
  };
}

export const receiveAnswerErrors = (errors) => {
  return {
    type: RECEIVE_ANSWER_ERRORS,
    errors
  };
}

export const removeAnswerErrors = () => {
  return {
    type: REMOVE_ANSWER_ERRORS
  };
}


// Thunk Action Creators
export const fetchAnswers = () => dispatch => {
  // debugger
  return AnswerAPIUtil.fetchAnswers()
    .then(payload => {
      // debugger
      return dispatch(receiveAnwers(payload));
    });
};


export const fetchAnswer = (answerId) => dispatch => {
  // debugger
  return AnswerAPIUtil.fetchAnswer(answerId)
    .then(payload => {
      // debugger
      return dispatch(receiveAnswer(payload));
    });
};


export const createAnswer = (questionId, body) => dispatch => {
  // debugger
  return AnswerAPIUtil.createAnswer(questionId, body)
    .then(payload => {
      // debugger
      return dispatch(receiveAnswer(payload));
    }, errors => (
      dispatch(receiveAnswerErrors(errors.responseJSON))
    ));
};


export const deleteAnswer = (answerId) => dispatch => {
  // debugger
  return AnswerAPIUtil.deleteAnswer(answerId)
    .then(payload => {
      // debugger
      return dispatch(removeAnswer(payload))
    });
};

