import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { withRouter } from 'react-router';


class QuestionCreate extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = this.props.question;

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props
      .createQuestion(this.state)
      .then((res) => {
        this.props.history.push(`/questions/${res.question.question.id}`)
      });
  }

  renderErrors() {
    return (
      <>
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`}>{error}</div>
        ))}
      </> 
    );
  }

  
  render() {
    // debugger
    return (
      <div className="qf-container">
        <h1 className="qf-header">{this.props.formType} a Public Question</h1>
        
        <form onSubmit={this.handleSubmit} action="">

          <input
            className="qf-title"
            type="text"
            value={this.state ? this.state.title : ""}
            onChange={this.update("title")}
            placeholder="How can I replace my react class component with a hook?"
          />
          <textarea 
            className="qf-body"
            value={this.state ? this.state.body : ""}
            onChange={this.update("body")}
            placeholder="Please enter any other information about your question... (You may use markdown here)"
          />

          <div className="reactMarkdown-container">
            <ReactMarkdown className="reactMarkdown" children={this.state.body} remarkPlugins={[remarkGfm]} />
          </div>

          <div className="errors">
            {this.renderErrors()}
          </div>

          <button className="qf-submitButton" type="submit">Post Question</button>
          
        </form>
      </div>
    );
  }

}

export default withRouter(QuestionCreate);

