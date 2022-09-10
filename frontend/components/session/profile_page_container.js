import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchQuestions } from '../../actions/questions_actions';
import { fetchUser } from '../../actions/session_actions';
import { sortFunc, toArr } from '../../reducers/selectors_reducer';


const mapStateToProps = (state) => {
  // debugger
  const id = state.session.id
  let questions = sortFunc(toArr(state.entities.questions));
  let usersQuestions = [];

  questions.forEach((question) => {
    if (question.author_id === id) {
      usersQuestions.push(question)
    }
  })
  
  return {
    usersQuestions: usersQuestions,
    currentUser: state.entities.users[id]
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuestions: (data) => dispatch(fetchQuestions(Object.assign({}, data, {author_id: ownProps.match.params.id}))),
    fetchUser: (user) => dispatch(fetchUser(user))
  };
}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
