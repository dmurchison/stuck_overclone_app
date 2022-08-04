import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { fetchQuestions } from "../../actions/questions_actions";

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

const mapStateToProps = ({entities: {users, questions}}, ownProps) => {
  return {
    questions: sortFunc(toArr(questions))
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuestions: (data) => dispatch(fetchQuestions(Object.assign({}, data, {author_id: ownProps.match.params.id})))
  };
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;