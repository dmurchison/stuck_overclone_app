import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";
export const REMOVE_QUESTION_ERRORS = "REMOVE_QUESTION_ERRORS";


export const receiveQuestions = (questions) => {
  return {
   type: RECEIVE_QUESTIONS,
   questions
  };
}

export const receiveQuestion = (question) => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
}

export const removeQuestion = (question) => {
  return {
    type: REMOVE_QUESTION,
    question
  };
}

export const recieveQuestionErrors = (errors) => {
  return {
    type: RECEIVE_QUESTION_ERRORS,
    errors
  };
}

export const removeQuestionErrors = () => {
  return {
    type: REMOVE_QUESTION_ERRORS
  };
}


export const fetchQuestions = () => dispatch => (
  QuestionAPIUtil.fetchQuestions()
    .then(questions => (
      dispatch(receiveQuestions(questions))
    ))
);

export const fetchQuestion = (questionId) => dispatch => (
  QuestionAPIUtil.fetchQuestion(questionId)
    .then(question => (
      dispatch(receiveQuestion(question))
    ))
);

export const createQuestion = (question) => dispatch => (
  QuestionAPIUtil.createQuestion(question)
    .then(question => (
      dispatch(receiveQuestion(question))
    ), err => (
      dispatch(recieveQuestionErrors(err.responseJSON))
    ))
);

export const updateQuestion = (question) => dispatch => (
  QuestionAPIUtil.updateQuestion(question)
    .then(question => (
      dispatch(receiveQuestion(question))
    ))
);

export const deleteQuestion = (questionId) => dispatch => (
  QuestionAPIUtil.deleteQuestion(questionId)
    .then(question => (
      dispatch(removeQuestion(question))
    ))
);


