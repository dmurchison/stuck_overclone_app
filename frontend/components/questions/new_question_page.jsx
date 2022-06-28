import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  padding: 30px 20px;
`;

const NewQuestionPage = () => {
  return (
    <Container>
      <input type="text" placeholder='Title of your question' />
      <textarea></textarea>
    </Container>
  )
}

export default NewQuestionPage
