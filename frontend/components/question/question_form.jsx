import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';

const QuestionForm = ({formType, errors, question}) => {
  const [questionTitle, setQuestionTitle] = useState(question.title);
  const [questionBody, setQuestionBody] = useState(question.body);


  return (
    <div className='question-form-container'>
      <h1 className='questions-header question-form-header'>{formType}</h1>
      <form className='question-form' action="">
        <input
          className='question-form-title '
          placeholder='Is there an R function for finding the index of an element in a vector?'
          type="text"
        />
        <textarea className='question-form-body'></textarea>
        <div className='question-form-md'>
          <ReactMarkdown children={''} />
        </div>
        <button className='question-form-submit' type="submit">Post Question</button>
      </form>
    </div>
  );

}

export default QuestionForm;
