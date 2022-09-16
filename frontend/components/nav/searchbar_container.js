import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { searchQuestions, removeQuestionSearch } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: ownProps.match.params.searchTerm,
    questions: Object.values(state.entities.questions).reverse(),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchQuestions: (searchTerm) => dispatch(searchQuestions(searchTerm)),
    removeQuestionSearch: () => dispatch(removeQuestionSearch())
  };
};


export const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);