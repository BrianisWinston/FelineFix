import React from 'react';
import ReactDOM from 'react-dom';

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photo.id,
      userId: this.props.currentUser,
      body: "",
      comments: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.renderComments()

    // let newComments = this.props.fetchComments(this.state.photo.id);
    // this.setState({comments: newComments})
  }

  handleSubmit(e) {
    e.preventDefault;
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

  renderComments() {
    this.props.fetchComments(this.state.photoId)
    // .then(data => this.setState({comments: data.comments}))
    // console.log('props');
    // console.log(this.props);
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
          <div className='comments-submit-btn'>
            <input type='submit'/>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentComponent;
