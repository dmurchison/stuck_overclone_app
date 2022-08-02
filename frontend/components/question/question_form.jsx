import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';


const QuestionForm = ({formType, errors, question}) => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');


  return (
    <div className='question-form-container'>
      <h1 className='questions-header question-form-header'>{formType}</h1>
        <input
          className='question-form-title '
          type="text"
          value={questionTitle}
          onChange={e => setQuestionTitle(e.target.value)}
          placeholder='Is there an R function for finding the index of an element in a vector?'
        />
        <textarea 
          className='question-form-body' 
          onChange={e => setQuestionBody(e.target.value)} 
          defaultValue={questionBody}
        />
        <div className='question-form-md'>
          <ReactMarkdown children={questionBody} />
        </div>
        <button className='question-form-submit' type="submit">Post Question</button>
    </div>
  );

}

export default QuestionForm;
