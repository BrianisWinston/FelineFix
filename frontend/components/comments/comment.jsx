import React from 'react';
import ReactDOM from 'react-dom';

class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo
    };
  }

  componentDidMount() {
    this.props.fetchComments(this.state.photo.id)
  }

  render() {
    return (
      <div className="comments">
        hellooooooo
      </div>
    )
  }
}

export default CommentComponent;
