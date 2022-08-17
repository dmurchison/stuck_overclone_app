export const asArray = ({ questions }) => (
  Object.keys(questions).map((key) => questions[key])
);

export const getAuthors = ({ questions }) => (
  Object.values(questions.authors)
);
