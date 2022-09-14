import React from 'react';
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
      <>
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`}>{error}</div>
        ))}
      </> 
    );
  }
  

  render() {
    // debugger
    const { formType, question, currentUser } = this.props;
    return (question) ? (
      <div className='qe-container'>
        <h1 className="qf-header">{formType} {currentUser.username}'s Public Question</h1>
        
        <div className='qe-form'>
          <form onSubmit={this.handleSubmit} action="">
            <input
              className="qf-title"
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="How can I replace my react class component with a hook?"
            />
            <textarea 
              className="qf-body"
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Please enter any other information about your question... (You may use markdown here)"
            />
            
            <div className='newQuestion-txt'>
              <p>New Question:</p>
            </div>

            <div className="qf-markdownContainer">
              <ReactMarkdown className="qf-reactMarkdown" children={this.state.body} remarkPlugins={[remarkGfm]} />
            </div>

            <div className="errors">
              {this.renderErrors()}
            </div>

            <button className="qf-submitButton" type="submit">Update Question</button>
          </form>
        </div>

        <p>Old Question: </p>
        
        <div className="qe-body">
          <h1 className="qs-title">{question.question.title}</h1>

          <div className="questionMarkdown">
            <ReactMarkdown className="reactMarkdown" children={question.question.body} remarkPlugins={[remarkGfm]} />
          </div>

          <div className='qs-other'>
            <div className="questionTimeStamp">
              <time dateTime={question.question.created_at}>Last updated {this.calculateTimeSince(question.question.created_at)}</time>
            </div>

            <div className='deleteButton-container'>
              {this.deleteButton()}
            </div>
          </div>

        </div>
      </div>
    ) : (null);
  }

}

export default QuestionEdit;
