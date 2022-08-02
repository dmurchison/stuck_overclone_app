import React, { useState, useEffect } from 'react';
import reactMarkdown from 'react-markdown';
import { useForm } from 'react-hook-form';

const QuestionForm = ({formType, errors, question}) => {
  const [newFormType, setFormType] = useState(formType);

  return (
    <div className='question-form-container'>
      <h1 className='questions-header question-form-header'>{formType}</h1>
      <h2>{question.author_id.username}</h2>
      <form className='question-form' action="">
        <input
          className='question-form-title '
          type="text"
          placeholder='Is there an R function for finding the index of an element in a vector?'
        />
        <textarea className='question-form-body'></textarea>
        <button className='question-form-submit' type="submit">Post Question</button>
      </form>
    </div>
  );

}

export default QuestionForm
