import { connect } from "react-redux";
import QuestionShow from "./question_show";
import { fetchQuestion } from "../../actions/questions_actions";
import { removeEntity } from "../../actions/entity_actions";
import { upVoteQuestion, downVoteQuestion } from "../../actions/vote_actions";


const mapStateToProps = (state, ownProps) => {
  // debugger
  const questionId = ownProps.match.params.id;
  let question = {};
  let author = {};
  let votes;
  let currentUserVote = 0;

  if (state.entities.questions && state.entities.questions[questionId]) {
    const tempQuestion = state.entities.questions[questionId];
    question = tempQuestion.question;
    author = tempQuestion.author_id;

    if (tempQuestion.votes && Object.keys(tempQuestion.votes).length > 0) {
      votes = 0;

      Object.keys(tempQuestion.votes).forEach((vote) => {
        let currentVote = tempQuestion.votes[vote];
        votes += currentVote.numVotes;

        if (currentVote.userId === state.session.id) {
          currentUserVote = currentVote.value;
        }
      });
    }
  }
  let returnValue = {
    questionId,
    author,
    question,
    currentUserId: state.entities.users[state.session.id].id
  };
  if (votes !== undefined) {
    returnValue.votes = votes;
    returnValue.currentUserVote = currentUserVote;
  }

  return returnValue;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    upVoteQuestion: (questionId) => dispatch(upVoteQuestion(questionId)),
    downVoteQuestion: (questionId) => dispatch(downVoteQuestion(questionId)),
    removeEntity: () => dispatch(removeEntity())
  };
}

export const QuestionShowContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionShow);
