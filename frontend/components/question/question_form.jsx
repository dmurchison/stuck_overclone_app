import React from 'react';


class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author_id: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      author_id: this.props.currentUser.id,
    });
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
    this.props.createQuestion(this.state);
    this.props.then(() => this.props.history.push('/'))
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
    return (
      <div className='question-form-container'>
        <h1 className='questions-header question-form-header'>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit} action="">
          <input
            className='question-form-title'
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder='How can I replace my react class component with a hook?'
          />
          <textarea 
            className='question-form-body'
            onChange={this.update("body")}
            value={this.state.body}
            placeholder='Please enter any other information about your question... (You may use markdown here)'
          />
          <div className='errors'>
            {this.renderErrors()}
          </div>
          <button className='question-form-submit' type="submit">Post Question</button>
        </form>
      </div>
    );
  }

}

export default QuestionForm;
