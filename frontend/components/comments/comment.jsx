import React from 'react';
import ReactDOM from 'react-dom';

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photo.id,
      userId: this.props.currentUser,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // let newComments = this.props.fetchComments(this.state.photo.id);
    // this.setState({comments: newComments})
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.createComment(this.state)
    .then(() => this.setState({body: ""}))
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    )
  }

  renderComments() {
    // console.log('comment component');
    let newComments = this.props.fetchComments(this.state.photoId);
    console.log('comment componenet');
    console.log(newComments);
    // newComments = newComments.map( comment => {
    //     return (
    //       <li>
    //         {comment}
    //       </li>
    //     );
    //   }
    // )
    //
    // return newComments
  }

  render() {
    const comments = this.renderComments()
    return (
      <div className="comments">
        <ul>
          // {comments}
        </ul>
        <form className="comments-submit" onSubmit={this.handleSubmit}>
          <input
            className=""
            type="text"
            placeholder="Add a comment..."
            value={this.state.body}
            onChange={this.update('body')}
            />
          <div className='comments-submit-btn'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentComponent;
