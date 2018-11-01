import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photo.id,
      userId: this.props.currentUser,
      body: "",
      comments: this.props.comments
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.state.photoId)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      photoId: this.state.photoId,
      userId: this.state.userId,
      body: this.state.body
    })
    .then(() => this.setState({body: ""}))
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    )
  }

  renderComments(i) {
    let onecomment = this.props.comments[i];
    let oneuser = this.props.usersOfComments[i];
    let commentId = this.props.commentIds[i]
    return {
        onecomment,
        oneuser,
        commentId
    }
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
    let stuff
    let tester = []
    for (var i=0; i < this.props.comments.length; i++) {
      stuff = this.renderComments(i)
      tester.push(stuff)
    }
    return (
      <div className="comments">
        {tester.map((comment, idx) =>
          <div className="comments-div" key={idx}>
            <div className="comments-username">
              <Link to={`/${this.state.userId.id}`}>
                {comment.oneuser}
              </Link>
            </div>
            <div className="comments-comment">
              {comment.onecomment}
            </div>
            <div className="comment-delete">
              <button onClick={() => { this.props.deleteComment(comment.commentId) }} >{<i className="fas fa-times"></i>}</button>
            </div>
          </div>
        )}
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
