import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


class QuestionEdit extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      title: "",
      body: "",
      author_id: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }
  
  componentDidMount() {
    // debugger
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
        this.props.history.push(`/questions/${res.question.question.id}`)
    });
  }

  deleteButton() {
    // debugger
    const { question }= this.props;
    return (
      <button onClick={() => this.props.deleteQuestion(question.question.id).then(() => this.props.history.push("/"))}>
        Delete
      </button>
    );
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
    // debugger
    return (this.props.question) ? (
      <div className="question-form-container">
        
        <form onSubmit={this.handleSubmit} action="">
          <input
            className="question-form-title"
            name="title"
            type="text"
            value={this.state ? this.state.title : ""}
            onChange={this.update("title")}
            placeholder={this.props.question.question.title}
          />
          <textarea 
            className="question-form-body"
            name="body"
            value={this.state ? this.state.body : ""}
            onChange={this.update("body")}
            placeholder={this.props.question.question.body}
          />

          <div className="question-form-md">
            <ReactMarkdown className="qf-react-markdown" children={this.state.body} remarkPlugins={[remarkGfm]} />
          </div>

          <div className="errors">
            {this.renderErrors()}
          </div>

          <button className="question-form-submit" type="submit">Update Question</button>
        </form>

        <div className="delete-question-btn">
          {this.deleteButton()}
        </div>

      </div>
    ) : (null);
  }

}

export default QuestionEdit;
