import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const REMOVE_QUESTION_ERRORS = 'REMOVE_QUESTION_ERRORS';


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


// Thunk action creators
export const fetchQuestions = () => dispatch => {
  // debugger
  return QuestionAPIUtil.fetchQuestions()
    .then(questions => {
      // debugger
      return dispatch(receiveQuestions(questions));
    });
};


export const fetchQuestion = (questionId) => dispatch => {
  // debugger
  return QuestionAPIUtil.fetchQuestion(questionId)
    .then(question => {
      // debugger
      return dispatch(receiveQuestion(question));
    });
};


export const createQuestion = (question) => dispatch => {
  // debugger
  return QuestionAPIUtil.createQuestion(question)
    .then(question => {
      // debugger
      return dispatch(receiveQuestion(question));
    }, errors => (
      dispatch(recieveQuestionErrors(errors.responseJSON))
    ));
};


export const updateQuestion = (question) => dispatch => {
  // debugger
  return QuestionAPIUtil.updateQuestion(question)
    .then(question => {
      // debugger
      return dispatch(receiveQuestion(question));
    }, errors => (
      dispatch(recieveQuestionErrors(errors.responseJSON))
    ));
};


export const deleteQuestion = (questionId) => dispatch => {
  // debugger
  return QuestionAPIUtil.deleteQuestion(questionId)
    .then(question => {
      // debugger
      return dispatch(removeQuestion(question));
    });
};

