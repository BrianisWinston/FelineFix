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
  }

  componentDidMount() {
    console.log(this.state.photo.id);
    let newComments = this.props.fetchComments(this.state.photo.id);
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

  render() {
    console.log(this.state.username);
    return (
      <div className="comments">
        <form className="comments-submit" onSubmit={this.handleSubmit}>
          <input
            className=""
            type="text"
            placeholder="Add a comment..."
            value={this.state.body}
            onChange={this.update('body')}
            />
          <input
            className="comments-submit"
            type="submit"
            />
        </form>
      </div>
    )
  }
}

export default CommentComponent;
