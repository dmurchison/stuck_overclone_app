import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 30px 20px;
`;

const QuestionTitleInput = styled.input`
  background: none;
  border: 1px solid #aaa;
`;

const QuestionForm = () => {
  return (
    <div className='question-form-container'>
      <input type="text" placeholder='Title of your question' />
      <textarea></textarea>
    </div>
  )
}

export default QuestionForm
