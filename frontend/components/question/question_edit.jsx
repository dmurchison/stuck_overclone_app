import React from 'react';
import QuestionForm from './question_create';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import moment from 'moment';


class QuestionEdit extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      title: "",
      body: "",
      author_id: this.props.currentUser.id,
      id: this.props.match.params.questionId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
    this.props
      .updateQuestion(this.state)
      .then((res) => {
        this.props.history.push(`/questions/${res.question.question.id}`)
      });
  }
    
  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }

  deleteButton() {
    // debugger
    const { question, currentUser }= this.props;
    return (
      <button
      className="deleteButton"
      onClick={ () => this.props.deleteQuestion(question.question.id).then(() => this.props.history.push(`/users/${currentUser.id}`)) }
      >
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
    const { formType, question } = this.props;
    return (question) ? (
      <>
        <div className="question-form-container">
          <h1 className="question-header question-form-header">{formType}</h1>
          
          <form onSubmit={this.handleSubmit} action="">

            <input
              className="question-form-title"
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="How can I replace my react class component with a hook?"
            />
            <textarea 
              className="question-form-body"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Please enter any other information about your question... (You may use markdown here)"
            />

            <div className="question-form-md">
              <ReactMarkdown className="qf-react-markdown" children={this.state.body} remarkPlugins={[remarkGfm]} />
            </div>

            <div className="errors">
              {this.renderErrors()}
            </div>

            <button className="question-form-submit" type="submit">Post Question</button>
        
          </form>
        </div>

        <div className="question-edit-container">
          <h1 className="question-show-title">{question.question.title}</h1>

          <div className="question-edit-body">

            <div className="question-show-md">
              <ReactMarkdown className="qs-react-markdown" children={question.question.body} remarkPlugins={[remarkGfm]} />
            </div>

            <div className='question-show-other'>
              <div className="question-timestamp">
                <time dateTime={question.question.created_at}>Last updated {this.calculateTimeSince(question.question.created_at)}</time>
              </div>

              <div className='deleteButton-container'>
                {this.deleteButton()}
              </div>
            </div>

          </div>
        </div>
      </>
    ) : (null);
  }

}

export default QuestionEdit;
