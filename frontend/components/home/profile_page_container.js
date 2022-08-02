import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { fetchUserQuestions } from  '../../actions/session_actions';
import { fetchQuestions } from "../../actions/questions_actions";

const mapStateToProps = (state) => {
  const id = state.session.id;
  return {
    questions: state.entities.questions,
    currentUser: state.entities.users[id]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;