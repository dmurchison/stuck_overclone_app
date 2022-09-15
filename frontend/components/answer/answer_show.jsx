import React from 'react';


class AnswerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.numVotes,
      currentUserVote: this.props.currentUserVote,
    }
  }


  render() {

  }

}

export default AnswerShow;

