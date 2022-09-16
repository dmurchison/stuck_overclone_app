import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { searchQuestions } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    questions: Object.values(state.entities.questions),
    searchTerm: state.searchbar.searchTerm
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchQuestions: (searchTerm) => dispatch(searchQuestions(searchTerm))
  };
}

export const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

