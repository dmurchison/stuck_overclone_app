import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


class QuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
  }
  
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentWillUnmount() {
    this.props.removeQuestionErrors();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state)
      .then((res) => {
        this.props.errors.body ? ( this.setState({errors: true}) ) : (
          this.props.history.push(`/questions/${res.question.question.id}`)
        );
      })
  }

  updateBody(value) {
    this.setState({ body: value });
  }

  renderErrors() {
    return (
      <div className="question-form-errors">
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`}>{error}</div>
        ))}
      </div> 
    );
  }

  render() {
    const { questionTitle } = this.props;
    return (
      <div className="question-form-container">
        <h1 className="questions-header question-form-header">{questionTitle}</h1>
        
        <form onSubmit={this.handleSubmit} action="">

        <input
            className="question-form-title"
            type="text"
            value={this.state ? this.state.title : ""}
            onChange={this.update("title")}
            placeholder="You may make changes to the title of your question here."
          />
          
          <textarea 
            className="question-form-body"
            value={this.state ? this.state.body : ""}
            onChange={this.update("body")}
            placeholder="You may make changes to the body of your question... (You may use markdown here)"
          />

          <div className="question-form-md">
            <ReactMarkdown className="qf-react-markdown" children={this.state ? this.state.body : ""} remarkPlugins={[remarkGfm]} />
          </div>

          <div className="errors">
            {this.renderErrors()}
          </div>

          <button className="question-form-submit" type="submit">Update Question</button>
          
        </form>
      </div>
    );
  }

}

export default QuestionEdit;
