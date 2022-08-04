import { connect } from "react-redux";
import { ProfilePage } from "./profile_page";
import { fetchQuestions } from "../../actions/questions_actions";
import { fetchUser } from "../../actions/session_actions";

const toArr = (obj) => (
  Object.keys(obj).map(key => {
    return obj[key];
  })
);

const sortFunc = (arr) => (
  arr.sort(function(x, y) {
    if (x.created_at > y.created_at) {
      return -1;
    } else {
      return 1;
    }
  })
);

const mapStateToProps = (state) => {
  const id = state.session.id
  return {
    questions: sortFunc(toArr(state.entities.questions)),
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
