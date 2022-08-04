import React, { useState } from 'react';


export const QuestionForm = ({formType, errors, question}) => {
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
        placeholder='How can I replace my react class component with a hook?'
      />
      <textarea 
        className='question-form-body' 
        onChange={e => setQuestionBody(e.target.value)} 
        defaultValue={questionBody}
        placeholder='Please enter any other information about your question... (You may use markdown here)'
      />
      {/* <div className='question-form-md'>
        <ReactMarkdown children={questionBody} remarkPlugins={[remarkGfm]} />
      </div> */}
      <button className='question-form-submit' type="submit">Post Question</button>
    </div>
  );

}
