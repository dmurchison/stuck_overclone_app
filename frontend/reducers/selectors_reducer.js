export const asArray = ({ questions }) => (
  Object.keys(questions).map((key) => questions[key])
);
