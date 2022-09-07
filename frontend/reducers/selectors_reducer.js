
// Custom Data Selection Reducers
export const getAllQuestions = (state) => Object.values(state.entities.questions).reverse();


export const asArray = ({ questions }) => (
  Object.keys(questions).map((key) => questions[key])
);

export const getAuthors = (author_id) => (
  Object.values(questions.authors)
);

export const toArr = (obj) => (
  Object.keys(obj).map(key => {
    return obj[key];
  })
);

export const sortFunc = (arr) => (
  arr.sort(function(x, y) {
    if (x.created_at > y.created_at) {
      return -1;
    } else {
      return 1;
    }
  })
);