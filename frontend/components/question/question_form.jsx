import React from 'react';

const QuestionForm = () => {
  return (
    <div className='question-form-container'>
      <input
        className='question-form-title' 
        type="text" 
        placeholder='Title of your question' 
      />
      <textarea></textarea>
    </div>
  )
}

export default QuestionForm
