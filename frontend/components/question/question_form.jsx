import React from 'react';

function QuestionForm() {

  return (
    <div className='question-form-container'>
      <h1 className='questions-header'>Ask a public question</h1>
      <input
        className='question-form-title'
        type="text"
        placeholder='Is there an R function for finding the index of an element in a vector?'
      />
      <textarea className='question-form-body'></textarea>
    </div>
  );

}

export default QuestionForm
