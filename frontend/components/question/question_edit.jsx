import React from 'react';
import QuestionForm from './question_form';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import moment from 'moment';


class QuestionEdit extends React.Component {
  constructor(props) {
    // debugger
    super(props);

    this.deleteButton = this.deleteButton.bind(this);
  }
  
  componentDidMount() {
    // debugger
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentWillUnmount() {
    this.props.removeQuestionErrors();
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

  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }


  render() {
    // debugger
    const { action, formType, question, errors, removeQuestionErrors } = this.props;
    return (question) ? (
      <div className="question-edit-container">
        <QuestionForm 
          action={action}
          errors={errors}
          removeQuestionErrors={removeQuestionErrors}
          formType={formType}
          question={question}
        />
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
      </div>
    ) : (null);
  }

}

export default QuestionEdit;
