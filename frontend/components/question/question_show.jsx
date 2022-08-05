import React from 'react';
import Link from 'react-router-dom';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion();
  }


  render() {
    return this.props.question ? (
      <div>
        <h1></h1>
      </div>
    ) : (null);
  }

}

export default QuestionShow;
